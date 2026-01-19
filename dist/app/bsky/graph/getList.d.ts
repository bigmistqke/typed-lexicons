declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getList";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Gets a 'view' (with additional context) of a specified list.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["list"];
                readonly properties: {
                    readonly list: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) of the list record to hydrate.";
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
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["list", "items"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly list: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.graph.defs#listView";
                        };
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.graph.defs#listItemView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getList.d.ts.map