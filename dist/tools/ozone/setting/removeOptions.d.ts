declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.setting.removeOptions";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete settings by key";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["keys", "scope"];
                    readonly properties: {
                        readonly keys: {
                            readonly type: "array";
                            readonly minLength: 1;
                            readonly maxLength: 200;
                            readonly items: {
                                readonly type: "string";
                                readonly format: "nsid";
                            };
                        };
                        readonly scope: {
                            readonly type: "string";
                            readonly knownValues: readonly ["instance", "personal"];
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=removeOptions.d.ts.map