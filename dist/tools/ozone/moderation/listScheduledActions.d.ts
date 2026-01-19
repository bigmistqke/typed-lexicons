declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.listScheduledActions";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "List scheduled moderation actions with optional filtering";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["statuses"];
                    readonly properties: {
                        readonly startsAfter: {
                            readonly type: "string";
                            readonly format: "datetime";
                            readonly description: "Filter actions scheduled to execute after this time";
                        };
                        readonly endsBefore: {
                            readonly type: "string";
                            readonly format: "datetime";
                            readonly description: "Filter actions scheduled to execute before this time";
                        };
                        readonly subjects: {
                            readonly type: "array";
                            readonly maxLength: 100;
                            readonly items: {
                                readonly type: "string";
                                readonly format: "did";
                            };
                            readonly description: "Filter actions for specific DID subjects";
                        };
                        readonly statuses: {
                            readonly type: "array";
                            readonly minLength: 1;
                            readonly items: {
                                readonly type: "string";
                                readonly knownValues: readonly ["pending", "executed", "cancelled", "failed"];
                            };
                            readonly description: "Filter actions by status";
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly maximum: 100;
                            readonly default: 50;
                            readonly description: "Maximum number of results to return";
                        };
                        readonly cursor: {
                            readonly type: "string";
                            readonly description: "Cursor for pagination";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["actions"];
                    readonly properties: {
                        readonly actions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.moderation.defs#scheduledActionView";
                            };
                        };
                        readonly cursor: {
                            readonly type: "string";
                            readonly description: "Cursor for next page of results";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listScheduledActions.d.ts.map