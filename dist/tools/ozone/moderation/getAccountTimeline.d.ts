declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getAccountTimeline";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get timeline of all available events of an account. This includes moderation events, account history and did history.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["timeline"];
                    readonly properties: {
                        readonly timeline: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#timelineItem";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "RepoNotFound";
            }];
        };
        readonly timelineItem: {
            readonly type: "object";
            readonly required: readonly ["day", "summary"];
            readonly properties: {
                readonly day: {
                    readonly type: "string";
                };
                readonly summary: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#timelineItemSummary";
                    };
                };
            };
        };
        readonly timelineItemSummary: {
            readonly type: "object";
            readonly required: readonly ["eventSubjectType", "eventType", "count"];
            readonly properties: {
                readonly eventSubjectType: {
                    readonly type: "string";
                    readonly knownValues: readonly ["account", "record", "chat"];
                };
                readonly eventType: {
                    readonly type: "string";
                    readonly knownValues: readonly ["tools.ozone.moderation.defs#modEventTakedown", "tools.ozone.moderation.defs#modEventReverseTakedown", "tools.ozone.moderation.defs#modEventComment", "tools.ozone.moderation.defs#modEventReport", "tools.ozone.moderation.defs#modEventLabel", "tools.ozone.moderation.defs#modEventAcknowledge", "tools.ozone.moderation.defs#modEventEscalate", "tools.ozone.moderation.defs#modEventMute", "tools.ozone.moderation.defs#modEventUnmute", "tools.ozone.moderation.defs#modEventMuteReporter", "tools.ozone.moderation.defs#modEventUnmuteReporter", "tools.ozone.moderation.defs#modEventEmail", "tools.ozone.moderation.defs#modEventResolveAppeal", "tools.ozone.moderation.defs#modEventDivert", "tools.ozone.moderation.defs#modEventTag", "tools.ozone.moderation.defs#accountEvent", "tools.ozone.moderation.defs#identityEvent", "tools.ozone.moderation.defs#recordEvent", "tools.ozone.moderation.defs#modEventPriorityScore", "tools.ozone.moderation.defs#revokeAccountCredentialsEvent", "tools.ozone.moderation.defs#ageAssuranceEvent", "tools.ozone.moderation.defs#ageAssuranceOverrideEvent", "tools.ozone.moderation.defs#timelineEventPlcCreate", "tools.ozone.moderation.defs#timelineEventPlcOperation", "tools.ozone.moderation.defs#timelineEventPlcTombstone", "tools.ozone.hosting.getAccountHistory#accountCreated", "tools.ozone.hosting.getAccountHistory#emailConfirmed", "tools.ozone.hosting.getAccountHistory#passwordUpdated", "tools.ozone.hosting.getAccountHistory#handleUpdated", "tools.ozone.moderation.defs#scheduleTakedownEvent", "tools.ozone.moderation.defs#cancelScheduledTakedownEvent"];
                };
                readonly count: {
                    readonly type: "integer";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getAccountTimeline.d.ts.map