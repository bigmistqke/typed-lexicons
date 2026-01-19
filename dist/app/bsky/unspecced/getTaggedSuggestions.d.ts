declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getTaggedSuggestions";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a list of suggestions (feeds and users) tagged with categories";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {};
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["suggestions"];
                    readonly properties: {
                        readonly suggestions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#suggestion";
                            };
                        };
                    };
                };
            };
        };
        readonly suggestion: {
            readonly type: "object";
            readonly required: readonly ["tag", "subjectType", "subject"];
            readonly properties: {
                readonly tag: {
                    readonly type: "string";
                };
                readonly subjectType: {
                    readonly type: "string";
                    readonly knownValues: readonly ["actor", "feed"];
                };
                readonly subject: {
                    readonly type: "string";
                    readonly format: "uri";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getTaggedSuggestions.d.ts.map