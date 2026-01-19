declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getListBlocks";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get mod lists that the requesting account (actor) is blocking. Requires auth.";
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
                    readonly required: readonly ["lists"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly lists: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.graph.defs#listView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getListBlocks.d.ts.map