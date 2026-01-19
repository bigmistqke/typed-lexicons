declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.leaveConvo";
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
                    readonly required: readonly ["convoId", "rev"];
                    readonly properties: {
                        readonly convoId: {
                            readonly type: "string";
                        };
                        readonly rev: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=leaveConvo.d.ts.map