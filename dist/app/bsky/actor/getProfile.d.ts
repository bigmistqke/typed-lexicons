declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.getProfile";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actor"];
                readonly properties: {
                    readonly actor: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "Handle or DID of account to fetch profile of.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewDetailed";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getProfile.d.ts.map