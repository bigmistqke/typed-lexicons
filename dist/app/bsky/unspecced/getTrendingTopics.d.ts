declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getTrendingTopics";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of trending topics";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly viewer: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account making the request (not included for public/unauthenticated queries). Used to boost followed accounts in ranking.";
                    };
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
                    readonly required: readonly ["topics", "suggested"];
                    readonly properties: {
                        readonly topics: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.unspecced.defs#trendingTopic";
                            };
                        };
                        readonly suggested: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.unspecced.defs#trendingTopic";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getTrendingTopics.d.ts.map