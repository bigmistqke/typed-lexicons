declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.safelink.queryRules";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Query URL safety rules";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                            readonly description: "Cursor for pagination";
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly maximum: 100;
                            readonly default: 50;
                            readonly description: "Maximum number of results to return";
                        };
                        readonly urls: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "Filter by specific URLs or domains";
                        };
                        readonly patternType: {
                            readonly type: "string";
                            readonly description: "Filter by pattern type";
                        };
                        readonly actions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "Filter by action types";
                        };
                        readonly reason: {
                            readonly type: "string";
                            readonly description: "Filter by reason type";
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "Filter by rule creator";
                        };
                        readonly sortDirection: {
                            readonly type: "string";
                            readonly knownValues: readonly ["asc", "desc"];
                            readonly default: "desc";
                            readonly description: "Sort direction";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["rules"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                            readonly description: "Next cursor for pagination. Only present if there are more results.";
                        };
                        readonly rules: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.safelink.defs#urlRule";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=queryRules.d.ts.map