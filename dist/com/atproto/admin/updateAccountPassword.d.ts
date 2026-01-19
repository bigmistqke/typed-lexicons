declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.updateAccountPassword";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Update the password for a user account as an administrator.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "password"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly password: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateAccountPassword.d.ts.map