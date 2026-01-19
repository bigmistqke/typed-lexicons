declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.updateAccountEmail";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Administrative action to update an account's email.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["account", "email"];
                    readonly properties: {
                        readonly account: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                            readonly description: "The handle or DID of the repo.";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateAccountEmail.d.ts.map