declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.searchActorsTypeahead";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly term: {
                        readonly type: "string";
                        readonly description: "DEPRECATED: use 'q' instead.";
                    };
                    readonly q: {
                        readonly type: "string";
                        readonly description: "Search query prefix; not a full query string.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 10;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["actors"];
                    readonly properties: {
                        readonly actors: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileViewBasic";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=searchActorsTypeahead.d.ts.map