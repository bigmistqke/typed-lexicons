declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.bookmark.deleteBookmark";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Deletes a private bookmark for the specified record. Currently, only `app.bsky.feed.post` records are supported. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
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
            readonly errors: readonly [{
                readonly name: "UnsupportedCollection";
                readonly description: "The URI to be bookmarked is for an unsupported collection.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=deleteBookmark.d.ts.map