declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.sendMessage";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["convoId", "message"];
                    readonly properties: {
                        readonly convoId: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "ref";
                            readonly ref: "chat.bsky.convo.defs#messageInput";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "chat.bsky.convo.defs#messageView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=sendMessage.d.ts.map