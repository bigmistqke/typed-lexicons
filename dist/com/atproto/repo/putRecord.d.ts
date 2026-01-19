declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.putRecord";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["repo", "collection", "rkey", "record"];
                    readonly nullable: readonly ["swapRecord"];
                    readonly properties: {
                        readonly repo: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                            readonly description: "The handle or DID of the repo (aka, current account).";
                        };
                        readonly collection: {
                            readonly type: "string";
                            readonly format: "nsid";
                            readonly description: "The NSID of the record collection.";
                        };
                        readonly rkey: {
                            readonly type: "string";
                            readonly format: "record-key";
                            readonly description: "The Record Key.";
                            readonly maxLength: 512;
                        };
                        readonly validate: {
                            readonly type: "boolean";
                            readonly description: "Can be set to 'false' to skip Lexicon schema validation of record data, 'true' to require it, or leave unset to validate only for known Lexicons.";
                        };
                        readonly record: {
                            readonly type: "unknown";
                            readonly description: "The record to write.";
                        };
                        readonly swapRecord: {
                            readonly type: "string";
                            readonly format: "cid";
                            readonly description: "Compare and swap with the previous record by CID. WARNING: nullable and optional field; may cause problems with golang implementation";
                        };
                        readonly swapCommit: {
                            readonly type: "string";
                            readonly format: "cid";
                            readonly description: "Compare and swap with the previous commit by CID.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["uri", "cid"];
                    readonly properties: {
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly cid: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                        readonly commit: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.repo.defs#commitMeta";
                        };
                        readonly validationStatus: {
                            readonly type: "string";
                            readonly knownValues: readonly ["valid", "unknown"];
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidSwap";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=putRecord.d.ts.map