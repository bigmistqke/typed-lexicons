declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.getConvoForMembers";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["members"];
                readonly properties: {
                    readonly members: {
                        readonly type: "array";
                        readonly minLength: 1;
                        readonly maxLength: 10;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
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
//# sourceMappingURL=getConvoForMembers.d.ts.map