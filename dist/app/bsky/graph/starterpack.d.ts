declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.starterpack";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record defining a starter pack of actors and feeds for new users.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["name", "list", "createdAt"];
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly maxGraphemes: 50;
                        readonly maxLength: 500;
                        readonly minLength: 1;
                        readonly description: "Display name for starter pack; can not be empty.";
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
                    readonly list: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "Reference (AT-URI) to the list record.";
                    };
                    readonly feeds: {
                        readonly type: "array";
                        readonly maxLength: 3;
                        readonly items: {
                            readonly type: "ref";
                            readonly ref: "#feedItem";
                        };
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
        };
        readonly feedItem: {
            readonly type: "object";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=starterpack.d.ts.map