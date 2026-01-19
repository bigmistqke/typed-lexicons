declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.deleteRecord";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["repo", "collection", "rkey"];
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
                        };
                        readonly swapRecord: {
                            readonly type: "string";
                            readonly format: "cid";
                            readonly description: "Compare and swap with the previous record by CID.";
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
                    readonly properties: {
                        readonly commit: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.repo.defs#commitMeta";
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
//# sourceMappingURL=deleteRecord.d.ts.map