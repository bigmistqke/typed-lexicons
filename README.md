# @bigmistqke/typed-lexicons

Typed ATProto lexicons for TypeScript. This package provides all lexicon definitions from the [bluesky-social/atproto](https://github.com/bluesky-social/atproto) repository as TypeScript modules with full const type inference.

## Installation

```bash
npm install @bigmistqke/typed-lexicons
# or
pnpm add @bigmistqke/typed-lexicons
```

## Usage

Import lexicons directly by their path:

```typescript
import post from "@bigmistqke/typed-lexicons/app/bsky/feed/post";
import profile from "@bigmistqke/typed-lexicons/app/bsky/actor/profile";

// Full type inference - TypeScript knows the exact shape
post.id; // "app.bsky.feed.post"
post.defs.main.type; // "record"
post.defs.main.record.properties.text.maxLength; // 3000
```

Each lexicon is exported with `as const`, giving you precise literal types for all values.

## Updating Lexicons

To fetch the latest lexicons from the atproto repository:

```bash
pnpm update
```

This runs the update script which:

1. Sparse-clones the lexicons folder from [bluesky-social/atproto](https://github.com/bluesky-social/atproto)
2. Converts all JSON lexicon files to TypeScript with `as const` assertions
3. Outputs them to the `lexicons/` directory

## Available Lexicons

The package includes all official ATProto lexicons organized by namespace:

- `app/bsky/*` - Bluesky app lexicons (posts, profiles, feeds, etc.)
- `com/atproto/*` - Core ATProto lexicons (repos, sync, identity, etc.)
- `chat/bsky/*` - Bluesky chat lexicons
- `tools/ozone/*` - Ozone moderation tool lexicons

## License

MIT
