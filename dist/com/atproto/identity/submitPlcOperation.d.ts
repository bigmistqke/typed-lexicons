declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.submitPlcOperation";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["operation"];
                    readonly properties: {
                        readonly operation: {
                            readonly type: "unknown";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=submitPlcOperation.d.ts.map