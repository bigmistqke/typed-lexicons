declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.addReservedHandle";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Add a handle to the set of reserved handles.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["handle"];
                    readonly properties: {
                        readonly handle: {
                            readonly type: "string";
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
//# sourceMappingURL=addReservedHandle.d.ts.map