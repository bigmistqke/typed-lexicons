declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.getPreferences";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get notification-related preferences for an account. Requires auth.";
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
                            readonly ref: "app.bsky.notification.defs#preferences";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getPreferences.d.ts.map