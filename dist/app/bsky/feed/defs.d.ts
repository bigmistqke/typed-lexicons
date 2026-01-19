declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.defs";
    readonly defs: {
        readonly postView: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "author", "record", "indexedAt"];
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
                readonly record: {
                    readonly type: "unknown";
                };
                readonly embed: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.embed.images#view", "app.bsky.embed.video#view", "app.bsky.embed.external#view", "app.bsky.embed.record#view", "app.bsky.embed.recordWithMedia#view"];
                };
                readonly bookmarkCount: {
                    readonly type: "integer";
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
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "#viewerState";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly threadgate: {
                    readonly type: "ref";
                    readonly ref: "#threadgateView";
                };
                readonly debug: {
                    readonly type: "unknown";
                    readonly description: "Debug information for internal development";
                };
            };
        };
        readonly viewerState: {
            readonly type: "object";
            readonly description: "Metadata about the requesting account's relationship with the subject content. Only has meaningful content for authed requests.";
            readonly properties: {
                readonly repost: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly like: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly bookmarked: {
                    readonly type: "boolean";
                };
                readonly threadMuted: {
                    readonly type: "boolean";
                };
                readonly replyDisabled: {
                    readonly type: "boolean";
                };
                readonly embeddingDisabled: {
                    readonly type: "boolean";
                };
                readonly pinned: {
                    readonly type: "boolean";
                };
            };
        };
        readonly threadContext: {
            readonly type: "object";
            readonly description: "Metadata about this post within the context of the thread it is in.";
            readonly properties: {
                readonly rootAuthorLike: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly feedViewPost: {
            readonly type: "object";
            readonly required: readonly ["post"];
            readonly properties: {
                readonly post: {
                    readonly type: "ref";
                    readonly ref: "#postView";
                };
                readonly reply: {
                    readonly type: "ref";
                    readonly ref: "#replyRef";
                };
                readonly reason: {
                    readonly type: "union";
                    readonly refs: readonly ["#reasonRepost", "#reasonPin"];
                };
                readonly feedContext: {
                    readonly type: "string";
                    readonly description: "Context provided by feed generator that may be passed back alongside interactions.";
                    readonly maxLength: 2000;
                };
                readonly reqId: {
                    readonly type: "string";
                    readonly description: "Unique identifier per request that may be passed back alongside interactions.";
                    readonly maxLength: 100;
                };
            };
        };
        readonly replyRef: {
            readonly type: "object";
            readonly required: readonly ["root", "parent"];
            readonly properties: {
                readonly root: {
                    readonly type: "union";
                    readonly refs: readonly ["#postView", "#notFoundPost", "#blockedPost"];
                };
                readonly parent: {
                    readonly type: "union";
                    readonly refs: readonly ["#postView", "#notFoundPost", "#blockedPost"];
                };
                readonly grandparentAuthor: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewBasic";
                    readonly description: "When parent is a reply to another post, this is the author of that post.";
                };
            };
        };
        readonly reasonRepost: {
            readonly type: "object";
            readonly required: readonly ["by", "indexedAt"];
            readonly properties: {
                readonly by: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewBasic";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly reasonPin: {
            readonly type: "object";
            readonly properties: {};
        };
        readonly threadViewPost: {
            readonly type: "object";
            readonly required: readonly ["post"];
            readonly properties: {
                readonly post: {
                    readonly type: "ref";
                    readonly ref: "#postView";
                };
                readonly parent: {
                    readonly type: "union";
                    readonly refs: readonly ["#threadViewPost", "#notFoundPost", "#blockedPost"];
                };
                readonly replies: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["#threadViewPost", "#notFoundPost", "#blockedPost"];
                    };
                };
                readonly threadContext: {
                    readonly type: "ref";
                    readonly ref: "#threadContext";
                };
            };
        };
        readonly notFoundPost: {
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
        readonly blockedPost: {
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
                    readonly ref: "#blockedAuthor";
                };
            };
        };
        readonly blockedAuthor: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#viewerState";
                };
            };
        };
        readonly generatorView: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "did", "creator", "displayName", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly creator: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
                readonly displayName: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 300;
                    readonly maxLength: 3000;
                };
                readonly descriptionFacets: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.richtext.facet";
                    };
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly likeCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly acceptsInteractions: {
                    readonly type: "boolean";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "#generatorViewerState";
                };
                readonly contentMode: {
                    readonly type: "string";
                    readonly knownValues: readonly ["app.bsky.feed.defs#contentModeUnspecified", "app.bsky.feed.defs#contentModeVideo"];
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly generatorViewerState: {
            readonly type: "object";
            readonly properties: {
                readonly like: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly skeletonFeedPost: {
            readonly type: "object";
            readonly required: readonly ["post"];
            readonly properties: {
                readonly post: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly reason: {
                    readonly type: "union";
                    readonly refs: readonly ["#skeletonReasonRepost", "#skeletonReasonPin"];
                };
                readonly feedContext: {
                    readonly type: "string";
                    readonly description: "Context that will be passed through to client and may be passed to feed generator back alongside interactions.";
                    readonly maxLength: 2000;
                };
            };
        };
        readonly skeletonReasonRepost: {
            readonly type: "object";
            readonly required: readonly ["repost"];
            readonly properties: {
                readonly repost: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly skeletonReasonPin: {
            readonly type: "object";
            readonly properties: {};
        };
        readonly threadgateView: {
            readonly type: "object";
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly record: {
                    readonly type: "unknown";
                };
                readonly lists: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.graph.defs#listViewBasic";
                    };
                };
            };
        };
        readonly interaction: {
            readonly type: "object";
            readonly properties: {
                readonly item: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly event: {
                    readonly type: "string";
                    readonly knownValues: readonly ["app.bsky.feed.defs#requestLess", "app.bsky.feed.defs#requestMore", "app.bsky.feed.defs#clickthroughItem", "app.bsky.feed.defs#clickthroughAuthor", "app.bsky.feed.defs#clickthroughReposter", "app.bsky.feed.defs#clickthroughEmbed", "app.bsky.feed.defs#interactionSeen", "app.bsky.feed.defs#interactionLike", "app.bsky.feed.defs#interactionRepost", "app.bsky.feed.defs#interactionReply", "app.bsky.feed.defs#interactionQuote", "app.bsky.feed.defs#interactionShare"];
                };
                readonly feedContext: {
                    readonly type: "string";
                    readonly description: "Context on a feed item that was originally supplied by the feed generator on getFeedSkeleton.";
                    readonly maxLength: 2000;
                };
                readonly reqId: {
                    readonly type: "string";
                    readonly description: "Unique identifier per request that may be passed back alongside interactions.";
                    readonly maxLength: 100;
                };
            };
        };
        readonly requestLess: {
            readonly type: "token";
            readonly description: "Request that less content like the given feed item be shown in the feed";
        };
        readonly requestMore: {
            readonly type: "token";
            readonly description: "Request that more content like the given feed item be shown in the feed";
        };
        readonly clickthroughItem: {
            readonly type: "token";
            readonly description: "User clicked through to the feed item";
        };
        readonly clickthroughAuthor: {
            readonly type: "token";
            readonly description: "User clicked through to the author of the feed item";
        };
        readonly clickthroughReposter: {
            readonly type: "token";
            readonly description: "User clicked through to the reposter of the feed item";
        };
        readonly clickthroughEmbed: {
            readonly type: "token";
            readonly description: "User clicked through to the embedded content of the feed item";
        };
        readonly contentModeUnspecified: {
            readonly type: "token";
            readonly description: "Declares the feed generator returns any types of posts.";
        };
        readonly contentModeVideo: {
            readonly type: "token";
            readonly description: "Declares the feed generator returns posts containing app.bsky.embed.video embeds.";
        };
        readonly interactionSeen: {
            readonly type: "token";
            readonly description: "Feed item was seen by user";
        };
        readonly interactionLike: {
            readonly type: "token";
            readonly description: "User liked the feed item";
        };
        readonly interactionRepost: {
            readonly type: "token";
            readonly description: "User reposted the feed item";
        };
        readonly interactionReply: {
            readonly type: "token";
            readonly description: "User replied to the feed item";
        };
        readonly interactionQuote: {
            readonly type: "token";
            readonly description: "User quoted the feed item";
        };
        readonly interactionShare: {
            readonly type: "token";
            readonly description: "User shared the feed item";
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map