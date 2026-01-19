declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.getAccountInfos";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about some accounts.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["dids"];
                readonly properties: {
                    readonly dids: {
                        readonly type: "array";
                        readonly items: {
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
                    readonly required: readonly ["infos"];
                    readonly properties: {
                        readonly infos: {
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
//# sourceMappingURL=getAccountInfos.d.ts.map