declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getFeedGenerator";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get information about a feed generator. Implemented by AppView.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["feed"];
                readonly properties: {
                    readonly feed: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "AT-URI of the feed generator record.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["view", "isOnline", "isValid"];
                    readonly properties: {
                        readonly view: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.feed.defs#generatorView";
                        };
                        readonly isOnline: {
                            readonly type: "boolean";
                            readonly description: "Indicates whether the feed generator service has been online recently, or else seems to be inactive.";
                        };
                        readonly isValid: {
                            readonly type: "boolean";
                            readonly description: "Indicates whether the feed generator service is compatible with the record declaration.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getFeedGenerator.d.ts.map