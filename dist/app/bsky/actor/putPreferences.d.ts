declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.putPreferences";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Set the private preferences attached to the account.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["preferences"];
                    readonly properties: {
                        readonly preferences: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.actor.defs#preferences";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=putPreferences.d.ts.map