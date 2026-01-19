declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.generator";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record declaring of the existence of a feed generator, and containing metadata about it. The record can exist in any repository.";
            readonly key: "any";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["did", "displayName", "createdAt"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly displayName: {
                        readonly type: "string";
                        readonly maxGraphemes: 24;
                        readonly maxLength: 240;
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
                    readonly acceptsInteractions: {
                        readonly type: "boolean";
                        readonly description: "Declaration that a feed accepts feedback interactions from a client through app.bsky.feed.sendInteractions";
                    };
                    readonly labels: {
                        readonly type: "union";
                        readonly description: "Self-label values";
                        readonly refs: readonly ["com.atproto.label.defs#selfLabels"];
                    };
                    readonly contentMode: {
                        readonly type: "string";
                        readonly knownValues: readonly ["app.bsky.feed.defs#contentModeUnspecified", "app.bsky.feed.defs#contentModeVideo"];
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
//# sourceMappingURL=generator.d.ts.map