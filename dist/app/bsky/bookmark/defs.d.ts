declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.bookmark.defs";
    readonly defs: {
        readonly bookmark: {
            readonly description: "Object used to store bookmark data in stash.";
            readonly type: "object";
            readonly required: readonly ["subject"];
            readonly properties: {
                readonly subject: {
                    readonly description: "A strong ref to the record to be bookmarked. Currently, only `app.bsky.feed.post` records are supported.";
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
            };
        };
        readonly bookmarkView: {
            readonly type: "object";
            readonly required: readonly ["subject", "item"];
            readonly properties: {
                readonly subject: {
                    readonly description: "A strong ref to the bookmarked record.";
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly item: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.feed.defs#blockedPost", "app.bsky.feed.defs#notFoundPost", "app.bsky.feed.defs#postView"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map