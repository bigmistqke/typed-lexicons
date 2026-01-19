declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getStarterPack";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Gets a view of a starter pack.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["starterPack"];
                readonly properties: {
                    readonly starterPack: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) of the starter pack record.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["starterPack"];
                    readonly properties: {
                        readonly starterPack: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.graph.defs#starterPackView";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getStarterPack.d.ts.map