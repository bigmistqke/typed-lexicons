declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.list";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record representing a list of accounts (actors). Scope includes both moderation-oriented lists and curration-oriented lists.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["name", "purpose", "createdAt"];
                readonly properties: {
                    readonly purpose: {
                        readonly type: "ref";
                        readonly description: "Defines the purpose of the list (aka, moderation-oriented or curration-oriented)";
                        readonly ref: "app.bsky.graph.defs#listPurpose";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly description: "Display name for list; can not be empty.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly maxGraphemes: 300;
                        readonly maxLength: 3000;
                    };
                    readonly descriptionFacets: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.richtext.facet";
                        };
                    };
                    readonly avatar: {
                        readonly type: "blob";
                        readonly accept: readonly ["image/png", "image/jpeg"];
                        readonly maxSize: 1000000;
                    };
                    readonly labels: {
                        readonly type: "union";
                        readonly refs: readonly ["com.atproto.label.defs#selfLabels"];
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
//# sourceMappingURL=list.d.ts.map