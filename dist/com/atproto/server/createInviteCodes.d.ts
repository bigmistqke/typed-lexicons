declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.createInviteCodes";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create invite codes.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["codeCount", "useCount"];
                    readonly properties: {
                        readonly codeCount: {
                            readonly type: "integer";
                            readonly default: 1;
                        };
                        readonly useCount: {
                            readonly type: "integer";
                        };
                        readonly forAccounts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "did";
                            };
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["codes"];
                    readonly properties: {
                        readonly codes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#accountCodes";
                            };
                        };
                    };
                };
            };
        };
        readonly accountCodes: {
            readonly type: "object";
            readonly required: readonly ["account", "codes"];
            readonly properties: {
                readonly account: {
                    readonly type: "string";
                };
                readonly codes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=createInviteCodes.d.ts.map