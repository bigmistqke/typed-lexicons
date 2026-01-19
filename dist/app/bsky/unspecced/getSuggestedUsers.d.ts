declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getSuggestedUsers";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of suggested users";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
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
                    readonly required: readonly ["actors"];
                    readonly properties: {
                        readonly actors: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileView";
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
//# sourceMappingURL=getSuggestedUsers.d.ts.map