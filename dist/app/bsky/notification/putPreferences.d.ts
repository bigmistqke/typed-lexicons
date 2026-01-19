declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.putPreferences";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Set notification-related preferences for an account. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["priority"];
                    readonly properties: {
                        readonly priority: {
                            readonly type: "boolean";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=putPreferences.d.ts.map