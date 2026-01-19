declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getSuggestionsSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a skeleton of suggested actors. Intended to be called and then hydrated through app.bsky.actor.getSuggestions";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly viewer: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account making the request (not included for public/unauthenticated queries). Used to boost followed accounts in ranking.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly relativeToDid: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account to get suggestions relative to. If not provided, suggestions will be based on the viewer.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["actors"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly actors: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.unspecced.defs#skeletonSearchActor";
                            };
                        };
                        readonly relativeToDid: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "DID of the account these suggestions are relative to. If this is returned undefined, suggestions are based on the viewer.";
                        };
                        readonly recId: {
                            readonly type: "integer";
                            readonly description: "Snowflake for this recommendation, use when submitting recommendation events.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getSuggestionsSkeleton.d.ts.map