declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.actor.declaration";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "A declaration of a Bluesky chat account.";
            readonly key: "literal:self";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["allowIncoming"];
                readonly properties: {
                    readonly allowIncoming: {
                        readonly type: "string";
                        readonly knownValues: readonly ["all", "none", "following"];
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=declaration.d.ts.map