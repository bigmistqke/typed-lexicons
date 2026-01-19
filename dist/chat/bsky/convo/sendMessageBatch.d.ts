declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.sendMessageBatch";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["items"];
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly maxLength: 100;
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#batchItem";
                            };
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["items"];
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "chat.bsky.convo.defs#messageView";
                            };
                        };
                    };
                };
            };
        };
        readonly batchItem: {
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
};
export default _default;
//# sourceMappingURL=sendMessageBatch.d.ts.map