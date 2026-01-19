declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.setting.defs";
    readonly defs: {
        readonly option: {
            readonly type: "object";
            readonly required: readonly ["key", "value", "did", "scope", "createdBy", "lastUpdatedBy"];
            readonly properties: {
                readonly key: {
                    readonly type: "string";
                    readonly format: "nsid";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly value: {
                    readonly type: "unknown";
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 1024;
                    readonly maxLength: 10240;
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly managerRole: {
                    readonly type: "string";
                    readonly knownValues: readonly ["tools.ozone.team.defs#roleModerator", "tools.ozone.team.defs#roleTriage", "tools.ozone.team.defs#roleAdmin", "tools.ozone.team.defs#roleVerifier"];
                };
                readonly scope: {
                    readonly type: "string";
                    readonly knownValues: readonly ["instance", "personal"];
                };
                readonly createdBy: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly lastUpdatedBy: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map