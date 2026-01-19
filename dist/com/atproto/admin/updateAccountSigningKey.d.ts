declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.updateAccountSigningKey";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Administrative action to update an account's signing key in their Did document.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "signingKey"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly signingKey: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "Did-key formatted public key";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateAccountSigningKey.d.ts.map