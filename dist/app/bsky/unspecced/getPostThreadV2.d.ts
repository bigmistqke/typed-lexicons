declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getPostThreadV2";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "(NOTE: this endpoint is under development and WILL change without notice. Don't use it until it is moved out of `unspecced` or your application WILL break) Get posts in a thread. It is based in an anchor post at any depth of the tree, and returns posts above it (recursively resolving the parent, without further branching to their replies) and below it (recursive replies, with branching to their replies). Does not require auth, but additional metadata and filtering will be applied for authed requests.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["anchor"];
                readonly properties: {
                    readonly anchor: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to post record. This is the anchor post, and the thread will be built around it. It can be any post in the tree, not necessarily a root post.";
                    };
                    readonly above: {
                        readonly type: "boolean";
                        readonly description: "Whether to include parents above the anchor.";
                        readonly default: true;
                    };
                    readonly below: {
                        readonly type: "integer";
                        readonly description: "How many levels of replies to include below the anchor.";
                        readonly default: 6;
                        readonly minimum: 0;
                        readonly maximum: 20;
                    };
                    readonly branchingFactor: {
                        readonly type: "integer";
                        readonly description: "Maximum of replies to include at each level of the thread, except for the direct replies to the anchor, which are (NOTE: currently, during unspecced phase) all returned (NOTE: later they might be paginated).";
                        readonly default: 10;
                        readonly minimum: 0;
                        readonly maximum: 100;
                    };
                    readonly sort: {
                        readonly type: "string";
                        readonly description: "Sorting for the thread replies.";
                        readonly knownValues: readonly ["newest", "oldest", "top"];
                        readonly default: "oldest";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["thread", "hasOtherReplies"];
                    readonly properties: {
                        readonly thread: {
                            readonly type: "array";
                            readonly description: "A flat list of thread items. The depth of each item is indicated by the depth property inside the item.";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#threadItem";
                            };
                        };
                        readonly threadgate: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.feed.defs#threadgateView";
                        };
                        readonly hasOtherReplies: {
                            readonly type: "boolean";
                            readonly description: "Whether this thread has additional replies. If true, a call can be made to the `getPostThreadOtherV2` endpoint to retrieve them.";
                        };
                    };
                };
            };
        };
        readonly threadItem: {
            readonly type: "object";
            readonly required: readonly ["uri", "depth", "value"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly depth: {
                    readonly type: "integer";
                    readonly description: "The nesting level of this item in the thread. Depth 0 means the anchor item. Items above have negative depths, items below have positive depths.";
                };
                readonly value: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.unspecced.defs#threadItemPost", "app.bsky.unspecced.defs#threadItemNoUnauthenticated", "app.bsky.unspecced.defs#threadItemNotFound", "app.bsky.unspecced.defs#threadItemBlocked"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getPostThreadV2.d.ts.map