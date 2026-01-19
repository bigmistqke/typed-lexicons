declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getFeedSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["feed"];
                readonly properties: {
                    readonly feed: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference to feed generator record describing the specific feed being requested.";
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
                                readonly ref: "app.bsky.feed.defs#skeletonFeedPost";
                            };
                        };
                        readonly reqId: {
                            readonly type: "string";
                            readonly description: "Unique identifier per request that may be passed back alongside interactions.";
                            readonly maxLength: 100;
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "UnknownFeed";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getFeedSkeleton.d.ts.map