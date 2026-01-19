declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.createRecord";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create a single new repository record. Requires auth, implemented by PDS.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["repo", "collection", "record"];
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
                            readonly description: "The record itself. Must contain a $type field.";
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
                readonly description: "Indicates that 'swapCommit' didn't match current repo commit.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=createRecord.d.ts.map