declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.communication.listTemplates";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get list of all communication templates.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["communicationTemplates"];
                    readonly properties: {
                        readonly communicationTemplates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.communication.defs#templateView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listTemplates.d.ts.map