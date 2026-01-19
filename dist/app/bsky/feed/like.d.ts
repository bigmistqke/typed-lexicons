declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.like";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record declaring a 'like' of a piece of subject content.";
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
//# sourceMappingURL=like.d.ts.map