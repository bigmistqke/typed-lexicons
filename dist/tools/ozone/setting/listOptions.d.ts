declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.setting.listOptions";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List settings with optional filtering";
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
                    readonly scope: {
                        readonly type: "string";
                        readonly knownValues: readonly ["instance", "personal"];
                        readonly default: "instance";
                    };
                    readonly prefix: {
                        readonly type: "string";
                        readonly description: "Filter keys by prefix";
                    };
                    readonly keys: {
                        readonly type: "array";
                        readonly maxLength: 100;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "nsid";
                        };
                        readonly description: "Filter for only the specified keys. Ignored if prefix is provided";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["options"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly options: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.setting.defs#option";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listOptions.d.ts.map