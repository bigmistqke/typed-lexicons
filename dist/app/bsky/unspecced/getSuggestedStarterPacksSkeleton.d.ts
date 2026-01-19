declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getSuggestedStarterPacksSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a skeleton of suggested starterpacks. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedStarterpacks";
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
                    readonly required: readonly ["starterPacks"];
                    readonly properties: {
                        readonly starterPacks: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "at-uri";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getSuggestedStarterPacksSkeleton.d.ts.map