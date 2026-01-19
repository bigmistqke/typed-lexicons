declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getFeed";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a hydrated feed from an actor's selected feed generator. Implemented by App View.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["feed"];
                readonly properties: {
                    readonly feed: {
                        readonly type: "string";
                        readonly format: "at-uri";
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
                    readonly required: readonly ["feed"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly feed: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.feed.defs#feedViewPost";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "UnknownFeed";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getFeed.d.ts.map