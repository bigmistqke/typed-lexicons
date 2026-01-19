declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.defs";
    readonly defs: {
        readonly profileViewBasic: {
            readonly type: "object";
            readonly required: readonly ["did", "handle"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly maxGraphemes: 64;
                    readonly maxLength: 640;
                };
                readonly pronouns: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly associated: {
                    readonly type: "ref";
                    readonly ref: "#profileAssociated";
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
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly verification: {
                    readonly type: "ref";
                    readonly ref: "#verificationState";
                };
                readonly status: {
                    readonly type: "ref";
                    readonly ref: "#statusView";
                };
                readonly debug: {
                    readonly type: "unknown";
                    readonly description: "Debug information for internal development";
                };
            };
        };
        readonly profileView: {
            readonly type: "object";
            readonly required: readonly ["did", "handle"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly maxGraphemes: 64;
                    readonly maxLength: 640;
                };
                readonly pronouns: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 256;
                    readonly maxLength: 2560;
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly associated: {
                    readonly type: "ref";
                    readonly ref: "#profileAssociated";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly createdAt: {
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
                readonly verification: {
                    readonly type: "ref";
                    readonly ref: "#verificationState";
                };
                readonly status: {
                    readonly type: "ref";
                    readonly ref: "#statusView";
                };
                readonly debug: {
                    readonly type: "unknown";
                    readonly description: "Debug information for internal development";
                };
            };
        };
        readonly profileViewDetailed: {
            readonly type: "object";
            readonly required: readonly ["did", "handle"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly maxGraphemes: 64;
                    readonly maxLength: 640;
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 256;
                    readonly maxLength: 2560;
                };
                readonly pronouns: {
                    readonly type: "string";
                };
                readonly website: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly banner: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly followersCount: {
                    readonly type: "integer";
                };
                readonly followsCount: {
                    readonly type: "integer";
                };
                readonly postsCount: {
                    readonly type: "integer";
                };
                readonly associated: {
                    readonly type: "ref";
                    readonly ref: "#profileAssociated";
                };
                readonly joinedViaStarterPack: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.graph.defs#starterPackViewBasic";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly createdAt: {
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
                readonly pinnedPost: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.repo.strongRef";
                };
                readonly verification: {
                    readonly type: "ref";
                    readonly ref: "#verificationState";
                };
                readonly status: {
                    readonly type: "ref";
                    readonly ref: "#statusView";
                };
                readonly debug: {
                    readonly type: "unknown";
                    readonly description: "Debug information for internal development";
                };
            };
        };
        readonly profileAssociated: {
            readonly type: "object";
            readonly properties: {
                readonly lists: {
                    readonly type: "integer";
                };
                readonly feedgens: {
                    readonly type: "integer";
                };
                readonly starterPacks: {
                    readonly type: "integer";
                };
                readonly labeler: {
                    readonly type: "boolean";
                };
                readonly chat: {
                    readonly type: "ref";
                    readonly ref: "#profileAssociatedChat";
                };
                readonly activitySubscription: {
                    readonly type: "ref";
                    readonly ref: "#profileAssociatedActivitySubscription";
                };
            };
        };
        readonly profileAssociatedChat: {
            readonly type: "object";
            readonly required: readonly ["allowIncoming"];
            readonly properties: {
                readonly allowIncoming: {
                    readonly type: "string";
                    readonly knownValues: readonly ["all", "none", "following"];
                };
            };
        };
        readonly profileAssociatedActivitySubscription: {
            readonly type: "object";
            readonly required: readonly ["allowSubscriptions"];
            readonly properties: {
                readonly allowSubscriptions: {
                    readonly type: "string";
                    readonly knownValues: readonly ["followers", "mutuals", "none"];
                };
            };
        };
        readonly viewerState: {
            readonly type: "object";
            readonly description: "Metadata about the requesting account's relationship with the subject account. Only has meaningful content for authed requests.";
            readonly properties: {
                readonly muted: {
                    readonly type: "boolean";
                };
                readonly mutedByList: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.graph.defs#listViewBasic";
                };
                readonly blockedBy: {
                    readonly type: "boolean";
                };
                readonly blocking: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly blockingByList: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.graph.defs#listViewBasic";
                };
                readonly following: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly followedBy: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly knownFollowers: {
                    readonly description: "This property is present only in selected cases, as an optimization.";
                    readonly type: "ref";
                    readonly ref: "#knownFollowers";
                };
                readonly activitySubscription: {
                    readonly description: "This property is present only in selected cases, as an optimization.";
                    readonly type: "ref";
                    readonly ref: "app.bsky.notification.defs#activitySubscription";
                };
            };
        };
        readonly knownFollowers: {
            readonly type: "object";
            readonly description: "The subject's followers whom you also follow";
            readonly required: readonly ["count", "followers"];
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly followers: {
                    readonly type: "array";
                    readonly minLength: 0;
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#profileViewBasic";
                    };
                };
            };
        };
        readonly verificationState: {
            readonly type: "object";
            readonly description: "Represents the verification information about the user this object is attached to.";
            readonly required: readonly ["verifications", "verifiedStatus", "trustedVerifierStatus"];
            readonly properties: {
                readonly verifications: {
                    readonly type: "array";
                    readonly description: "All verifications issued by trusted verifiers on behalf of this user. Verifications by untrusted verifiers are not included.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#verificationView";
                    };
                };
                readonly verifiedStatus: {
                    readonly type: "string";
                    readonly description: "The user's status as a verified account.";
                    readonly knownValues: readonly ["valid", "invalid", "none"];
                };
                readonly trustedVerifierStatus: {
                    readonly type: "string";
                    readonly description: "The user's status as a trusted verifier.";
                    readonly knownValues: readonly ["valid", "invalid", "none"];
                };
            };
        };
        readonly verificationView: {
            readonly type: "object";
            readonly description: "An individual verification for an associated subject.";
            readonly required: readonly ["issuer", "uri", "isValid", "createdAt"];
            readonly properties: {
                readonly issuer: {
                    readonly type: "string";
                    readonly description: "The user who issued this verification.";
                    readonly format: "did";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly description: "The AT-URI of the verification record.";
                    readonly format: "at-uri";
                };
                readonly isValid: {
                    readonly type: "boolean";
                    readonly description: "True if the verification passes validation, otherwise false.";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Timestamp when the verification was created.";
                    readonly format: "datetime";
                };
            };
        };
        readonly preferences: {
            readonly type: "array";
            readonly items: {
                readonly type: "union";
                readonly refs: readonly ["#adultContentPref", "#contentLabelPref", "#savedFeedsPref", "#savedFeedsPrefV2", "#personalDetailsPref", "#declaredAgePref", "#feedViewPref", "#threadViewPref", "#interestsPref", "#mutedWordsPref", "#hiddenPostsPref", "#bskyAppStatePref", "#labelersPref", "#postInteractionSettingsPref", "#verificationPrefs", "#liveEventPreferences"];
            };
        };
        readonly adultContentPref: {
            readonly type: "object";
            readonly required: readonly ["enabled"];
            readonly properties: {
                readonly enabled: {
                    readonly type: "boolean";
                    readonly default: false;
                };
            };
        };
        readonly contentLabelPref: {
            readonly type: "object";
            readonly required: readonly ["label", "visibility"];
            readonly properties: {
                readonly labelerDid: {
                    readonly type: "string";
                    readonly description: "Which labeler does this preference apply to? If undefined, applies globally.";
                    readonly format: "did";
                };
                readonly label: {
                    readonly type: "string";
                };
                readonly visibility: {
                    readonly type: "string";
                    readonly knownValues: readonly ["ignore", "show", "warn", "hide"];
                };
            };
        };
        readonly savedFeed: {
            readonly type: "object";
            readonly required: readonly ["id", "type", "value", "pinned"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly type: {
                    readonly type: "string";
                    readonly knownValues: readonly ["feed", "list", "timeline"];
                };
                readonly value: {
                    readonly type: "string";
                };
                readonly pinned: {
                    readonly type: "boolean";
                };
            };
        };
        readonly savedFeedsPrefV2: {
            readonly type: "object";
            readonly required: readonly ["items"];
            readonly properties: {
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.actor.defs#savedFeed";
                    };
                };
            };
        };
        readonly savedFeedsPref: {
            readonly type: "object";
            readonly required: readonly ["pinned", "saved"];
            readonly properties: {
                readonly pinned: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "at-uri";
                    };
                };
                readonly saved: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "at-uri";
                    };
                };
                readonly timelineIndex: {
                    readonly type: "integer";
                };
            };
        };
        readonly personalDetailsPref: {
            readonly type: "object";
            readonly properties: {
                readonly birthDate: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The birth date of account owner.";
                };
            };
        };
        readonly declaredAgePref: {
            readonly type: "object";
            readonly description: "Read-only preference containing value(s) inferred from the user's declared birthdate. Absence of this preference object in the response indicates that the user has not made a declaration.";
            readonly properties: {
                readonly isOverAge13: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the user has declared that they are over 13 years of age.";
                };
                readonly isOverAge16: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the user has declared that they are over 16 years of age.";
                };
                readonly isOverAge18: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the user has declared that they are over 18 years of age.";
                };
            };
        };
        readonly feedViewPref: {
            readonly type: "object";
            readonly required: readonly ["feed"];
            readonly properties: {
                readonly feed: {
                    readonly type: "string";
                    readonly description: "The URI of the feed, or an identifier which describes the feed.";
                };
                readonly hideReplies: {
                    readonly type: "boolean";
                    readonly description: "Hide replies in the feed.";
                };
                readonly hideRepliesByUnfollowed: {
                    readonly type: "boolean";
                    readonly description: "Hide replies in the feed if they are not by followed users.";
                    readonly default: true;
                };
                readonly hideRepliesByLikeCount: {
                    readonly type: "integer";
                    readonly description: "Hide replies in the feed if they do not have this number of likes.";
                };
                readonly hideReposts: {
                    readonly type: "boolean";
                    readonly description: "Hide reposts in the feed.";
                };
                readonly hideQuotePosts: {
                    readonly type: "boolean";
                    readonly description: "Hide quote posts in the feed.";
                };
            };
        };
        readonly threadViewPref: {
            readonly type: "object";
            readonly properties: {
                readonly sort: {
                    readonly type: "string";
                    readonly description: "Sorting mode for threads.";
                    readonly knownValues: readonly ["oldest", "newest", "most-likes", "random", "hotness"];
                };
            };
        };
        readonly interestsPref: {
            readonly type: "object";
            readonly required: readonly ["tags"];
            readonly properties: {
                readonly tags: {
                    readonly type: "array";
                    readonly maxLength: 100;
                    readonly items: {
                        readonly type: "string";
                        readonly maxLength: 640;
                        readonly maxGraphemes: 64;
                    };
                    readonly description: "A list of tags which describe the account owner's interests gathered during onboarding.";
                };
            };
        };
        readonly mutedWordTarget: {
            readonly type: "string";
            readonly knownValues: readonly ["content", "tag"];
            readonly maxLength: 640;
            readonly maxGraphemes: 64;
        };
        readonly mutedWord: {
            readonly type: "object";
            readonly description: "A word that the account owner has muted.";
            readonly required: readonly ["value", "targets"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly value: {
                    readonly type: "string";
                    readonly description: "The muted word itself.";
                    readonly maxLength: 10000;
                    readonly maxGraphemes: 1000;
                };
                readonly targets: {
                    readonly type: "array";
                    readonly description: "The intended targets of the muted word.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.actor.defs#mutedWordTarget";
                    };
                };
                readonly actorTarget: {
                    readonly type: "string";
                    readonly description: "Groups of users to apply the muted word to. If undefined, applies to all users.";
                    readonly knownValues: readonly ["all", "exclude-following"];
                    readonly default: "all";
                };
                readonly expiresAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date and time at which the muted word will expire and no longer be applied.";
                };
            };
        };
        readonly mutedWordsPref: {
            readonly type: "object";
            readonly required: readonly ["items"];
            readonly properties: {
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.actor.defs#mutedWord";
                    };
                    readonly description: "A list of words the account owner has muted.";
                };
            };
        };
        readonly hiddenPostsPref: {
            readonly type: "object";
            readonly required: readonly ["items"];
            readonly properties: {
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "at-uri";
                    };
                    readonly description: "A list of URIs of posts the account owner has hidden.";
                };
            };
        };
        readonly labelersPref: {
            readonly type: "object";
            readonly required: readonly ["labelers"];
            readonly properties: {
                readonly labelers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#labelerPrefItem";
                    };
                };
            };
        };
        readonly labelerPrefItem: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly bskyAppStatePref: {
            readonly description: "A grab bag of state that's specific to the bsky.app program. Third-party apps shouldn't use this.";
            readonly type: "object";
            readonly properties: {
                readonly activeProgressGuide: {
                    readonly type: "ref";
                    readonly ref: "#bskyAppProgressGuide";
                };
                readonly queuedNudges: {
                    readonly description: "An array of tokens which identify nudges (modals, popups, tours, highlight dots) that should be shown to the user.";
                    readonly type: "array";
                    readonly maxLength: 1000;
                    readonly items: {
                        readonly type: "string";
                        readonly maxLength: 100;
                    };
                };
                readonly nuxs: {
                    readonly description: "Storage for NUXs the user has encountered.";
                    readonly type: "array";
                    readonly maxLength: 100;
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.actor.defs#nux";
                    };
                };
            };
        };
        readonly bskyAppProgressGuide: {
            readonly description: "If set, an active progress guide. Once completed, can be set to undefined. Should have unspecced fields tracking progress.";
            readonly type: "object";
            readonly required: readonly ["guide"];
            readonly properties: {
                readonly guide: {
                    readonly type: "string";
                    readonly maxLength: 100;
                };
            };
        };
        readonly nux: {
            readonly type: "object";
            readonly description: "A new user experiences (NUX) storage object";
            readonly required: readonly ["id", "completed"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly maxLength: 100;
                };
                readonly completed: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly data: {
                    readonly description: "Arbitrary data for the NUX. The structure is defined by the NUX itself. Limited to 300 characters.";
                    readonly type: "string";
                    readonly maxLength: 3000;
                    readonly maxGraphemes: 300;
                };
                readonly expiresAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date and time at which the NUX will expire and should be considered completed.";
                };
            };
        };
        readonly verificationPrefs: {
            readonly type: "object";
            readonly description: "Preferences for how verified accounts appear in the app.";
            readonly required: readonly [];
            readonly properties: {
                readonly hideBadges: {
                    readonly description: "Hide the blue check badges for verified accounts and trusted verifiers.";
                    readonly type: "boolean";
                    readonly default: false;
                };
            };
        };
        readonly liveEventPreferences: {
            readonly type: "object";
            readonly description: "Preferences for live events.";
            readonly properties: {
                readonly hiddenFeedIds: {
                    readonly description: "A list of feed IDs that the user has hidden from live events.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly hideAllFeeds: {
                    readonly description: "Whether to hide all feeds from live events.";
                    readonly type: "boolean";
                    readonly default: false;
                };
            };
        };
        readonly postInteractionSettingsPref: {
            readonly type: "object";
            readonly description: "Default post interaction settings for the account. These values should be applied as default values when creating new posts. These refs should mirror the threadgate and postgate records exactly.";
            readonly required: readonly [];
            readonly properties: {
                readonly threadgateAllowRules: {
                    readonly description: "Matches threadgate record. List of rules defining who can reply to this users posts. If value is an empty array, no one can reply. If value is undefined, anyone can reply.";
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["app.bsky.feed.threadgate#mentionRule", "app.bsky.feed.threadgate#followerRule", "app.bsky.feed.threadgate#followingRule", "app.bsky.feed.threadgate#listRule"];
                    };
                };
                readonly postgateEmbeddingRules: {
                    readonly description: "Matches postgate record. List of rules defining who can embed this users posts. If value is an empty array or is undefined, no particular rules apply and anyone can embed.";
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["app.bsky.feed.postgate#disableRule"];
                    };
                };
            };
        };
        readonly statusView: {
            readonly type: "object";
            readonly required: readonly ["status", "record"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status for the account.";
                    readonly knownValues: readonly ["app.bsky.actor.status#live"];
                };
                readonly record: {
                    readonly type: "unknown";
                };
                readonly embed: {
                    readonly type: "union";
                    readonly description: "An optional embed associated with the status.";
                    readonly refs: readonly ["app.bsky.embed.external#view"];
                };
                readonly expiresAt: {
                    readonly type: "string";
                    readonly description: "The date when this status will expire. The application might choose to no longer return the status after expiration.";
                    readonly format: "datetime";
                };
                readonly isActive: {
                    readonly type: "boolean";
                    readonly description: "True if the status is not expired, false if it is expired. Only present if expiration was set.";
                };
                readonly isDisabled: {
                    readonly type: "boolean";
                    readonly description: "True if the user's go-live access has been disabled by a moderator, false otherwise.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map