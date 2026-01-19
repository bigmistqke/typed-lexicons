declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.communication.deleteTemplate";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete a communication template.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["id"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=deleteTemplate.d.ts.map