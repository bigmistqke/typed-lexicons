declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.signature.findCorrelation";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Find all correlated threat signatures between 2 or more accounts.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["dids"];
                readonly properties: {
                    readonly dids: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["details"];
                    readonly properties: {
                        readonly details: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.signature.defs#sigDetail";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=findCorrelation.d.ts.map