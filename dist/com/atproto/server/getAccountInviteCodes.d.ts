declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.getAccountInviteCodes";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get all invite codes for the current account. Requires auth.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly includeUsed: {
                        readonly type: "boolean";
                        readonly default: true;
                    };
                    readonly createAvailable: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly description: "Controls whether any new 'earned' but not 'created' invites should be created.";
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
                                readonly ref: "com.atproto.server.defs#inviteCode";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "DuplicateCreate";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getAccountInviteCodes.d.ts.map