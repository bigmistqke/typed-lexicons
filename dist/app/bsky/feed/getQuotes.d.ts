declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getQuotes";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of quotes for a given post.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uri"];
                readonly properties: {
                    readonly uri: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) of post record";
                    };
                    readonly cid: {
                        readonly type: "string";
                        readonly format: "cid";
                        readonly description: "If supplied, filters to quotes of specific version (by CID) of the post record.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
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
                    readonly required: readonly ["uri", "posts"];
                    readonly properties: {
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly cid: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly posts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.feed.defs#postView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getQuotes.d.ts.map