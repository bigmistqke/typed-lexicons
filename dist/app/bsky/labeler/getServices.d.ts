declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.labeler.getServices";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get information about a list of labeler services.";
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
                    readonly detailed: {
                        readonly type: "boolean";
                        readonly default: false;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["views"];
                    readonly properties: {
                        readonly views: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["app.bsky.labeler.defs#labelerView", "app.bsky.labeler.defs#labelerViewDetailed"];
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getServices.d.ts.map