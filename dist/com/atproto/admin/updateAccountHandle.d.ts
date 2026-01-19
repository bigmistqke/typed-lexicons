declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.updateAccountHandle";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Administrative action to update an account's handle.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "handle"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateAccountHandle.d.ts.map