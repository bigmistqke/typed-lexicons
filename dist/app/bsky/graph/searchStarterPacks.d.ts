declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.searchStarterPacks";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Find starter packs matching search criteria. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["q"];
                readonly properties: {
                    readonly q: {
                        readonly type: "string";
                        readonly description: "Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 25;
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
                    readonly required: readonly ["starterPacks"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly starterPacks: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.graph.defs#starterPackViewBasic";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=searchStarterPacks.d.ts.map