declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getListMutes";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.";
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
//# sourceMappingURL=getListMutes.d.ts.map