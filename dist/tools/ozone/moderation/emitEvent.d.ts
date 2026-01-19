declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.emitEvent";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Take a moderation action on an actor.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["event", "subject", "createdBy"];
                    readonly properties: {
                        readonly event: {
                            readonly type: "union";
                            readonly refs: readonly ["tools.ozone.moderation.defs#modEventTakedown", "tools.ozone.moderation.defs#modEventAcknowledge", "tools.ozone.moderation.defs#modEventEscalate", "tools.ozone.moderation.defs#modEventComment", "tools.ozone.moderation.defs#modEventLabel", "tools.ozone.moderation.defs#modEventReport", "tools.ozone.moderation.defs#modEventMute", "tools.ozone.moderation.defs#modEventUnmute", "tools.ozone.moderation.defs#modEventMuteReporter", "tools.ozone.moderation.defs#modEventUnmuteReporter", "tools.ozone.moderation.defs#modEventReverseTakedown", "tools.ozone.moderation.defs#modEventResolveAppeal", "tools.ozone.moderation.defs#modEventEmail", "tools.ozone.moderation.defs#modEventDivert", "tools.ozone.moderation.defs#modEventTag", "tools.ozone.moderation.defs#accountEvent", "tools.ozone.moderation.defs#identityEvent", "tools.ozone.moderation.defs#recordEvent", "tools.ozone.moderation.defs#modEventPriorityScore", "tools.ozone.moderation.defs#ageAssuranceEvent", "tools.ozone.moderation.defs#ageAssuranceOverrideEvent", "tools.ozone.moderation.defs#revokeAccountCredentialsEvent", "tools.ozone.moderation.defs#scheduleTakedownEvent", "tools.ozone.moderation.defs#cancelScheduledTakedownEvent"];
                        };
                        readonly subject: {
                            readonly type: "union";
                            readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef"];
                        };
                        readonly subjectBlobCids: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "cid";
                            };
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly modTool: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.moderation.defs#modTool";
                        };
                        readonly externalId: {
                            readonly type: "string";
                            readonly description: "An optional external ID for the event, used to deduplicate events from external systems. Fails when an event of same type with the same external ID exists for the same subject.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.moderation.defs#modEventView";
                };
            };
            readonly errors: readonly [{
                readonly name: "SubjectHasAction";
            }, {
                readonly name: "DuplicateExternalId";
                readonly description: "An event with the same external ID already exists for the subject.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=emitEvent.d.ts.map