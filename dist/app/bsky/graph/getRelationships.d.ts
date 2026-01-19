declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getRelationships";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates public relationships between one account, and a list of other accounts. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "Primary account requesting relationships for.";
                    };
                    readonly others: {
                        readonly type: "array";
                        readonly description: "List of 'other' accounts to be related back to the primary.";
                        readonly maxLength: 30;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["relationships"];
                    readonly properties: {
                        readonly actor: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly relationships: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["app.bsky.graph.defs#relationship", "app.bsky.graph.defs#notFoundActor"];
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "ActorNotFound";
                readonly description: "the primary actor at-identifier could not be resolved";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getRelationships.d.ts.map