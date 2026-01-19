declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.listRecords";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List a range of records in a repository, matching a specific collection. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["repo", "collection"];
                readonly properties: {
                    readonly repo: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "The handle or DID of the repo.";
                    };
                    readonly collection: {
                        readonly type: "string";
                        readonly format: "nsid";
                        readonly description: "The NSID of the record type.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                        readonly description: "The number of records to return.";
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly reverse: {
                        readonly type: "boolean";
                        readonly description: "Flag to reverse the order of the returned records.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["records"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly records: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#record";
                            };
                        };
                    };
                };
            };
        };
        readonly record: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "value"];
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
};
export default _default;
//# sourceMappingURL=listRecords.d.ts.map