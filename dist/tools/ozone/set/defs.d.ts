declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.defs";
    readonly defs: {
        readonly set: {
            readonly type: "object";
            readonly required: readonly ["name"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 3;
                    readonly maxLength: 128;
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 1024;
                    readonly maxLength: 10240;
                };
            };
        };
        readonly setView: {
            readonly type: "object";
            readonly required: readonly ["name", "setSize", "createdAt", "updatedAt"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 3;
                    readonly maxLength: 128;
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 1024;
                    readonly maxLength: 10240;
                };
                readonly setSize: {
                    readonly type: "integer";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map