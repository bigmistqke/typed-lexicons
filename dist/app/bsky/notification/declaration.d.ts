declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.declaration";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "A declaration of the user's choices related to notifications that can be produced by them.";
            readonly key: "literal:self";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["allowSubscriptions"];
                readonly properties: {
                    readonly allowSubscriptions: {
                        readonly type: "string";
                        readonly description: "A declaration of the user's preference for allowing activity subscriptions from other users. Absence of a record implies 'followers'.";
                        readonly knownValues: readonly ["followers", "mutuals", "none"];
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=declaration.d.ts.map