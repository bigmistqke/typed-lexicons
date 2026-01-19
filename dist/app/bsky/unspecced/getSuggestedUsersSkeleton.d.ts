declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getSuggestedUsersSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a skeleton of suggested users. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsers";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly viewer: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account making the request (not included for public/unauthenticated queries).";
                    };
                    readonly category: {
                        readonly type: "string";
                        readonly description: "Category of users to get suggestions for.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 50;
                        readonly default: 25;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["dids"];
                    readonly properties: {
                        readonly dids: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "did";
                            };
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
//# sourceMappingURL=getSuggestedUsersSkeleton.d.ts.map