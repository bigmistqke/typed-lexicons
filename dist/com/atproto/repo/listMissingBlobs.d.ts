declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.listMissingBlobs";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 1000;
                        readonly default: 500;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["blobs"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly blobs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#recordBlob";
                            };
                        };
                    };
                };
            };
        };
        readonly recordBlob: {
            readonly type: "object";
            readonly required: readonly ["cid", "recordUri"];
            readonly properties: {
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly recordUri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listMissingBlobs.d.ts.map