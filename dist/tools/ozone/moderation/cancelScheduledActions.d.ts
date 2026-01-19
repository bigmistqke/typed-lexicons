declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.cancelScheduledActions";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Cancel all pending scheduled moderation actions for specified subjects";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subjects"];
                    readonly properties: {
                        readonly subjects: {
                            readonly type: "array";
                            readonly maxLength: 100;
                            readonly items: {
                                readonly type: "string";
                                readonly format: "did";
                            };
                            readonly description: "Array of DID subjects to cancel scheduled actions for";
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly description: "Optional comment describing the reason for cancellation";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "#cancellationResults";
                };
            };
        };
        readonly cancellationResults: {
            readonly type: "object";
            readonly required: readonly ["succeeded", "failed"];
            readonly properties: {
                readonly succeeded: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly description: "DIDs for which all pending scheduled actions were successfully cancelled";
                };
                readonly failed: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#failedCancellation";
                    };
                    readonly description: "DIDs for which cancellation failed with error details";
                };
            };
        };
        readonly failedCancellation: {
            readonly type: "object";
            readonly required: readonly ["did", "error"];
            readonly properties: {
                readonly did: {
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
//# sourceMappingURL=cancelScheduledActions.d.ts.map