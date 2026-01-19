declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.muteThread";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.";
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
//# sourceMappingURL=muteThread.d.ts.map