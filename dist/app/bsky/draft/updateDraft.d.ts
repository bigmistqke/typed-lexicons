declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.draft.updateDraft";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Updates a draft using private storage (stash). If the draft ID points to a non-existing ID, the update will be silently ignored. This is done because updates don't enforce draft limit, so it accepts all writes, but will ignore invalid ones. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["draft"];
                    readonly properties: {
                        readonly draft: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.draft.defs#draftWithId";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateDraft.d.ts.map