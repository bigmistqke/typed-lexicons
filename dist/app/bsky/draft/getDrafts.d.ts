declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.draft.getDrafts";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Gets views of user drafts. Requires authentication.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["drafts"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly drafts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.draft.defs#draftView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getDrafts.d.ts.map