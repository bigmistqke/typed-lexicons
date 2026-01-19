declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.moderation.getActorMetadata";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["day", "month", "all"];
                    readonly properties: {
                        readonly day: {
                            readonly type: "ref";
                            readonly ref: "#metadata";
                        };
                        readonly month: {
                            readonly type: "ref";
                            readonly ref: "#metadata";
                        };
                        readonly all: {
                            readonly type: "ref";
                            readonly ref: "#metadata";
                        };
                    };
                };
            };
        };
        readonly metadata: {
            readonly type: "object";
            readonly required: readonly ["messagesSent", "messagesReceived", "convos", "convosStarted"];
            readonly properties: {
                readonly messagesSent: {
                    readonly type: "integer";
                };
                readonly messagesReceived: {
                    readonly type: "integer";
                };
                readonly convos: {
                    readonly type: "integer";
                };
                readonly convosStarted: {
                    readonly type: "integer";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getActorMetadata.d.ts.map