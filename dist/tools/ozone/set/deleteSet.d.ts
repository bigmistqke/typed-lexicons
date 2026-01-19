declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.deleteSet";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete an entire set. Attempting to delete a set that does not exist will result in an error.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["name"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the set to delete";
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
            readonly errors: readonly [{
                readonly name: "SetNotFound";
                readonly description: "set with the given name does not exist";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=deleteSet.d.ts.map