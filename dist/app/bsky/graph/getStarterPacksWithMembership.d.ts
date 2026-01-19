declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getStarterPacksWithMembership";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates the starter packs created by the session user, and includes membership information about `actor` in those starter packs. Requires auth.";
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
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["starterPacksWithMembership"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly starterPacksWithMembership: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#starterPackWithMembership";
                            };
                        };
                    };
                };
            };
        };
        readonly starterPackWithMembership: {
            readonly description: "A starter pack and an optional list item indicating membership of a target user to that starter pack.";
            readonly type: "object";
            readonly required: readonly ["starterPack"];
            readonly properties: {
                readonly starterPack: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.graph.defs#starterPackView";
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
//# sourceMappingURL=getStarterPacksWithMembership.d.ts.map