declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.updateSeen";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Notify server that the requesting account has seen notifications. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["seenAt"];
                    readonly properties: {
                        readonly seenAt: {
                            readonly type: "string";
                            readonly format: "datetime";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateSeen.d.ts.map