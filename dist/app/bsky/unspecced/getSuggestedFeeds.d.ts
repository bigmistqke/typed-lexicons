declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getSuggestedFeeds";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of suggested feeds";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 25;
                        readonly default: 10;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["feeds"];
                    readonly properties: {
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
//# sourceMappingURL=getSuggestedFeeds.d.ts.map