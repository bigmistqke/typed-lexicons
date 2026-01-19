declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.moderation.getMessageContext";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["messageId"];
                readonly properties: {
                    readonly convoId: {
                        readonly type: "string";
                        readonly description: "Conversation that the message is from. NOTE: this field will eventually be required.";
                    };
                    readonly messageId: {
                        readonly type: "string";
                    };
                    readonly before: {
                        readonly type: "integer";
                        readonly default: 5;
                    };
                    readonly after: {
                        readonly type: "integer";
                        readonly default: 5;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["messages"];
                    readonly properties: {
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
//# sourceMappingURL=getMessageContext.d.ts.map