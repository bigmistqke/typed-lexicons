declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.addValues";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Add values to a specific set. Attempting to add values to a set that does not exist will result in an error.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["name", "values"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the set to add values to";
                        };
                        readonly values: {
                            readonly type: "array";
                            readonly minLength: 1;
                            readonly maxLength: 1000;
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "Array of string values to add to the set";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=addValues.d.ts.map