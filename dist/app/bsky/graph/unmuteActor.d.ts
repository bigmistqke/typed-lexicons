declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.unmuteActor";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Unmutes the specified account. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["actor"];
                    readonly properties: {
                        readonly actor: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=unmuteActor.d.ts.map