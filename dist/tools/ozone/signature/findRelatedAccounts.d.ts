declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.signature.findRelatedAccounts";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get accounts that share some matching threat signatures with the root account.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["accounts"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly accounts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#relatedAccount";
                            };
                        };
                    };
                };
            };
        };
        readonly relatedAccount: {
            readonly type: "object";
            readonly required: readonly ["account"];
            readonly properties: {
                readonly account: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.admin.defs#accountView";
                };
                readonly similarities: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "tools.ozone.signature.defs#sigDetail";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=findRelatedAccounts.d.ts.map