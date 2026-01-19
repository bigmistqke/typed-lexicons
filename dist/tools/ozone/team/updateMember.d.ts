declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.team.updateMember";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Update a member in the ozone service. Requires admin role.";
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
                        readonly disabled: {
                            readonly type: "boolean";
                        };
                        readonly role: {
                            readonly type: "string";
                            readonly knownValues: readonly ["tools.ozone.team.defs#roleAdmin", "tools.ozone.team.defs#roleModerator", "tools.ozone.team.defs#roleVerifier", "tools.ozone.team.defs#roleTriage"];
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.team.defs#member";
                };
            };
            readonly errors: readonly [{
                readonly name: "MemberNotFound";
                readonly description: "The member being updated does not exist in the team";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=updateMember.d.ts.map