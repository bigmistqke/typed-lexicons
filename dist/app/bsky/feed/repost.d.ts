declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.repost";
    readonly defs: {
        readonly main: {
            readonly description: "Record representing a 'repost' of an existing Bluesky post.";
            readonly type: "record";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["subject", "createdAt"];
                readonly properties: {
                    readonly subject: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.repo.strongRef";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                    readonly via: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.repo.strongRef";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=repost.d.ts.map