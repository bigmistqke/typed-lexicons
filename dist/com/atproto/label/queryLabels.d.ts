declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.label.queryLabels";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uriPatterns"];
                readonly properties: {
                    readonly uriPatterns: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "List of AT URI patterns to match (boolean 'OR'). Each may be a prefix (ending with '*'; will match inclusive of the string leading to '*'), or a full URI.";
                    };
                    readonly sources: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly description: "Optional list of label sources (DIDs) to filter on.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 250;
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
                    readonly required: readonly ["labels"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
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
//# sourceMappingURL=queryLabels.d.ts.map