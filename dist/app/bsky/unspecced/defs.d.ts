declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.defs";
    readonly defs: {
        readonly skeletonSearchPost: {
            readonly type: "object";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly skeletonSearchActor: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly skeletonSearchStarterPack: {
            readonly type: "object";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly trendingTopic: {
            readonly type: "object";
            readonly required: readonly ["topic", "link"];
            readonly properties: {
                readonly topic: {
                    readonly type: "string";
                };
                readonly displayName: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
            };
        };
        readonly skeletonTrend: {
            readonly type: "object";
            readonly required: readonly ["topic", "displayName", "link", "startedAt", "postCount", "dids"];
            readonly properties: {
                readonly topic: {
                    readonly type: "string";
                };
                readonly displayName: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
                readonly startedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly postCount: {
                    readonly type: "integer";
                };
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["hot"];
                };
                readonly category: {
                    readonly type: "string";
                };
                readonly dids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                };
            };
        };
        readonly trendView: {
            readonly type: "object";
            readonly required: readonly ["topic", "displayName", "link", "startedAt", "postCount", "actors"];
            readonly properties: {
                readonly topic: {
                    readonly type: "string";
                };
                readonly displayName: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
                readonly startedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly postCount: {
                    readonly type: "integer";
                };
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["hot"];
                };
                readonly category: {
                    readonly type: "string";
                };
                readonly actors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.actor.defs#profileViewBasic";
                    };
                };
            };
        };
        readonly threadItemPost: {
            readonly type: "object";
            readonly required: readonly ["post", "moreParents", "moreReplies", "opThread", "hiddenByThreadgate", "mutedByViewer"];
            readonly properties: {
                readonly post: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.feed.defs#postView";
                };
                readonly moreParents: {
                    readonly type: "boolean";
                    readonly description: "This post has more parents that were not present in the response. This is just a boolean, without the number of parents.";
                };
                readonly moreReplies: {
                    readonly type: "integer";
                    readonly description: "This post has more replies that were not present in the response. This is a numeric value, which is best-effort and might not be accurate.";
                };
                readonly opThread: {
                    readonly type: "boolean";
                    readonly description: "This post is part of a contiguous thread by the OP from the thread root. Many different OP threads can happen in the same thread.";
                };
                readonly hiddenByThreadgate: {
                    readonly type: "boolean";
                    readonly description: "The threadgate created by the author indicates this post as a reply to be hidden for everyone consuming the thread.";
                };
                readonly mutedByViewer: {
                    readonly type: "boolean";
                    readonly description: "This is by an account muted by the viewer requesting it.";
                };
            };
        };
        readonly threadItemNoUnauthenticated: {
            readonly type: "object";
            readonly properties: {};
        };
        readonly threadItemNotFound: {
            readonly type: "object";
            readonly properties: {};
        };
        readonly threadItemBlocked: {
            readonly type: "object";
            readonly required: readonly ["author"];
            readonly properties: {
                readonly author: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.feed.defs#blockedAuthor";
                };
            };
        };
        readonly ageAssuranceState: {
            readonly type: "object";
            readonly description: "The computed state of the age assurance process, returned to the user in question on certain authenticated requests.";
            readonly required: readonly ["status"];
            readonly properties: {
                readonly lastInitiatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The timestamp when this state was last updated.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the age assurance process.";
                    readonly knownValues: readonly ["unknown", "pending", "assured", "blocked"];
                };
            };
        };
        readonly ageAssuranceEvent: {
            readonly type: "object";
            readonly description: "Object used to store age assurance data in stash.";
            readonly required: readonly ["createdAt", "status", "attemptId"];
            readonly properties: {
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date and time of this write operation.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the age assurance process.";
                    readonly knownValues: readonly ["unknown", "pending", "assured"];
                };
                readonly attemptId: {
                    readonly type: "string";
                    readonly description: "The unique identifier for this instance of the age assurance flow, in UUID format.";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email used for AA.";
                };
                readonly initIp: {
                    readonly type: "string";
                    readonly description: "The IP address used when initiating the AA flow.";
                };
                readonly initUa: {
                    readonly type: "string";
                    readonly description: "The user agent used when initiating the AA flow.";
                };
                readonly completeIp: {
                    readonly type: "string";
                    readonly description: "The IP address used when completing the AA flow.";
                };
                readonly completeUa: {
                    readonly type: "string";
                    readonly description: "The user agent used when completing the AA flow.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map