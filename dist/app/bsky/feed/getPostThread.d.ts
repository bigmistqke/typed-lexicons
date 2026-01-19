declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getPostThread";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uri"];
                readonly properties: {
                    readonly uri: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to post record.";
                    };
                    readonly depth: {
                        readonly type: "integer";
                        readonly description: "How many levels of reply depth should be included in response.";
                        readonly default: 6;
                        readonly minimum: 0;
                        readonly maximum: 1000;
                    };
                    readonly parentHeight: {
                        readonly type: "integer";
                        readonly description: "How many levels of parent (and grandparent, etc) post to include.";
                        readonly default: 80;
                        readonly minimum: 0;
                        readonly maximum: 1000;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["thread"];
                    readonly properties: {
                        readonly thread: {
                            readonly type: "union";
                            readonly refs: readonly ["app.bsky.feed.defs#threadViewPost", "app.bsky.feed.defs#notFoundPost", "app.bsky.feed.defs#blockedPost"];
                        };
                        readonly threadgate: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.feed.defs#threadgateView";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "NotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getPostThread.d.ts.map