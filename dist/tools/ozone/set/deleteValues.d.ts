declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.deleteValues";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete values from a specific set. Attempting to delete values that are not in the set will not result in an error";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["name", "values"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the set to delete values from";
                        };
                        readonly values: {
                            readonly type: "array";
                            readonly minLength: 1;
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "Array of string values to delete from the set";
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
//# sourceMappingURL=deleteValues.d.ts.map