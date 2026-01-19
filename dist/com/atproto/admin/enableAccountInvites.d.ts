declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.enableAccountInvites";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Re-enable an account's ability to receive invite codes.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["account"];
                    readonly properties: {
                        readonly account: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly note: {
                            readonly type: "string";
                            readonly description: "Optional reason for enabled invites.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=enableAccountInvites.d.ts.map