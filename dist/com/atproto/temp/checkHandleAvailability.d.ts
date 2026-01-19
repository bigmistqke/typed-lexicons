declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.checkHandleAvailability";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Checks whether the provided handle is available. If the handle is not available, available suggestions will be returned. Optional inputs will be used to generate suggestions.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["handle"];
                readonly properties: {
                    readonly handle: {
                        readonly type: "string";
                        readonly format: "handle";
                        readonly description: "Tentative handle. Will be checked for availability or used to build handle suggestions.";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "User-provided email. Might be used to build handle suggestions.";
                    };
                    readonly birthDate: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "User-provided birth date. Might be used to build handle suggestions.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["handle", "result"];
                    readonly properties: {
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                            readonly description: "Echo of the input handle.";
                        };
                        readonly result: {
                            readonly type: "union";
                            readonly refs: readonly ["#resultAvailable", "#resultUnavailable"];
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidEmail";
                readonly description: "An invalid email was provided.";
            }];
        };
        readonly resultAvailable: {
            readonly type: "object";
            readonly description: "Indicates the provided handle is available.";
            readonly properties: {};
        };
        readonly resultUnavailable: {
            readonly type: "object";
            readonly description: "Indicates the provided handle is unavailable and gives suggestions of available handles.";
            readonly required: readonly ["suggestions"];
            readonly properties: {
                readonly suggestions: {
                    readonly type: "array";
                    readonly description: "List of suggested handles based on the provided inputs.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#suggestion";
                    };
                };
            };
        };
        readonly suggestion: {
            readonly type: "object";
            readonly required: readonly ["handle", "method"];
            readonly properties: {
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly method: {
                    readonly type: "string";
                    readonly description: "Method used to build this suggestion. Should be considered opaque to clients. Can be used for metrics.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=checkHandleAvailability.d.ts.map