declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.muteActor";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Creates a mute relationship for the specified account. Mutes are private in Bluesky. Requires auth.";
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
//# sourceMappingURL=muteActor.d.ts.map