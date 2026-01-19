declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getRecords";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about some records.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uris"];
                readonly properties: {
                    readonly uris: {
                        readonly type: "array";
                        readonly maxLength: 100;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["records"];
                    readonly properties: {
                        readonly records: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["tools.ozone.moderation.defs#recordViewDetail", "tools.ozone.moderation.defs#recordViewNotFound"];
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getRecords.d.ts.map