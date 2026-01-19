declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getOnboardingSuggestedStarterPacks";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of suggested starterpacks for onboarding";
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
                    readonly required: readonly ["starterPacks"];
                    readonly properties: {
                        readonly starterPacks: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.graph.defs#starterPackView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getOnboardingSuggestedStarterPacks.d.ts.map