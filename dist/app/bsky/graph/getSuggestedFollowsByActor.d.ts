declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getSuggestedFollowsByActor";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["suggestions"];
                    readonly properties: {
                        readonly suggestions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileView";
                            };
                        };
                        readonly isFallback: {
                            readonly type: "boolean";
                            readonly description: "If true, response has fallen-back to generic results, and is not scoped using relativeToDid";
                            readonly default: false;
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
//# sourceMappingURL=getSuggestedFollowsByActor.d.ts.map