declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.richtext.facet";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly description: "Annotation of a sub-string within rich text.";
            readonly required: readonly ["index", "features"];
            readonly properties: {
                readonly index: {
                    readonly type: "ref";
                    readonly ref: "#byteSlice";
                };
                readonly features: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["#mention", "#link", "#tag"];
                    };
                };
            };
        };
        readonly mention: {
            readonly type: "object";
            readonly description: "Facet feature for mention of another account. The text is usually a handle, including a '@' prefix, but the facet reference is a DID.";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly link: {
            readonly type: "object";
            readonly description: "Facet feature for a URL. The text URL may have been simplified or truncated, but the facet reference should be a complete URL.";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "uri";
                };
            };
        };
        readonly tag: {
            readonly type: "object";
            readonly description: "Facet feature for a hashtag. The text usually includes a '#' prefix, but the facet reference should not (except in the case of 'double hash tags').";
            readonly required: readonly ["tag"];
            readonly properties: {
                readonly tag: {
                    readonly type: "string";
                    readonly maxLength: 640;
                    readonly maxGraphemes: 64;
                };
            };
        };
        readonly byteSlice: {
            readonly type: "object";
            readonly description: "Specifies the sub-string range a facet feature applies to. Start index is inclusive, end index is exclusive. Indices are zero-indexed, counting bytes of the UTF-8 encoded text. NOTE: some languages, like Javascript, use UTF-16 or Unicode codepoints for string slice indexing; in these languages, convert to byte arrays before working with facets.";
            readonly required: readonly ["byteStart", "byteEnd"];
            readonly properties: {
                readonly byteStart: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly byteEnd: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=facet.d.ts.map