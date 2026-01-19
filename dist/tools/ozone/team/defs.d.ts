declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.team.defs";
    readonly defs: {
        readonly member: {
            readonly type: "object";
            readonly required: readonly ["did", "role"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly disabled: {
                    readonly type: "boolean";
                };
                readonly profile: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewDetailed";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly lastUpdatedBy: {
                    readonly type: "string";
                };
                readonly role: {
                    readonly type: "string";
                    readonly knownValues: readonly ["tools.ozone.team.defs#roleAdmin", "tools.ozone.team.defs#roleModerator", "tools.ozone.team.defs#roleTriage", "tools.ozone.team.defs#roleVerifier"];
                };
            };
        };
        readonly roleAdmin: {
            readonly type: "token";
            readonly description: "Admin role. Highest level of access, can perform all actions.";
        };
        readonly roleModerator: {
            readonly type: "token";
            readonly description: "Moderator role. Can perform most actions.";
        };
        readonly roleTriage: {
            readonly type: "token";
            readonly description: "Triage role. Mostly intended for monitoring and escalating issues.";
        };
        readonly roleVerifier: {
            readonly type: "token";
            readonly description: "Verifier role. Only allowed to issue verifications.";
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map