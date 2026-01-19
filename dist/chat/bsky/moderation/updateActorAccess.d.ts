declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.moderation.updateActorAccess";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["actor", "allowAccess"];
                    readonly properties: {
                        readonly actor: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly allowAccess: {
                            readonly type: "boolean";
                        };
                        readonly ref: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateActorAccess.d.ts.map