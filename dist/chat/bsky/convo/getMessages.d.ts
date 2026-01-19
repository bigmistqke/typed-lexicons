declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.getMessages";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["convoId"];
                readonly properties: {
                    readonly convoId: {
                        readonly type: "string";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
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
                    readonly required: readonly ["messages"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly messages: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["chat.bsky.convo.defs#messageView", "chat.bsky.convo.defs#deletedMessageView"];
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getMessages.d.ts.map