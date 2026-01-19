declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getTrendsSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get the skeleton of trends on the network. Intended to be called and then hydrated through app.bsky.unspecced.getTrends";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly viewer: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account making the request (not included for public/unauthenticated queries).";
                    };
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
                                readonly ref: "app.bsky.unspecced.defs#skeletonTrend";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getTrendsSkeleton.d.ts.map