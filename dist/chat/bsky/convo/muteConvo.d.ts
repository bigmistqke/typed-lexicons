declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.muteConvo";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["convoId"];
                    readonly properties: {
                        readonly convoId: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["convo"];
                    readonly properties: {
                        readonly convo: {
                            readonly type: "ref";
                            readonly ref: "chat.bsky.convo.defs#convoView";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=muteConvo.d.ts.map