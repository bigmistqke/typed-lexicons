declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.defs";
    readonly defs: {
        readonly recordDeleted: {
            readonly type: "object";
            readonly properties: {};
        };
        readonly chatPreference: {
            readonly type: "object";
            readonly required: readonly ["include", "push"];
            readonly properties: {
                readonly include: {
                    readonly type: "string";
                    readonly knownValues: readonly ["all", "accepted"];
                };
                readonly push: {
                    readonly type: "boolean";
                };
            };
        };
        readonly filterablePreference: {
            readonly type: "object";
            readonly required: readonly ["include", "list", "push"];
            readonly properties: {
                readonly include: {
                    readonly type: "string";
                    readonly knownValues: readonly ["all", "follows"];
                };
                readonly list: {
                    readonly type: "boolean";
                };
                readonly push: {
                    readonly type: "boolean";
                };
            };
        };
        readonly preference: {
            readonly type: "object";
            readonly required: readonly ["list", "push"];
            readonly properties: {
                readonly list: {
                    readonly type: "boolean";
                };
                readonly push: {
                    readonly type: "boolean";
                };
            };
        };
        readonly preferences: {
            readonly type: "object";
            readonly required: readonly ["chat", "follow", "like", "likeViaRepost", "mention", "quote", "reply", "repost", "repostViaRepost", "starterpackJoined", "subscribedPost", "unverified", "verified"];
            readonly properties: {
                readonly chat: {
                    readonly type: "ref";
                    readonly ref: "#chatPreference";
                };
                readonly follow: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly like: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly likeViaRepost: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly mention: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly quote: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly reply: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly repost: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly repostViaRepost: {
                    readonly type: "ref";
                    readonly ref: "#filterablePreference";
                };
                readonly starterpackJoined: {
                    readonly type: "ref";
                    readonly ref: "#preference";
                };
                readonly subscribedPost: {
                    readonly type: "ref";
                    readonly ref: "#preference";
                };
                readonly unverified: {
                    readonly type: "ref";
                    readonly ref: "#preference";
                };
                readonly verified: {
                    readonly type: "ref";
                    readonly ref: "#preference";
                };
            };
        };
        readonly activitySubscription: {
            readonly type: "object";
            readonly required: readonly ["post", "reply"];
            readonly properties: {
                readonly post: {
                    readonly type: "boolean";
                };
                readonly reply: {
                    readonly type: "boolean";
                };
            };
        };
        readonly subjectActivitySubscription: {
            readonly description: "Object used to store activity subscription data in stash.";
            readonly type: "object";
            readonly required: readonly ["subject", "activitySubscription"];
            readonly properties: {
                readonly subject: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly activitySubscription: {
                    readonly type: "ref";
                    readonly ref: "#activitySubscription";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map