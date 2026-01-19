declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.deleteMessageForSelf";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["convoId", "messageId"];
                    readonly properties: {
                        readonly convoId: {
                            readonly type: "string";
                        };
                        readonly messageId: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "chat.bsky.convo.defs#deletedMessageView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=deleteMessageForSelf.d.ts.map