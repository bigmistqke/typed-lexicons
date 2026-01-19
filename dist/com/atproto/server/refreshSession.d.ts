declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.refreshSession";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').";
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
                            readonly description: "Hosting status of the account. If not specified, then assume 'active'.";
                            readonly knownValues: readonly ["takendown", "suspended", "deactivated"];
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "AccountTakedown";
            }, {
                readonly name: "InvalidToken";
            }, {
                readonly name: "ExpiredToken";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=refreshSession.d.ts.map