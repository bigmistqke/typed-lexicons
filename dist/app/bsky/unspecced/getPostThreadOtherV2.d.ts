declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getPostThreadOtherV2";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "(NOTE: this endpoint is under development and WILL change without notice. Don't use it until it is moved out of `unspecced` or your application WILL break) Get additional posts under a thread e.g. replies hidden by threadgate. Based on an anchor post at any depth of the tree, returns top-level replies below that anchor. It does not include ancestors nor the anchor itself. This should be called after exhausting `app.bsky.unspecced.getPostThreadV2`. Does not require auth, but additional metadata and filtering will be applied for authed requests.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["anchor"];
                readonly properties: {
                    readonly anchor: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to post record. This is the anchor post.";
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
                            readonly type: "array";
                            readonly description: "A flat list of other thread items. The depth of each item is indicated by the depth property inside the item.";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#threadItem";
                            };
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
                    readonly refs: readonly ["app.bsky.unspecced.defs#threadItemPost"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getPostThreadOtherV2.d.ts.map