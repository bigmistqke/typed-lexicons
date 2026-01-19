declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.unmuteThread";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Unmutes the specified thread. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["root"];
                    readonly properties: {
                        readonly root: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=unmuteThread.d.ts.map