declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.getSession";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get information about the current auth session. Requires auth.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["handle", "did"];
                    readonly properties: {
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
        };
    };
};
export default _default;
//# sourceMappingURL=getSession.d.ts.map