declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.deleteAccount";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "password", "token"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly password: {
                            readonly type: "string";
                        };
                        readonly token: {
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
//# sourceMappingURL=deleteAccount.d.ts.map