declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.updateHandle";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["handle"];
                    readonly properties: {
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                            readonly description: "The new handle.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateHandle.d.ts.map