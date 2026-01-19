declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.disableAccountInvites";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Disable an account from receiving new invite codes, but does not invalidate existing codes.";
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
                            readonly description: "Optional reason for disabled invites.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=disableAccountInvites.d.ts.map