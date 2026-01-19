declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.getUnreadCount";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Count the number of unread notifications for the requesting account. Requires auth.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly priority: {
                        readonly type: "boolean";
                    };
                    readonly seenAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["count"];
                    readonly properties: {
                        readonly count: {
                            readonly type: "integer";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getUnreadCount.d.ts.map