declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getActorFeeds";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of feeds (feed generator records) created by the actor (in the actor's repo).";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
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
//# sourceMappingURL=getActorFeeds.d.ts.map