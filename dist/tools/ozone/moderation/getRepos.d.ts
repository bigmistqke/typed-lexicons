declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getRepos";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about some repositories.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["dids"];
                readonly properties: {
                    readonly dids: {
                        readonly type: "array";
                        readonly maxLength: 100;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["repos"];
                    readonly properties: {
                        readonly repos: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["tools.ozone.moderation.defs#repoViewDetail", "tools.ozone.moderation.defs#repoViewNotFound"];
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getRepos.d.ts.map