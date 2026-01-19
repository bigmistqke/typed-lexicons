declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.searchRepos";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Find repositories based on a search term.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly term: {
                        readonly type: "string";
                        readonly description: "DEPRECATED: use 'q' instead";
                    };
                    readonly q: {
                        readonly type: "string";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
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
                    readonly required: readonly ["repos"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly repos: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.moderation.defs#repoView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=searchRepos.d.ts.map