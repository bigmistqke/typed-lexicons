declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getPopularFeedGenerators";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "An unspecced view of globally popular feed generators.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly query: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["feeds"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly feeds: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.feed.defs#generatorView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getPopularFeedGenerators.d.ts.map