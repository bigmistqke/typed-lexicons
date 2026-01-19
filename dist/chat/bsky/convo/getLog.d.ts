declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.getLog";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly [];
                readonly properties: {
                    readonly cursor: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["logs"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly logs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["chat.bsky.convo.defs#logBeginConvo", "chat.bsky.convo.defs#logAcceptConvo", "chat.bsky.convo.defs#logLeaveConvo", "chat.bsky.convo.defs#logMuteConvo", "chat.bsky.convo.defs#logUnmuteConvo", "chat.bsky.convo.defs#logCreateMessage", "chat.bsky.convo.defs#logDeleteMessage", "chat.bsky.convo.defs#logReadMessage", "chat.bsky.convo.defs#logAddReaction", "chat.bsky.convo.defs#logRemoveReaction"];
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getLog.d.ts.map