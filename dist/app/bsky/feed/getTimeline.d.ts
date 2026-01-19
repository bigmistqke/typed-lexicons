declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getTimeline";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly algorithm: {
                        readonly type: "string";
                        readonly description: "Variant 'algorithm' for timeline. Implementation-specific. NOTE: most feed flexibility has been moved to feed generator mechanism.";
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
                    readonly required: readonly ["feed"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly feed: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.feed.defs#feedViewPost";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getTimeline.d.ts.map