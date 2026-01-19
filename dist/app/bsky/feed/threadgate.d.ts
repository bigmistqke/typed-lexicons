declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.threadgate";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly key: "tid";
            readonly description: "Record defining interaction gating rules for a thread (aka, reply controls). The record key (rkey) of the threadgate record must match the record key of the thread's root post, and that record must be in the same repository.";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["post", "createdAt"];
                readonly properties: {
                    readonly post: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to the post record.";
                    };
                    readonly allow: {
                        readonly description: "List of rules defining who can reply to this post. If value is an empty array, no one can reply. If value is undefined, anyone can reply.";
                        readonly type: "array";
                        readonly maxLength: 5;
                        readonly items: {
                            readonly type: "union";
                            readonly refs: readonly ["#mentionRule", "#followerRule", "#followingRule", "#listRule"];
                        };
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                    readonly hiddenReplies: {
                        readonly type: "array";
                        readonly maxLength: 300;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly description: "List of hidden reply URIs.";
                    };
                };
            };
        };
        readonly mentionRule: {
            readonly type: "object";
            readonly description: "Allow replies from actors mentioned in your post.";
            readonly properties: {};
        };
        readonly followerRule: {
            readonly type: "object";
            readonly description: "Allow replies from actors who follow you.";
            readonly properties: {};
        };
        readonly followingRule: {
            readonly type: "object";
            readonly description: "Allow replies from actors you follow.";
            readonly properties: {};
        };
        readonly listRule: {
            readonly type: "object";
            readonly description: "Allow replies from actors on a list.";
            readonly required: readonly ["list"];
            readonly properties: {
                readonly list: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=threadgate.d.ts.map