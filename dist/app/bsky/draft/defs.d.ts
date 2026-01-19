declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.draft.defs";
    readonly defs: {
        readonly draftWithId: {
            readonly description: "A draft with an identifier, used to store drafts in private storage (stash).";
            readonly type: "object";
            readonly required: readonly ["id", "draft"];
            readonly properties: {
                readonly id: {
                    readonly description: "A TID to be used as a draft identifier.";
                    readonly type: "string";
                    readonly format: "tid";
                };
                readonly draft: {
                    readonly type: "ref";
                    readonly ref: "#draft";
                };
            };
        };
        readonly draft: {
            readonly description: "A draft containing an array of draft posts.";
            readonly type: "object";
            readonly required: readonly ["posts"];
            readonly properties: {
                readonly posts: {
                    readonly description: "Array of draft posts that compose this draft.";
                    readonly type: "array";
                    readonly minLength: 1;
                    readonly maxLength: 100;
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#draftPost";
                    };
                };
                readonly langs: {
                    readonly type: "array";
                    readonly description: "Indicates human language of posts primary text content.";
                    readonly maxLength: 3;
                    readonly items: {
                        readonly type: "string";
                        readonly format: "language";
                    };
                };
                readonly postgateEmbeddingRules: {
                    readonly description: "Embedding rules for the postgates to be created when this draft is published.";
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["app.bsky.feed.postgate#disableRule"];
                    };
                };
                readonly threadgateAllow: {
                    readonly description: "Allow-rules for the threadgate to be created when this draft is published.";
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["app.bsky.feed.threadgate#mentionRule", "app.bsky.feed.threadgate#followerRule", "app.bsky.feed.threadgate#followingRule", "app.bsky.feed.threadgate#listRule"];
                    };
                };
            };
        };
        readonly draftPost: {
            readonly description: "One of the posts that compose a draft.";
            readonly type: "object";
            readonly required: readonly ["text"];
            readonly properties: {
                readonly text: {
                    readonly type: "string";
                    readonly maxLength: 3000;
                    readonly maxGraphemes: 300;
                    readonly description: "The primary post content.";
                };
                readonly labels: {
                    readonly type: "union";
                    readonly description: "Self-label values for this post. Effectively content warnings.";
                    readonly refs: readonly ["com.atproto.label.defs#selfLabels"];
                };
                readonly embedImages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#draftEmbedImage";
                    };
                    readonly maxLength: 4;
                };
                readonly embedVideos: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#draftEmbedVideo";
                    };
                    readonly maxLength: 1;
                };
                readonly embedExternals: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#draftEmbedExternal";
                    };
                    readonly maxLength: 1;
                };
                readonly embedRecords: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#draftEmbedRecord";
                    };
                    readonly maxLength: 1;
                };
            };
        };
        readonly draftView: {
            readonly description: "View to present drafts data to users.";
            readonly type: "object";
            readonly required: readonly ["id", "draft", "createdAt", "updatedAt"];
            readonly properties: {
                readonly id: {
                    readonly description: "A TID to be used as a draft identifier.";
                    readonly type: "string";
                    readonly format: "tid";
                };
                readonly draft: {
                    readonly type: "ref";
                    readonly ref: "#draft";
                };
                readonly createdAt: {
                    readonly description: "The time the draft was created.";
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly updatedAt: {
                    readonly description: "The time the draft was last updated.";
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly draftEmbedLocalRef: {
            readonly type: "object";
            readonly required: readonly ["path"];
            readonly properties: {
                readonly path: {
                    readonly type: "string";
                    readonly description: "Local, on-device ref to file to be embedded. Embeds are currently device-bound for drafts.";
                    readonly minLength: 1;
                    readonly maxLength: 1024;
                };
            };
        };
        readonly draftEmbedCaption: {
            readonly type: "object";
            readonly required: readonly ["lang", "content"];
            readonly properties: {
                readonly lang: {
                    readonly type: "string";
                    readonly format: "language";
                };
                readonly content: {
                    readonly type: "string";
                    readonly maxLength: 10000;
                };
            };
        };
        readonly draftEmbedImage: {
            readonly type: "object";
            readonly required: readonly ["localRef"];
            readonly properties: {
                readonly localRef: {
                    readonly type: "ref";
                    readonly ref: "#draftEmbedLocalRef";
                };
                readonly alt: {
                    readonly type: "string";
                    readonly maxGraphemes: 2000;
                };
            };
        };
        readonly draftEmbedVideo: {
            readonly type: "object";
            readonly required: readonly ["localRef"];
            readonly properties: {
                readonly localRef: {
                    readonly type: "ref";
                    readonly ref: "#draftEmbedLocalRef";
                };
                readonly alt: {
                    readonly type: "string";
                    readonly maxGraphemes: 2000;
                };
                readonly captions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#draftEmbedCaption";
                    };
                    readonly maxLength: 20;
                };
            };
        };
        readonly draftEmbedExternal: {
            readonly type: "object";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "uri";
                };
            };
        };
        readonly draftEmbedRecord: {
            readonly type: "object";
            readonly required: readonly ["record"];
            readonly properties: {
                readonly record: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map