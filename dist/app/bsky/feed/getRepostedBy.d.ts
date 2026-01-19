declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getRepostedBy";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of reposts for a given post.";
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
                        readonly description: "If supplied, filters to reposts of specific version (by CID) of the post record.";
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
                    readonly required: readonly ["uri", "repostedBy"];
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
                        readonly repostedBy: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getRepostedBy.d.ts.map