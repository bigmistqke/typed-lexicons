declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.getFollows";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates accounts which a specified account (actor) follows.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
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
                    readonly required: readonly ["subject", "follows"];
                    readonly properties: {
                        readonly subject: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.actor.defs#profileView";
                        };
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly follows: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getFollows.d.ts.map