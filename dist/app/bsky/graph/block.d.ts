declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.block";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record declaring a 'block' relationship against another account. NOTE: blocks are public in Bluesky; see blog posts for details.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["subject", "createdAt"];
                readonly properties: {
                    readonly subject: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account to be blocked.";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=block.d.ts.map