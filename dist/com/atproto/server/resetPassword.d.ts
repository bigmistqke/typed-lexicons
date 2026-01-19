declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.resetPassword";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Reset a user account password using a token.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["token", "password"];
                    readonly properties: {
                        readonly token: {
                            readonly type: "string";
                        };
                        readonly password: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "ExpiredToken";
            }, {
                readonly name: "InvalidToken";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=resetPassword.d.ts.map