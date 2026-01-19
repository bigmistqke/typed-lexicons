declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getLists";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates the lists created by a specified account (actor).";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "The account (actor) to enumerate lists from.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly purposes: {
                        readonly type: "array";
                        readonly description: "Optional filter by list purpose. If not specified, all supported types are returned.";
                        readonly items: {
                            readonly type: "string";
                            readonly knownValues: readonly ["modlist", "curatelist"];
                        };
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
//# sourceMappingURL=getLists.d.ts.map