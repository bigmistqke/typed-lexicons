declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.revokeAccountCredentials";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Revoke sessions, password, and app passwords associated with account. May be resolved by a password reset.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["account"];
                    readonly properties: {
                        readonly account: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=revokeAccountCredentials.d.ts.map