declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.acceptConvo";
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
                    readonly properties: {
                        readonly rev: {
                            readonly description: "Rev when the convo was accepted. If not present, the convo was already accepted.";
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=acceptConvo.d.ts.map