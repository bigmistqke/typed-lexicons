declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.postgate";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly key: "tid";
            readonly description: "Record defining interaction rules for a post. The record key (rkey) of the postgate record must match the record key of the post, and that record must be in the same repository.";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["post", "createdAt"];
                readonly properties: {
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                    readonly post: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to the post record.";
                    };
                    readonly detachedEmbeddingUris: {
                        readonly type: "array";
                        readonly maxLength: 50;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly description: "List of AT-URIs embedding this post that the author has detached from.";
                    };
                    readonly embeddingRules: {
                        readonly description: "List of rules defining who can embed this post. If value is an empty array or is undefined, no particular rules apply and anyone can embed.";
                        readonly type: "array";
                        readonly maxLength: 5;
                        readonly items: {
                            readonly type: "union";
                            readonly refs: readonly ["#disableRule"];
                        };
                    };
                };
            };
        };
        readonly disableRule: {
            readonly type: "object";
            readonly description: "Disables embedding of this post.";
            readonly properties: {};
        };
    };
};
export default _default;
//# sourceMappingURL=postgate.d.ts.map