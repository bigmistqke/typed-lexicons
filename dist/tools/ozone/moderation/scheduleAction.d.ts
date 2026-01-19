declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.scheduleAction";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Schedule a moderation action to be executed at a future time";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["action", "subjects", "createdBy", "scheduling"];
                    readonly properties: {
                        readonly action: {
                            readonly type: "union";
                            readonly refs: readonly ["#takedown"];
                        };
                        readonly subjects: {
                            readonly type: "array";
                            readonly maxLength: 100;
                            readonly items: {
                                readonly type: "string";
                                readonly format: "did";
                            };
                            readonly description: "Array of DID subjects to schedule the action for";
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly scheduling: {
                            readonly type: "ref";
                            readonly ref: "#schedulingConfig";
                        };
                        readonly modTool: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.moderation.defs#modTool";
                            readonly description: "This will be propagated to the moderation event when it is applied";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "#scheduledActionResults";
                };
            };
        };
        readonly takedown: {
            readonly type: "object";
            readonly description: "Schedule a takedown action";
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
                readonly strikeCount: {
                    readonly type: "integer";
                    readonly description: "Number of strikes to assign to the user when takedown is applied.";
                };
                readonly strikeExpiresAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "When the strike should expire. If not provided, the strike never expires.";
                };
                readonly emailContent: {
                    readonly type: "string";
                    readonly description: "Email content to be sent to the user upon takedown.";
                };
                readonly emailSubject: {
                    readonly type: "string";
                    readonly description: "Subject of the email to be sent to the user upon takedown.";
                };
            };
        };
        readonly schedulingConfig: {
            readonly type: "object";
            readonly description: "Configuration for when the action should be executed";
            readonly properties: {
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
            };
        };
        readonly scheduledActionResults: {
            readonly type: "object";
            readonly required: readonly ["succeeded", "failed"];
            readonly properties: {
                readonly succeeded: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                };
                readonly failed: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#failedScheduling";
                    };
                };
            };
        };
        readonly failedScheduling: {
            readonly type: "object";
            readonly required: readonly ["subject", "error"];
            readonly properties: {
                readonly subject: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly error: {
                    readonly type: "string";
                };
                readonly errorCode: {
                    readonly type: "string";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=scheduleAction.d.ts.map