declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.requestPasswordReset";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Initiate a user account password reset via email.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["email"];
                    readonly properties: {
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
//# sourceMappingURL=requestPasswordReset.d.ts.map