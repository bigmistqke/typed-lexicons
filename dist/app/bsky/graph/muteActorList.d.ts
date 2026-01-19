declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.muteActorList";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.";
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
//# sourceMappingURL=muteActorList.d.ts.map