declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.getRecord";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a single record from a repository. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["repo", "collection", "rkey"];
                readonly properties: {
                    readonly repo: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "The handle or DID of the repo.";
                    };
                    readonly collection: {
                        readonly type: "string";
                        readonly format: "nsid";
                        readonly description: "The NSID of the record collection.";
                    };
                    readonly rkey: {
                        readonly type: "string";
                        readonly description: "The Record Key.";
                        readonly format: "record-key";
                    };
                    readonly cid: {
                        readonly type: "string";
                        readonly format: "cid";
                        readonly description: "The CID of the version of the record. If not specified, then return the most recent version.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["uri", "value"];
                    readonly properties: {
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly cid: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                        readonly value: {
                            readonly type: "unknown";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "RecordNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getRecord.d.ts.map