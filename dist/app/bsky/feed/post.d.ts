declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.post";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record containing a Bluesky post.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["text", "createdAt"];
                readonly properties: {
                    readonly text: {
                        readonly type: "string";
                        readonly maxLength: 3000;
                        readonly maxGraphemes: 300;
                        readonly description: "The primary post content. May be an empty string, if there are embeds.";
                    };
                    readonly entities: {
                        readonly type: "array";
                        readonly description: "DEPRECATED: replaced by app.bsky.richtext.facet.";
                        readonly items: {
                            readonly type: "ref";
                            readonly ref: "#entity";
                        };
                    };
                    readonly facets: {
                        readonly type: "array";
                        readonly description: "Annotations of text (mentions, URLs, hashtags, etc)";
                        readonly items: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.richtext.facet";
                        };
                    };
                    readonly reply: {
                        readonly type: "ref";
                        readonly ref: "#replyRef";
                    };
                    readonly embed: {
                        readonly type: "union";
                        readonly refs: readonly ["app.bsky.embed.images", "app.bsky.embed.video", "app.bsky.embed.external", "app.bsky.embed.record", "app.bsky.embed.recordWithMedia"];
                    };
                    readonly langs: {
                        readonly type: "array";
                        readonly description: "Indicates human language of post primary text content.";
                        readonly maxLength: 3;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "language";
                        };
                    };
                    readonly labels: {
                        readonly type: "union";
                        readonly description: "Self-label values for this post. Effectively content warnings.";
                        readonly refs: readonly ["com.atproto.label.defs#selfLabels"];
                    };
                    readonly tags: {
                        readonly type: "array";
                        readonly description: "Additional hashtags, in addition to any included in post text and facets.";
                        readonly maxLength: 8;
                        readonly items: {
                            readonly type: "string";
                            readonly maxLength: 640;
                            readonly maxGraphemes: 64;
                        };
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Client-declared timestamp when this post was originally created.";
                    };
                };
            };
        };
        readonly replyRef: {
            readonly type: "object";
            readonly required: readonly ["root", "parent"];
            readonly properties: {
                readonly root: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
                readonly parent: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
            };
        };
        readonly entity: {
            readonly type: "object";
            readonly description: "Deprecated: use facets instead.";
            readonly required: readonly ["index", "type", "value"];
            readonly properties: {
                readonly index: {
                    readonly type: "ref";
                    readonly ref: "#textSlice";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Expected values are 'mention' and 'link'.";
                };
                readonly value: {
                    readonly type: "string";
                };
            };
        };
        readonly textSlice: {
            readonly type: "object";
            readonly description: "Deprecated. Use app.bsky.richtext instead -- A text segment. Start is inclusive, end is exclusive. Indices are for utf16-encoded strings.";
            readonly required: readonly ["start", "end"];
            readonly properties: {
                readonly start: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly end: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=post.d.ts.map