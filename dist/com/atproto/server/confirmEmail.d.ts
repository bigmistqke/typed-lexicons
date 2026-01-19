declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.confirmEmail";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Confirm an email using a token from com.atproto.server.requestEmailConfirmation.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["email", "token"];
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly token: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "AccountNotFound";
            }, {
                readonly name: "ExpiredToken";
            }, {
                readonly name: "InvalidToken";
            }, {
                readonly name: "InvalidEmail";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=confirmEmail.d.ts.map