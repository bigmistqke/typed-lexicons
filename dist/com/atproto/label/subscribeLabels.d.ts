declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.label.subscribeLabels";
    readonly defs: {
        readonly main: {
            readonly type: "subscription";
            readonly description: "Subscribe to stream of labels (and negations). Public endpoint implemented by mod services. Uses same sequencing scheme as repo event stream.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly cursor: {
                        readonly type: "integer";
                        readonly description: "The last known event seq number to backfill from.";
                    };
                };
            };
            readonly message: {
                readonly schema: {
                    readonly type: "union";
                    readonly refs: readonly ["#labels", "#info"];
                };
            };
            readonly errors: readonly [{
                readonly name: "FutureCursor";
            }];
        };
        readonly labels: {
            readonly type: "object";
            readonly required: readonly ["seq", "labels"];
            readonly properties: {
                readonly seq: {
                    readonly type: "integer";
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
        readonly info: {
            readonly type: "object";
            readonly required: readonly ["name"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly knownValues: readonly ["OutdatedCursor"];
                };
                readonly message: {
                    readonly type: "string";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=subscribeLabels.d.ts.map