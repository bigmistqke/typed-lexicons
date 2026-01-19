declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.getPreferences";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {};
            };
            readonly output: {
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
//# sourceMappingURL=getPreferences.d.ts.map