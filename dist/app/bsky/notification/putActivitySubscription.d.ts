declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.putActivitySubscription";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Puts an activity subscription entry. The key should be omitted for creation and provided for updates. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subject", "activitySubscription"];
                    readonly properties: {
                        readonly subject: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly activitySubscription: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#activitySubscription";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subject"];
                    readonly properties: {
                        readonly subject: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly activitySubscription: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.notification.defs#activitySubscription";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=putActivitySubscription.d.ts.map