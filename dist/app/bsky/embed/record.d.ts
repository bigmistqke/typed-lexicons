declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.embed.record";
    readonly description: "A representation of a record embedded in a Bluesky record (eg, a post). For example, a quote-post, or sharing a feed generator record.";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly required: readonly ["record"];
            readonly properties: {
                readonly record: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
            };
        };
        readonly view: {
            readonly type: "object";
            readonly required: readonly ["record"];
            readonly properties: {
                readonly record: {
                    readonly type: "union";
                    readonly refs: readonly ["#viewRecord", "#viewNotFound", "#viewBlocked", "#viewDetached", "app.bsky.feed.defs#generatorView", "app.bsky.graph.defs#listView", "app.bsky.labeler.defs#labelerView", "app.bsky.graph.defs#starterPackViewBasic"];
                };
            };
        };
        readonly viewRecord: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "author", "value", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly author: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewBasic";
                };
                readonly value: {
                    readonly type: "unknown";
                    readonly description: "The record data itself.";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly replyCount: {
                    readonly type: "integer";
                };
                readonly repostCount: {
                    readonly type: "integer";
                };
                readonly likeCount: {
                    readonly type: "integer";
                };
                readonly quoteCount: {
                    readonly type: "integer";
                };
                readonly embeds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["app.bsky.embed.images#view", "app.bsky.embed.video#view", "app.bsky.embed.external#view", "app.bsky.embed.record#view", "app.bsky.embed.recordWithMedia#view"];
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly viewNotFound: {
            readonly type: "object";
            readonly required: readonly ["uri", "notFound"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly notFound: {
                    readonly type: "boolean";
                    readonly const: true;
                };
            };
        };
        readonly viewBlocked: {
            readonly type: "object";
            readonly required: readonly ["uri", "blocked", "author"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly blocked: {
                    readonly type: "boolean";
                    readonly const: true;
                };
                readonly author: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.feed.defs#blockedAuthor";
                };
            };
        };
        readonly viewDetached: {
            readonly type: "object";
            readonly required: readonly ["uri", "detached"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly detached: {
                    readonly type: "boolean";
                    readonly const: true;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=record.d.ts.map