declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.createInviteCode";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create an invite code.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["useCount"];
                    readonly properties: {
                        readonly useCount: {
                            readonly type: "integer";
                        };
                        readonly forAccount: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["code"];
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=createInviteCode.d.ts.map