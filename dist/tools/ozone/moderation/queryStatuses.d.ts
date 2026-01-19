declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.queryStatuses";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "View moderation statuses of subjects (record or repo).";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly queueCount: {
                        readonly type: "integer";
                        readonly description: "Number of queues being used by moderators. Subjects will be split among all queues.";
                    };
                    readonly queueIndex: {
                        readonly type: "integer";
                        readonly description: "Index of the queue to fetch subjects from. Works only when queueCount value is specified.";
                    };
                    readonly queueSeed: {
                        readonly type: "string";
                        readonly description: "A seeder to shuffle/balance the queue items.";
                    };
                    readonly includeAllUserRecords: {
                        readonly type: "boolean";
                        readonly description: "All subjects, or subjects from given 'collections' param, belonging to the account specified in the 'subject' param will be returned.";
                    };
                    readonly subject: {
                        readonly type: "string";
                        readonly format: "uri";
                        readonly description: "The subject to get the status for.";
                    };
                    readonly comment: {
                        readonly type: "string";
                        readonly description: "Search subjects by keyword from comments";
                    };
                    readonly reportedAfter: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects reported after a given timestamp";
                    };
                    readonly reportedBefore: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects reported before a given timestamp";
                    };
                    readonly reviewedAfter: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects reviewed after a given timestamp";
                    };
                    readonly hostingDeletedAfter: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects where the associated record/account was deleted after a given timestamp";
                    };
                    readonly hostingDeletedBefore: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects where the associated record/account was deleted before a given timestamp";
                    };
                    readonly hostingUpdatedAfter: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects where the associated record/account was updated after a given timestamp";
                    };
                    readonly hostingUpdatedBefore: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects where the associated record/account was updated before a given timestamp";
                    };
                    readonly hostingStatuses: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "Search subjects by the status of the associated record/account";
                    };
                    readonly reviewedBefore: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Search subjects reviewed before a given timestamp";
                    };
                    readonly includeMuted: {
                        readonly type: "boolean";
                        readonly description: "By default, we don't include muted subjects in the results. Set this to true to include them.";
                    };
                    readonly onlyMuted: {
                        readonly type: "boolean";
                        readonly description: "When set to true, only muted subjects and reporters will be returned.";
                    };
                    readonly reviewState: {
                        readonly type: "string";
                        readonly description: "Specify when fetching subjects in a certain state";
                        readonly knownValues: readonly ["tools.ozone.moderation.defs#reviewOpen", "tools.ozone.moderation.defs#reviewClosed", "tools.ozone.moderation.defs#reviewEscalated", "tools.ozone.moderation.defs#reviewNone"];
                    };
                    readonly ignoreSubjects: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "uri";
                        };
                    };
                    readonly lastReviewedBy: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "Get all subject statuses that were reviewed by a specific moderator";
                    };
                    readonly sortField: {
                        readonly type: "string";
                        readonly default: "lastReportedAt";
                        readonly enum: readonly ["lastReviewedAt", "lastReportedAt", "reportedRecordsCount", "takendownRecordsCount", "priorityScore"];
                    };
                    readonly sortDirection: {
                        readonly type: "string";
                        readonly default: "desc";
                        readonly enum: readonly ["asc", "desc"];
                    };
                    readonly takendown: {
                        readonly type: "boolean";
                        readonly description: "Get subjects that were taken down";
                    };
                    readonly appealed: {
                        readonly type: "boolean";
                        readonly description: "Get subjects in unresolved appealed status";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly tags: {
                        readonly type: "array";
                        readonly maxLength: 25;
                        readonly items: {
                            readonly type: "string";
                            readonly description: "Items in this array are applied with OR filters. To apply AND filter, put all tags in the same string and separate using && characters";
                        };
                    };
                    readonly excludeTags: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly collections: {
                        readonly type: "array";
                        readonly maxLength: 20;
                        readonly description: "If specified, subjects belonging to the given collections will be returned. When subjectType is set to 'account', this will be ignored.";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "nsid";
                        };
                    };
                    readonly subjectType: {
                        readonly type: "string";
                        readonly description: "If specified, subjects of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.";
                        readonly knownValues: readonly ["account", "record"];
                    };
                    readonly minAccountSuspendCount: {
                        readonly type: "integer";
                        readonly description: "If specified, only subjects that belong to an account that has at least this many suspensions will be returned.";
                    };
                    readonly minReportedRecordsCount: {
                        readonly type: "integer";
                        readonly description: "If specified, only subjects that belong to an account that has at least this many reported records will be returned.";
                    };
                    readonly minTakendownRecordsCount: {
                        readonly type: "integer";
                        readonly description: "If specified, only subjects that belong to an account that has at least this many taken down records will be returned.";
                    };
                    readonly minPriorityScore: {
                        readonly minimum: 0;
                        readonly maximum: 100;
                        readonly type: "integer";
                        readonly description: "If specified, only subjects that have priority score value above the given value will be returned.";
                    };
                    readonly minStrikeCount: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "If specified, only subjects that belong to an account that has at least this many active strikes will be returned.";
                    };
                    readonly ageAssuranceState: {
                        readonly type: "string";
                        readonly description: "If specified, only subjects with the given age assurance state will be returned.";
                        readonly knownValues: readonly ["pending", "assured", "unknown", "reset", "blocked"];
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subjectStatuses"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly subjectStatuses: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.moderation.defs#subjectStatusView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=queryStatuses.d.ts.map