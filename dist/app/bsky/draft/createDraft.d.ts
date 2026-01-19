declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.draft.createDraft";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Inserts a draft using private storage (stash). An upper limit of drafts might be enforced. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["draft"];
                    readonly properties: {
                        readonly draft: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.draft.defs#draft";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["id"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The ID of the created draft.";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "DraftLimitReached";
                readonly description: "Trying to insert a new draft when the limit was already reached.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=createDraft.d.ts.map