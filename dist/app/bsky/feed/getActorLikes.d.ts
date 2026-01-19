declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getActorLikes";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.";
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
                readonly name: "BlockedActor";
            }, {
                readonly name: "BlockedByActor";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getActorLikes.d.ts.map