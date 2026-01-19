declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.signature.searchAccounts";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Search for accounts that match one or more threat signature values.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["values"];
                readonly properties: {
                    readonly values: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
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
                                readonly ref: "com.atproto.admin.defs#accountView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=searchAccounts.d.ts.map