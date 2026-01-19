declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getFeedGenerators";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get information about a list of feed generators.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["feeds"];
                readonly properties: {
                    readonly feeds: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["feeds"];
                    readonly properties: {
                        readonly feeds: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.feed.defs#generatorView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getFeedGenerators.d.ts.map