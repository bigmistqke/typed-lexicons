declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.team.deleteMember";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete a member from ozone team. Requires admin role.";
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
            readonly errors: readonly [{
                readonly name: "MemberNotFound";
                readonly description: "The member being deleted does not exist";
            }, {
                readonly name: "CannotDeleteSelf";
                readonly description: "You can not delete yourself from the team";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=deleteMember.d.ts.map