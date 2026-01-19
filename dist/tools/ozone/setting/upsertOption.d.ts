declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.setting.upsertOption";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create or update setting option";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["key", "scope", "value"];
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                            readonly format: "nsid";
                        };
                        readonly scope: {
                            readonly type: "string";
                            readonly knownValues: readonly ["instance", "personal"];
                        };
                        readonly value: {
                            readonly type: "unknown";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly maxLength: 2000;
                        };
                        readonly managerRole: {
                            readonly type: "string";
                            readonly knownValues: readonly ["tools.ozone.team.defs#roleModerator", "tools.ozone.team.defs#roleTriage", "tools.ozone.team.defs#roleVerifier", "tools.ozone.team.defs#roleAdmin"];
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["option"];
                    readonly properties: {
                        readonly option: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.setting.defs#option";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=upsertOption.d.ts.map