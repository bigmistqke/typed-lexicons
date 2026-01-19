declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.getInviteCodes";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get an admin view of invite codes.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly sort: {
                        readonly type: "string";
                        readonly knownValues: readonly ["recent", "usage"];
                        readonly default: "recent";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 500;
                        readonly default: 100;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["codes"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly codes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "com.atproto.server.defs#inviteCode";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getInviteCodes.d.ts.map