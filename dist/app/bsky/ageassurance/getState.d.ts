declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.ageassurance.getState";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns server-computed Age Assurance state, if available, and any additional metadata needed to compute Age Assurance state client-side.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["countryCode"];
                readonly properties: {
                    readonly countryCode: {
                        readonly type: "string";
                    };
                    readonly regionCode: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["state", "metadata"];
                    readonly properties: {
                        readonly state: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.ageassurance.defs#state";
                        };
                        readonly metadata: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.ageassurance.defs#stateMetadata";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getState.d.ts.map