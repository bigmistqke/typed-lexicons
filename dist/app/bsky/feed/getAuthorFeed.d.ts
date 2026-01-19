declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getAuthorFeed";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.";
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
                    readonly filter: {
                        readonly type: "string";
                        readonly description: "Combinations of post/repost types to include in response.";
                        readonly knownValues: readonly ["posts_with_replies", "posts_no_replies", "posts_with_media", "posts_and_author_threads", "posts_with_video"];
                        readonly default: "posts_with_replies";
                    };
                    readonly includePins: {
                        readonly type: "boolean";
                        readonly default: false;
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
//# sourceMappingURL=getAuthorFeed.d.ts.map