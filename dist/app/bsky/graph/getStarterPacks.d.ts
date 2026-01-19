declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getStarterPacks";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get views for a list of starter packs.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uris"];
                readonly properties: {
                    readonly uris: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly maxLength: 25;
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
//# sourceMappingURL=getStarterPacks.d.ts.map