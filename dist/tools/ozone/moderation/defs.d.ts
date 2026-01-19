declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.defs";
    readonly defs: {
        readonly modEventView: {
            readonly type: "object";
            readonly required: readonly ["id", "event", "subject", "subjectBlobCids", "createdBy", "createdAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly event: {
                    readonly type: "union";
                    readonly refs: readonly ["#modEventTakedown", "#modEventReverseTakedown", "#modEventComment", "#modEventReport", "#modEventLabel", "#modEventAcknowledge", "#modEventEscalate", "#modEventMute", "#modEventUnmute", "#modEventMuteReporter", "#modEventUnmuteReporter", "#modEventEmail", "#modEventResolveAppeal", "#modEventDivert", "#modEventTag", "#accountEvent", "#identityEvent", "#recordEvent", "#modEventPriorityScore", "#ageAssuranceEvent", "#ageAssuranceOverrideEvent", "#revokeAccountCredentialsEvent", "#scheduleTakedownEvent", "#cancelScheduledTakedownEvent"];
                };
                readonly subject: {
                    readonly type: "union";
                    readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef", "chat.bsky.convo.defs#messageRef"];
                };
                readonly subjectBlobCids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly createdBy: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly creatorHandle: {
                    readonly type: "string";
                };
                readonly subjectHandle: {
                    readonly type: "string";
                };
                readonly modTool: {
                    readonly type: "ref";
                    readonly ref: "#modTool";
                };
            };
        };
        readonly modEventViewDetail: {
            readonly type: "object";
            readonly required: readonly ["id", "event", "subject", "subjectBlobs", "createdBy", "createdAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly event: {
                    readonly type: "union";
                    readonly refs: readonly ["#modEventTakedown", "#modEventReverseTakedown", "#modEventComment", "#modEventReport", "#modEventLabel", "#modEventAcknowledge", "#modEventEscalate", "#modEventMute", "#modEventUnmute", "#modEventMuteReporter", "#modEventUnmuteReporter", "#modEventEmail", "#modEventResolveAppeal", "#modEventDivert", "#modEventTag", "#accountEvent", "#identityEvent", "#recordEvent", "#modEventPriorityScore", "#ageAssuranceEvent", "#ageAssuranceOverrideEvent", "#revokeAccountCredentialsEvent", "#scheduleTakedownEvent", "#cancelScheduledTakedownEvent"];
                };
                readonly subject: {
                    readonly type: "union";
                    readonly refs: readonly ["#repoView", "#repoViewNotFound", "#recordView", "#recordViewNotFound"];
                };
                readonly subjectBlobs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#blobView";
                    };
                };
                readonly createdBy: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly modTool: {
                    readonly type: "ref";
                    readonly ref: "#modTool";
                };
            };
        };
        readonly subjectStatusView: {
            readonly type: "object";
            readonly required: readonly ["id", "subject", "createdAt", "updatedAt", "reviewState"];
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly subject: {
                    readonly type: "union";
                    readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef", "chat.bsky.convo.defs#messageRef"];
                };
                readonly hosting: {
                    readonly type: "union";
                    readonly refs: readonly ["#accountHosting", "#recordHosting"];
                };
                readonly subjectBlobCids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "cid";
                    };
                };
                readonly subjectRepoHandle: {
                    readonly type: "string";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp referencing when the last update was made to the moderation status of the subject";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp referencing the first moderation status impacting event was emitted on the subject";
                };
                readonly reviewState: {
                    readonly type: "ref";
                    readonly ref: "#subjectReviewState";
                };
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Sticky comment on the subject.";
                };
                readonly priorityScore: {
                    readonly type: "integer";
                    readonly description: "Numeric value representing the level of priority. Higher score means higher priority.";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly muteUntil: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly muteReportingUntil: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly lastReviewedBy: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly lastReviewedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly lastReportedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly lastAppealedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp referencing when the author of the subject appealed a moderation action";
                };
                readonly takendown: {
                    readonly type: "boolean";
                };
                readonly appealed: {
                    readonly type: "boolean";
                    readonly description: "True indicates that the a previously taken moderator action was appealed against, by the author of the content. False indicates last appeal was resolved by moderators.";
                };
                readonly suspendUntil: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly tags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly accountStats: {
                    readonly description: "Statistics related to the account subject";
                    readonly type: "ref";
                    readonly ref: "#accountStats";
                };
                readonly recordsStats: {
                    readonly description: "Statistics related to the record subjects authored by the subject's account";
                    readonly type: "ref";
                    readonly ref: "#recordsStats";
                };
                readonly accountStrike: {
                    readonly description: "Strike information for the account (account-level only)";
                    readonly type: "ref";
                    readonly ref: "#accountStrike";
                };
                readonly ageAssuranceState: {
                    readonly type: "string";
                    readonly description: "Current age assurance state of the subject.";
                    readonly knownValues: readonly ["pending", "assured", "unknown", "reset", "blocked"];
                };
                readonly ageAssuranceUpdatedBy: {
                    readonly type: "string";
                    readonly description: "Whether or not the last successful update to age assurance was made by the user or admin.";
                    readonly knownValues: readonly ["admin", "user"];
                };
            };
        };
        readonly subjectView: {
            readonly description: "Detailed view of a subject. For record subjects, the author's repo and profile will be returned.";
            readonly type: "object";
            readonly required: readonly ["type", "subject"];
            readonly properties: {
                readonly type: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.moderation.defs#subjectType";
                };
                readonly subject: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "ref";
                    readonly ref: "#subjectStatusView";
                };
                readonly repo: {
                    readonly type: "ref";
                    readonly ref: "#repoViewDetail";
                };
                readonly profile: {
                    readonly type: "union";
                    readonly refs: readonly [];
                };
                readonly record: {
                    readonly type: "ref";
                    readonly ref: "#recordViewDetail";
                };
            };
        };
        readonly accountStats: {
            readonly description: "Statistics about a particular account subject";
            readonly type: "object";
            readonly properties: {
                readonly reportCount: {
                    readonly description: "Total number of reports on the account";
                    readonly type: "integer";
                };
                readonly appealCount: {
                    readonly description: "Total number of appeals against a moderation action on the account";
                    readonly type: "integer";
                };
                readonly suspendCount: {
                    readonly description: "Number of times the account was suspended";
                    readonly type: "integer";
                };
                readonly escalateCount: {
                    readonly description: "Number of times the account was escalated";
                    readonly type: "integer";
                };
                readonly takedownCount: {
                    readonly description: "Number of times the account was taken down";
                    readonly type: "integer";
                };
            };
        };
        readonly recordsStats: {
            readonly description: "Statistics about a set of record subject items";
            readonly type: "object";
            readonly properties: {
                readonly totalReports: {
                    readonly description: "Cumulative sum of the number of reports on the items in the set";
                    readonly type: "integer";
                };
                readonly reportedCount: {
                    readonly description: "Number of items that were reported at least once";
                    readonly type: "integer";
                };
                readonly escalatedCount: {
                    readonly description: "Number of items that were escalated at least once";
                    readonly type: "integer";
                };
                readonly appealedCount: {
                    readonly description: "Number of items that were appealed at least once";
                    readonly type: "integer";
                };
                readonly subjectCount: {
                    readonly description: "Total number of item in the set";
                    readonly type: "integer";
                };
                readonly pendingCount: {
                    readonly description: "Number of item currently in \"reviewOpen\" or \"reviewEscalated\" state";
                    readonly type: "integer";
                };
                readonly processedCount: {
                    readonly description: "Number of item currently in \"reviewNone\" or \"reviewClosed\" state";
                    readonly type: "integer";
                };
                readonly takendownCount: {
                    readonly description: "Number of item currently taken down";
                    readonly type: "integer";
                };
            };
        };
        readonly accountStrike: {
            readonly description: "Strike information for an account";
            readonly type: "object";
            readonly properties: {
                readonly activeStrikeCount: {
                    readonly description: "Current number of active strikes (excluding expired strikes)";
                    readonly type: "integer";
                };
                readonly totalStrikeCount: {
                    readonly description: "Total number of strikes ever received (including expired strikes)";
                    readonly type: "integer";
                };
                readonly firstStrikeAt: {
                    readonly description: "Timestamp of the first strike received";
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly lastStrikeAt: {
                    readonly description: "Timestamp of the most recent strike received";
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly subjectReviewState: {
            readonly type: "string";
            readonly knownValues: readonly ["tools.ozone.moderation.defs#reviewOpen", "tools.ozone.moderation.defs#reviewEscalated", "tools.ozone.moderation.defs#reviewClosed", "tools.ozone.moderation.defs#reviewNone"];
        };
        readonly reviewOpen: {
            readonly type: "token";
            readonly description: "Moderator review status of a subject: Open. Indicates that the subject needs to be reviewed by a moderator";
        };
        readonly reviewEscalated: {
            readonly type: "token";
            readonly description: "Moderator review status of a subject: Escalated. Indicates that the subject was escalated for review by a moderator";
        };
        readonly reviewClosed: {
            readonly type: "token";
            readonly description: "Moderator review status of a subject: Closed. Indicates that the subject was already reviewed and resolved by a moderator";
        };
        readonly reviewNone: {
            readonly type: "token";
            readonly description: "Moderator review status of a subject: Unnecessary. Indicates that the subject does not need a review at the moment but there is probably some moderation related metadata available for it";
        };
        readonly modEventTakedown: {
            readonly type: "object";
            readonly description: "Take down a subject permanently or temporarily";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly durationInHours: {
                    readonly type: "integer";
                    readonly description: "Indicates how long the takedown should be in effect before automatically expiring.";
                };
                readonly acknowledgeAccountSubjects: {
                    readonly type: "boolean";
                    readonly description: "If true, all other reports on content authored by this account will be resolved (acknowledged).";
                };
                readonly policies: {
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "Names/Keywords of the policies that drove the decision.";
                };
                readonly severityLevel: {
                    readonly type: "string";
                    readonly description: "Severity level of the violation (e.g., 'sev-0', 'sev-1', 'sev-2', etc.).";
                };
                readonly targetServices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly knownValues: readonly ["appview", "pds"];
                    };
                    readonly description: "List of services where the takedown should be applied. If empty or not provided, takedown is applied on all configured services.";
                };
                readonly strikeCount: {
                    readonly type: "integer";
                    readonly description: "Number of strikes to assign to the user for this violation.";
                };
                readonly strikeExpiresAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "When the strike should expire. If not provided, the strike never expires.";
                };
            };
        };
        readonly modEventReverseTakedown: {
            readonly type: "object";
            readonly description: "Revert take down action on a subject";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Describe reasoning behind the reversal.";
                };
                readonly policies: {
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "Names/Keywords of the policy infraction for which takedown is being reversed.";
                };
                readonly severityLevel: {
                    readonly type: "string";
                    readonly description: "Severity level of the violation. Usually set from the last policy infraction's severity.";
                };
                readonly strikeCount: {
                    readonly type: "integer";
                    readonly description: "Number of strikes to subtract from the user's strike count. Usually set from the last policy infraction's severity.";
                };
            };
        };
        readonly modEventResolveAppeal: {
            readonly type: "object";
            readonly description: "Resolve appeal on a subject";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Describe resolution.";
                };
            };
        };
        readonly modEventComment: {
            readonly type: "object";
            readonly description: "Add a comment to a subject. An empty comment will clear any previously set sticky comment.";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly sticky: {
                    readonly type: "boolean";
                    readonly description: "Make the comment persistent on the subject";
                };
            };
        };
        readonly modEventReport: {
            readonly type: "object";
            readonly description: "Report a subject";
            readonly required: readonly ["reportType"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly isReporterMuted: {
                    readonly type: "boolean";
                    readonly description: "Set to true if the reporter was muted from reporting at the time of the event. These reports won't impact the reviewState of the subject.";
                };
                readonly reportType: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.moderation.defs#reasonType";
                };
            };
        };
        readonly modEventLabel: {
            readonly type: "object";
            readonly description: "Apply/Negate labels on a subject";
            readonly required: readonly ["createLabelVals", "negateLabelVals"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly createLabelVals: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly negateLabelVals: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly durationInHours: {
                    readonly type: "integer";
                    readonly description: "Indicates how long the label will remain on the subject. Only applies on labels that are being added.";
                };
            };
        };
        readonly modEventPriorityScore: {
            readonly type: "object";
            readonly description: "Set priority score of the subject. Higher score means higher priority.";
            readonly required: readonly ["score"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly score: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
            };
        };
        readonly ageAssuranceEvent: {
            readonly type: "object";
            readonly description: "Age assurance info coming directly from users. Only works on DID subjects.";
            readonly required: readonly ["createdAt", "status", "attemptId"];
            readonly properties: {
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date and time of this write operation.";
                };
                readonly attemptId: {
                    readonly type: "string";
                    readonly description: "The unique identifier for this instance of the age assurance flow, in UUID format.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the Age Assurance process.";
                    readonly knownValues: readonly ["unknown", "pending", "assured"];
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
                readonly countryCode: {
                    readonly type: "string";
                    readonly description: "The ISO 3166-1 alpha-2 country code provided when beginning the Age Assurance flow.";
                };
                readonly regionCode: {
                    readonly type: "string";
                    readonly description: "The ISO 3166-2 region code provided when beginning the Age Assurance flow.";
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
        readonly ageAssuranceOverrideEvent: {
            readonly type: "object";
            readonly description: "Age assurance status override by moderators. Only works on DID subjects.";
            readonly required: readonly ["comment", "status"];
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status to be set for the user decided by a moderator, overriding whatever value the user had previously. Use reset to default to original state.";
                    readonly knownValues: readonly ["assured", "reset", "blocked"];
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
                readonly comment: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly description: "Comment describing the reason for the override.";
                };
            };
        };
        readonly revokeAccountCredentialsEvent: {
            readonly type: "object";
            readonly description: "Account credentials revocation by moderators. Only works on DID subjects.";
            readonly required: readonly ["comment"];
            readonly properties: {
                readonly comment: {
                    readonly minLength: 1;
                    readonly type: "string";
                    readonly description: "Comment describing the reason for the revocation.";
                };
            };
        };
        readonly modEventAcknowledge: {
            readonly type: "object";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly acknowledgeAccountSubjects: {
                    readonly type: "boolean";
                    readonly description: "If true, all other reports on content authored by this account will be resolved (acknowledged).";
                };
            };
        };
        readonly modEventEscalate: {
            readonly type: "object";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
            };
        };
        readonly modEventMute: {
            readonly type: "object";
            readonly description: "Mute incoming reports on a subject";
            readonly required: readonly ["durationInHours"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly durationInHours: {
                    readonly type: "integer";
                    readonly description: "Indicates how long the subject should remain muted.";
                };
            };
        };
        readonly modEventUnmute: {
            readonly type: "object";
            readonly description: "Unmute action on a subject";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Describe reasoning behind the reversal.";
                };
            };
        };
        readonly modEventMuteReporter: {
            readonly type: "object";
            readonly description: "Mute incoming reports from an account";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly durationInHours: {
                    readonly type: "integer";
                    readonly description: "Indicates how long the account should remain muted. Falsy value here means a permanent mute.";
                };
            };
        };
        readonly modEventUnmuteReporter: {
            readonly type: "object";
            readonly description: "Unmute incoming reports from an account";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Describe reasoning behind the reversal.";
                };
            };
        };
        readonly modEventEmail: {
            readonly type: "object";
            readonly description: "Keep a log of outgoing email to a user";
            readonly required: readonly ["subjectLine"];
            readonly properties: {
                readonly subjectLine: {
                    readonly type: "string";
                    readonly description: "The subject line of the email sent to the user.";
                };
                readonly content: {
                    readonly type: "string";
                    readonly description: "The content of the email sent to the user.";
                };
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Additional comment about the outgoing comm.";
                };
                readonly policies: {
                    readonly type: "array";
                    readonly maxLength: 5;
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "Names/Keywords of the policies that necessitated the email.";
                };
                readonly severityLevel: {
                    readonly type: "string";
                    readonly description: "Severity level of the violation. Normally 'sev-1' that adds strike on repeat offense";
                };
                readonly strikeCount: {
                    readonly type: "integer";
                    readonly description: "Number of strikes to assign to the user for this violation. Normally 0 as an indicator of a warning and only added as a strike on a repeat offense.";
                };
                readonly strikeExpiresAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "When the strike should expire. If not provided, the strike never expires.";
                };
                readonly isDelivered: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether the email was successfully delivered to the user's inbox.";
                };
            };
        };
        readonly modEventDivert: {
            readonly type: "object";
            readonly description: "Divert a record's blobs to a 3rd party service for further scanning/tagging";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
            };
        };
        readonly modEventTag: {
            readonly type: "object";
            readonly description: "Add/Remove a tag on a subject";
            readonly required: readonly ["add", "remove"];
            readonly properties: {
                readonly add: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "Tags to be added to the subject. If already exists, won't be duplicated.";
                };
                readonly remove: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "Tags to be removed to the subject. Ignores a tag If it doesn't exist, won't be duplicated.";
                };
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Additional comment about added/removed tags.";
                };
            };
        };
        readonly accountEvent: {
            readonly type: "object";
            readonly description: "Logs account status related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.";
            readonly required: readonly ["timestamp", "active"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly description: "Indicates that the account has a repository which can be fetched from the host that emitted this event.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["unknown", "deactivated", "deleted", "takendown", "suspended", "tombstoned"];
                };
                readonly timestamp: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly identityEvent: {
            readonly type: "object";
            readonly description: "Logs identity related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.";
            readonly required: readonly ["timestamp"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly pdsHost: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly tombstone: {
                    readonly type: "boolean";
                };
                readonly timestamp: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly recordEvent: {
            readonly type: "object";
            readonly description: "Logs lifecycle event on a record subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking.";
            readonly required: readonly ["timestamp", "op"];
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly op: {
                    readonly type: "string";
                    readonly knownValues: readonly ["create", "update", "delete"];
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly timestamp: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly scheduleTakedownEvent: {
            readonly type: "object";
            readonly description: "Logs a scheduled takedown action for an account.";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
                readonly executeAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly executeAfter: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly executeUntil: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly cancelScheduledTakedownEvent: {
            readonly type: "object";
            readonly description: "Logs cancellation of a scheduled takedown action for an account.";
            readonly properties: {
                readonly comment: {
                    readonly type: "string";
                };
            };
        };
        readonly repoView: {
            readonly type: "object";
            readonly required: readonly ["did", "handle", "relatedRecords", "indexedAt", "moderation"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly relatedRecords: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "unknown";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly moderation: {
                    readonly type: "ref";
                    readonly ref: "#moderation";
                };
                readonly invitedBy: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.server.defs#inviteCode";
                };
                readonly invitesDisabled: {
                    readonly type: "boolean";
                };
                readonly inviteNote: {
                    readonly type: "string";
                };
                readonly deactivatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly threatSignatures: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.admin.defs#threatSignature";
                    };
                };
            };
        };
        readonly repoViewDetail: {
            readonly type: "object";
            readonly required: readonly ["did", "handle", "relatedRecords", "indexedAt", "moderation"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly relatedRecords: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "unknown";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly moderation: {
                    readonly type: "ref";
                    readonly ref: "#moderationDetail";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly invitedBy: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.server.defs#inviteCode";
                };
                readonly invites: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.server.defs#inviteCode";
                    };
                };
                readonly invitesDisabled: {
                    readonly type: "boolean";
                };
                readonly inviteNote: {
                    readonly type: "string";
                };
                readonly emailConfirmedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly deactivatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly threatSignatures: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.admin.defs#threatSignature";
                    };
                };
            };
        };
        readonly repoViewNotFound: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly recordView: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "value", "blobCids", "indexedAt", "moderation", "repo"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly value: {
                    readonly type: "unknown";
                };
                readonly blobCids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "cid";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly moderation: {
                    readonly type: "ref";
                    readonly ref: "#moderation";
                };
                readonly repo: {
                    readonly type: "ref";
                    readonly ref: "#repoView";
                };
            };
        };
        readonly recordViewDetail: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "value", "blobs", "indexedAt", "moderation", "repo"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly value: {
                    readonly type: "unknown";
                };
                readonly blobs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#blobView";
                    };
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly moderation: {
                    readonly type: "ref";
                    readonly ref: "#moderationDetail";
                };
                readonly repo: {
                    readonly type: "ref";
                    readonly ref: "#repoView";
                };
            };
        };
        readonly recordViewNotFound: {
            readonly type: "object";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly moderation: {
            readonly type: "object";
            readonly properties: {
                readonly subjectStatus: {
                    readonly type: "ref";
                    readonly ref: "#subjectStatusView";
                };
            };
        };
        readonly moderationDetail: {
            readonly type: "object";
            readonly properties: {
                readonly subjectStatus: {
                    readonly type: "ref";
                    readonly ref: "#subjectStatusView";
                };
            };
        };
        readonly blobView: {
            readonly type: "object";
            readonly required: readonly ["cid", "mimeType", "size", "createdAt"];
            readonly properties: {
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly mimeType: {
                    readonly type: "string";
                };
                readonly size: {
                    readonly type: "integer";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly details: {
                    readonly type: "union";
                    readonly refs: readonly ["#imageDetails", "#videoDetails"];
                };
                readonly moderation: {
                    readonly type: "ref";
                    readonly ref: "#moderation";
                };
            };
        };
        readonly imageDetails: {
            readonly type: "object";
            readonly required: readonly ["width", "height"];
            readonly properties: {
                readonly width: {
                    readonly type: "integer";
                };
                readonly height: {
                    readonly type: "integer";
                };
            };
        };
        readonly videoDetails: {
            readonly type: "object";
            readonly required: readonly ["width", "height", "length"];
            readonly properties: {
                readonly width: {
                    readonly type: "integer";
                };
                readonly height: {
                    readonly type: "integer";
                };
                readonly length: {
                    readonly type: "integer";
                };
            };
        };
        readonly accountHosting: {
            readonly type: "object";
            readonly required: readonly ["status"];
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["takendown", "suspended", "deleted", "deactivated", "unknown"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly deletedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly deactivatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly reactivatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly recordHosting: {
            readonly type: "object";
            readonly required: readonly ["status"];
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["deleted", "unknown"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly deletedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly reporterStats: {
            readonly type: "object";
            readonly required: readonly ["did", "accountReportCount", "recordReportCount", "reportedAccountCount", "reportedRecordCount", "takendownAccountCount", "takendownRecordCount", "labeledAccountCount", "labeledRecordCount"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly accountReportCount: {
                    readonly type: "integer";
                    readonly description: "The total number of reports made by the user on accounts.";
                };
                readonly recordReportCount: {
                    readonly type: "integer";
                    readonly description: "The total number of reports made by the user on records.";
                };
                readonly reportedAccountCount: {
                    readonly type: "integer";
                    readonly description: "The total number of accounts reported by the user.";
                };
                readonly reportedRecordCount: {
                    readonly type: "integer";
                    readonly description: "The total number of records reported by the user.";
                };
                readonly takendownAccountCount: {
                    readonly type: "integer";
                    readonly description: "The total number of accounts taken down as a result of the user's reports.";
                };
                readonly takendownRecordCount: {
                    readonly type: "integer";
                    readonly description: "The total number of records taken down as a result of the user's reports.";
                };
                readonly labeledAccountCount: {
                    readonly type: "integer";
                    readonly description: "The total number of accounts labeled as a result of the user's reports.";
                };
                readonly labeledRecordCount: {
                    readonly type: "integer";
                    readonly description: "The total number of records labeled as a result of the user's reports.";
                };
            };
        };
        readonly modTool: {
            readonly type: "object";
            readonly description: "Moderation tool information for tracing the source of the action";
            readonly required: readonly ["name"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name/identifier of the source (e.g., 'automod', 'ozone/workspace')";
                };
                readonly meta: {
                    readonly type: "unknown";
                    readonly description: "Additional arbitrary metadata about the source";
                };
            };
        };
        readonly timelineEventPlcCreate: {
            readonly type: "token";
            readonly description: "Moderation event timeline event for a PLC create operation";
        };
        readonly timelineEventPlcOperation: {
            readonly type: "token";
            readonly description: "Moderation event timeline event for generic PLC operation";
        };
        readonly timelineEventPlcTombstone: {
            readonly type: "token";
            readonly description: "Moderation event timeline event for a PLC tombstone operation";
        };
        readonly scheduledActionView: {
            readonly type: "object";
            readonly description: "View of a scheduled moderation action";
            readonly required: readonly ["id", "action", "did", "createdBy", "createdAt", "status"];
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "Auto-incrementing row ID";
                };
                readonly action: {
                    readonly type: "string";
                    readonly knownValues: readonly ["takedown"];
                    readonly description: "Type of action to be executed";
                };
                readonly eventData: {
                    readonly type: "unknown";
                    readonly description: "Serialized event object that will be propagated to the event when performed";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "Subject DID for the action";
                };
                readonly executeAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Exact time to execute the action";
                };
                readonly executeAfter: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Earliest time to execute the action (for randomized scheduling)";
                };
                readonly executeUntil: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Latest time to execute the action (for randomized scheduling)";
                };
                readonly randomizeExecution: {
                    readonly type: "boolean";
                    readonly description: "Whether execution time should be randomized within the specified range";
                };
                readonly createdBy: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "DID of the user who created this scheduled action";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "When the scheduled action was created";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "When the scheduled action was last updated";
                };
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["pending", "executed", "cancelled", "failed"];
                    readonly description: "Current status of the scheduled action";
                };
                readonly lastExecutedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "When the action was last attempted to be executed";
                };
                readonly lastFailureReason: {
                    readonly type: "string";
                    readonly description: "Reason for the last execution failure";
                };
                readonly executionEventId: {
                    readonly type: "integer";
                    readonly description: "ID of the moderation event created when action was successfully executed";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map