declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.status";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "A declaration of a Bluesky account status.";
            readonly key: "literal:self";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["status", "createdAt"];
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly description: "The status for the account.";
                        readonly knownValues: readonly ["app.bsky.actor.status#live"];
                    };
                    readonly embed: {
                        readonly type: "union";
                        readonly description: "An optional embed associated with the status.";
                        readonly refs: readonly ["app.bsky.embed.external"];
                    };
                    readonly durationMinutes: {
                        readonly type: "integer";
                        readonly description: "The duration of the status in minutes. Applications can choose to impose minimum and maximum limits.";
                        readonly minimum: 1;
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
        };
        readonly live: {
            readonly type: "token";
            readonly description: "Advertises an account as currently offering live content.";
        };
    };
};
export default _default;
//# sourceMappingURL=status.d.ts.map