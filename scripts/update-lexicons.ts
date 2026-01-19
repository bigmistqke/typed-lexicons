#!/usr/bin/env node

import { execSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LEXICONS_DIR = join(ROOT, "lexicons");
const TEMP_DIR = join(ROOT, ".temp-atproto");

const REPO_URL = "https://github.com/bluesky-social/atproto.git";
const BRANCH = "main";
const PACKAGE_JSON_PATH = join(ROOT, "package.json");

function findTsFiles(dir: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findTsFiles(fullPath));
    } else if (entry.endsWith(".ts")) {
      files.push(fullPath);
    }
  }

  return files;
}

function updatePackageJsonExports() {
  console.log("\nUpdating package.json exports...");

  const tsFiles = findTsFiles(LEXICONS_DIR);
  const packageJson = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf-8"));

  // Build exports object
  const exports: Record<string, { development: string; types: string; import: string }> = {};

  for (const tsFile of tsFiles) {
    // Get path relative to lexicons dir, without .ts extension
    const relativePath = relative(LEXICONS_DIR, tsFile).replace(/\.ts$/, "");
    const exportKey = `./${relativePath}`;

    exports[exportKey] = {
      development: `./lexicons/${relativePath}.ts`,
      types: `./dist/${relativePath}.d.ts`,
      import: `./dist/${relativePath}.js`,
    };
  }

  // Sort exports alphabetically for consistency
  const sortedExports: Record<string, { development: string; types: string; import: string }> = {};
  for (const key of Object.keys(exports).sort()) {
    sortedExports[key] = exports[key];
  }

  packageJson.exports = sortedExports;

  writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`Updated package.json with ${Object.keys(sortedExports).length} export entries`);
}

async function main() {
  console.log("Fetching atproto lexicons...\n");

  // Clean up existing directories
  if (existsSync(LEXICONS_DIR)) {
    rmSync(LEXICONS_DIR, { recursive: true });
  }
  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true });
  }

  // Sparse clone just the lexicons folder
  console.log("Cloning lexicons from atproto repo...");
  mkdirSync(TEMP_DIR, { recursive: true });

  execSync(`git clone --depth 1 --filter=blob:none --sparse ${REPO_URL} .`, {
    cwd: TEMP_DIR,
    stdio: "inherit",
  });

  execSync(`git sparse-checkout set lexicons`, {
    cwd: TEMP_DIR,
    stdio: "inherit",
  });

  const sourceLexicons = join(TEMP_DIR, "lexicons");

  // Find all JSON files
  const jsonFiles = findJsonFiles(sourceLexicons);
  console.log(`\nFound ${jsonFiles.length} lexicon files\n`);

  // Convert each JSON to TypeScript
  let converted = 0;
  for (const jsonPath of jsonFiles) {
    const relativePath = relative(sourceLexicons, jsonPath);
    const tsPath = join(LEXICONS_DIR, relativePath.replace(/\.json$/, ".ts"));

    // Read and parse JSON
    const content = readFileSync(jsonPath, "utf-8");
    const json = JSON.parse(content);

    // Create TypeScript content
    const tsContent = `export default ${JSON.stringify(json, null, 2)} as const;\n`;

    // Ensure directory exists
    mkdirSync(dirname(tsPath), { recursive: true });

    // Write TypeScript file
    writeFileSync(tsPath, tsContent);
    converted++;
  }

  console.log(`Converted ${converted} files to TypeScript`);

  // Clean up temp directory
  rmSync(TEMP_DIR, { recursive: true });

  console.log(`\nLexicons written to: ${LEXICONS_DIR}`);

  // Update package.json exports
  updatePackageJsonExports();
}

function findJsonFiles(dir: string) {
  const files: Array<string> = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findJsonFiles(fullPath));
    } else if (entry.endsWith(".json")) {
      files.push(fullPath);
    }
  }

  return files;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
