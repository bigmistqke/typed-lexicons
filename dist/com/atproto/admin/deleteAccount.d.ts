declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.deleteAccount";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete a user account as an administrator.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=deleteAccount.d.ts.map