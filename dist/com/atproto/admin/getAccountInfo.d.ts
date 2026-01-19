declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.getAccountInfo";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about an account.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.admin.defs#accountView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getAccountInfo.d.ts.map