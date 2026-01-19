declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getEvent";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about a moderation event.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["id"];
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.moderation.defs#modEventViewDetail";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getEvent.d.ts.map