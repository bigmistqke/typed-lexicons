declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.unmuteActorList";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Unmutes the specified list of accounts. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["list"];
                    readonly properties: {
                        readonly list: {
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
//# sourceMappingURL=unmuteActorList.d.ts.map