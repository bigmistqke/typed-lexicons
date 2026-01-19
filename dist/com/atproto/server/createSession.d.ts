declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.createSession";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create an authentication session.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["identifier", "password"];
                    readonly properties: {
                        readonly identifier: {
                            readonly type: "string";
                            readonly description: "Handle or other identifier supported by the server for the authenticating user.";
                        };
                        readonly password: {
                            readonly type: "string";
                        };
                        readonly authFactorToken: {
                            readonly type: "string";
                        };
                        readonly allowTakendown: {
                            readonly type: "boolean";
                            readonly description: "When true, instead of throwing error for takendown accounts, a valid response with a narrow scoped token will be returned";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["accessJwt", "refreshJwt", "handle", "did"];
                    readonly properties: {
                        readonly accessJwt: {
                            readonly type: "string";
                        };
                        readonly refreshJwt: {
                            readonly type: "string";
                        };
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                        };
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly didDoc: {
                            readonly type: "unknown";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly emailConfirmed: {
                            readonly type: "boolean";
                        };
                        readonly emailAuthFactor: {
                            readonly type: "boolean";
                        };
                        readonly active: {
                            readonly type: "boolean";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.";
                            readonly knownValues: readonly ["takendown", "suspended", "deactivated"];
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "AccountTakedown";
            }, {
                readonly name: "AuthFactorTokenRequired";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=createSession.d.ts.map