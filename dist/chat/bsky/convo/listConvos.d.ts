declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.listConvos";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly readState: {
                        readonly type: "string";
                        readonly knownValues: readonly ["unread"];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly knownValues: readonly ["request", "accepted"];
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["convos"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly convos: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "chat.bsky.convo.defs#convoView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listConvos.d.ts.map