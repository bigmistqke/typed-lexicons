declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getTrends";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get the current trends on the network";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 25;
                        readonly default: 10;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["trends"];
                    readonly properties: {
                        readonly trends: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.unspecced.defs#trendView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getTrends.d.ts.map