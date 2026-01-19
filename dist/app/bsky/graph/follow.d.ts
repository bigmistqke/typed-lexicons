declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.follow";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record declaring a social 'follow' relationship of another account. Duplicate follows will be ignored by the AppView.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["subject", "createdAt"];
                readonly properties: {
                    readonly subject: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                    readonly via: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.repo.strongRef";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=follow.d.ts.map