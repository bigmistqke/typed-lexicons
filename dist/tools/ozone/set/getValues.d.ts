declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.getValues";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a specific set and its values";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["name"];
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 1000;
                        readonly default: 100;
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
                    readonly required: readonly ["set", "values"];
                    readonly properties: {
                        readonly set: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.set.defs#setView";
                        };
                        readonly values: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly cursor: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "SetNotFound";
                readonly description: "set with the given name does not exist";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getValues.d.ts.map