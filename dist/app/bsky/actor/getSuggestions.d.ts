declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.getSuggestions";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
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
//# sourceMappingURL=getSuggestions.d.ts.map