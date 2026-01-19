declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.updateEmail";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Update an account's email.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["email"];
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly emailAuthFactor: {
                            readonly type: "boolean";
                        };
                        readonly token: {
                            readonly type: "string";
                            readonly description: "Requires a token from com.atproto.sever.requestEmailUpdate if the account's email has been confirmed.";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "ExpiredToken";
            }, {
                readonly name: "InvalidToken";
            }, {
                readonly name: "TokenRequired";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=updateEmail.d.ts.map