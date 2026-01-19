declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.sendInteractions";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Send information about interactions with feed items back to the feed generator that served them.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["interactions"];
                    readonly properties: {
                        readonly interactions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.feed.defs#interaction";
                            };
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=sendInteractions.d.ts.map