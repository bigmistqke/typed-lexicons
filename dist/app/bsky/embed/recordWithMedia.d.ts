declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.embed.recordWithMedia";
    readonly description: "A representation of a record embedded in a Bluesky record (eg, a post), alongside other compatible embeds. For example, a quote post and image, or a quote post and external URL card.";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly required: readonly ["record", "media"];
            readonly properties: {
                readonly record: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.embed.record";
                };
                readonly media: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.embed.images", "app.bsky.embed.video", "app.bsky.embed.external"];
                };
            };
        };
        readonly view: {
            readonly type: "object";
            readonly required: readonly ["record", "media"];
            readonly properties: {
                readonly record: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.embed.record#view";
                };
                readonly media: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.embed.images#view", "app.bsky.embed.video#view", "app.bsky.embed.external#view"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=recordWithMedia.d.ts.map