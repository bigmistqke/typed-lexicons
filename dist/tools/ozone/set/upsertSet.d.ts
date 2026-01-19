declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.set.upsertSet";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create or update set metadata";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.set.defs#set";
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.set.defs#setView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=upsertSet.d.ts.map