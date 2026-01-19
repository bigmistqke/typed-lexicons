declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.team.addMember";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Add a member to the ozone team. Requires admin role.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "role"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
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
                readonly name: "MemberAlreadyExists";
                readonly description: "Member already exists in the team.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=addMember.d.ts.map