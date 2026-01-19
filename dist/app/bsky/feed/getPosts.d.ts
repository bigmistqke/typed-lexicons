declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getPosts";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uris"];
                readonly properties: {
                    readonly uris: {
                        readonly type: "array";
                        readonly description: "List of post AT-URIs to return hydrated views for.";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly maxLength: 25;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["posts"];
                    readonly properties: {
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
//# sourceMappingURL=getPosts.d.ts.map