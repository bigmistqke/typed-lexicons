declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.listblock";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record representing a block relationship against an entire an entire list of accounts (actors).";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["subject", "createdAt"];
                readonly properties: {
                    readonly subject: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to the mod list record.";
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
//# sourceMappingURL=listblock.d.ts.map