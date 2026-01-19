declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getRecord";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about a record.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uri"];
                readonly properties: {
                    readonly uri: {
                        readonly type: "string";
                        readonly format: "at-uri";
                    };
                    readonly cid: {
                        readonly type: "string";
                        readonly format: "cid";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.moderation.defs#recordViewDetail";
                };
            };
            readonly errors: readonly [{
                readonly name: "RecordNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getRecord.d.ts.map