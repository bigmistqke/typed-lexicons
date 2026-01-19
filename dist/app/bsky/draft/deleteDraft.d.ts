declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.draft.deleteDraft";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Deletes a draft by ID. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["id"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly format: "tid";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=deleteDraft.d.ts.map