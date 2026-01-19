declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.listitem";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record representing an account's inclusion on a specific list. The AppView will ignore duplicate listitem records.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["subject", "list", "createdAt"];
                readonly properties: {
                    readonly subject: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The account which is included on the list.";
                    };
                    readonly list: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to the list record (app.bsky.graph.list).";
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
//# sourceMappingURL=listitem.d.ts.map