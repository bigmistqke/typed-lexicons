declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.putPreferencesV2";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Set notification-related preferences for an account. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chat: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#chatPreference";
                        };
                        readonly follow: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly like: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly likeViaRepost: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly mention: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly quote: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly reply: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly repost: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly repostViaRepost: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#filterablePreference";
                        };
                        readonly starterpackJoined: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#preference";
                        };
                        readonly subscribedPost: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#preference";
                        };
                        readonly unverified: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#preference";
                        };
                        readonly verified: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#preference";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["preferences"];
                    readonly properties: {
                        readonly preferences: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#preferences";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=putPreferencesV2.d.ts.map