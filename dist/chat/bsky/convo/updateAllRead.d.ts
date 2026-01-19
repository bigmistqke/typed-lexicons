declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.updateAllRead";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                            readonly knownValues: readonly ["request", "accepted"];
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["updatedCount"];
                    readonly properties: {
                        readonly updatedCount: {
                            readonly description: "The count of updated convos.";
                            readonly type: "integer";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateAllRead.d.ts.map