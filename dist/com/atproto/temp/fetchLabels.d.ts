declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.fetchLabels";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "DEPRECATED: use queryLabels or subscribeLabels instead -- Fetch all labels from a labeler created after a certain date.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly since: {
                        readonly type: "integer";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 250;
                        readonly default: 50;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["labels"];
                    readonly properties: {
                        readonly labels: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "com.atproto.label.defs#label";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=fetchLabels.d.ts.map