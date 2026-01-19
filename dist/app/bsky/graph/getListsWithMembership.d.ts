declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getListsWithMembership";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates the lists created by the session user, and includes membership information about `actor` in those lists. Only supports curation and moderation lists (no reference lists, used in starter packs). Requires auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "The account (actor) to check for membership.";
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
                    readonly required: readonly ["listsWithMembership"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly listsWithMembership: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#listWithMembership";
                            };
                        };
                    };
                };
            };
        };
        readonly listWithMembership: {
            readonly description: "A list and an optional list item indicating membership of a target user to that list.";
            readonly type: "object";
            readonly required: readonly ["list"];
            readonly properties: {
                readonly list: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.graph.defs#listView";
                };
                readonly listItem: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.graph.defs#listItemView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getListsWithMembership.d.ts.map