declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getReporterStats";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get reporter stats for a list of users.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["dids"];
                readonly properties: {
                    readonly dids: {
                        readonly type: "array";
                        readonly maxLength: 100;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["stats"];
                    readonly properties: {
                        readonly stats: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.moderation.defs#reporterStats";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getReporterStats.d.ts.map