declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.listNotifications";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerate notifications for the requesting account. Requires auth.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly reasons: {
                        readonly description: "Notification reasons to include in response.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A reason that matches the reason property of #notification.";
                        };
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly priority: {
                        readonly type: "boolean";
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly seenAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["notifications"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly notifications: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#notification";
                            };
                        };
                        readonly priority: {
                            readonly type: "boolean";
                        };
                        readonly seenAt: {
                            readonly type: "string";
                            readonly format: "datetime";
                        };
                    };
                };
            };
        };
        readonly notification: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "author", "reason", "record", "isRead", "indexedAt"];
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
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
                readonly reason: {
                    readonly type: "string";
                    readonly description: "The reason why this notification was delivered - e.g. your post was liked, or you received a new follower.";
                    readonly knownValues: readonly ["like", "repost", "follow", "mention", "reply", "quote", "starterpack-joined", "verified", "unverified", "like-via-repost", "repost-via-repost", "subscribed-post", "contact-match"];
                };
                readonly reasonSubject: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly record: {
                    readonly type: "unknown";
                };
                readonly isRead: {
                    readonly type: "boolean";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listNotifications.d.ts.map