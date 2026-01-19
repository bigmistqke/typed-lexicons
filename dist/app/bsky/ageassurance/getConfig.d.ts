declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.ageassurance.getConfig";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns Age Assurance configuration for use on the client.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#config";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getConfig.d.ts.map