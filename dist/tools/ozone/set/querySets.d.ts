declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.querySets";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Query available sets";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly namePrefix: {
                        readonly type: "string";
                    };
                    readonly sortBy: {
                        readonly type: "string";
                        readonly enum: readonly ["name", "createdAt", "updatedAt"];
                        readonly default: "name";
                    };
                    readonly sortDirection: {
                        readonly type: "string";
                        readonly default: "asc";
                        readonly enum: readonly ["asc", "desc"];
                        readonly description: "Defaults to ascending order of name field.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["sets"];
                    readonly properties: {
                        readonly sets: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.set.defs#setView";
                            };
                        };
                        readonly cursor: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=querySets.d.ts.map