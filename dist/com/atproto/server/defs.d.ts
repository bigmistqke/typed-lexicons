declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.defs";
    readonly defs: {
        readonly inviteCode: {
            readonly type: "object";
            readonly required: readonly ["code", "available", "disabled", "forAccount", "createdBy", "createdAt", "uses"];
            readonly properties: {
                readonly code: {
                    readonly type: "string";
                };
                readonly available: {
                    readonly type: "integer";
                };
                readonly disabled: {
                    readonly type: "boolean";
                };
                readonly forAccount: {
                    readonly type: "string";
                };
                readonly createdBy: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly uses: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#inviteCodeUse";
                    };
                };
            };
        };
        readonly inviteCodeUse: {
            readonly type: "object";
            readonly required: readonly ["usedBy", "usedAt"];
            readonly properties: {
                readonly usedBy: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly usedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map