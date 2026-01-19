declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.addReaction";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Adds an emoji reaction to a message. Requires authentication. It is idempotent, so multiple calls from the same user with the same emoji result in a single reaction.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["convoId", "messageId", "value"];
                    readonly properties: {
                        readonly convoId: {
                            readonly type: "string";
                        };
                        readonly messageId: {
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly minLength: 1;
                            readonly maxLength: 64;
                            readonly minGraphemes: 1;
                            readonly maxGraphemes: 1;
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["message"];
                    readonly properties: {
                        readonly message: {
                            readonly type: "ref";
                            readonly ref: "chat.bsky.convo.defs#messageView";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "ReactionMessageDeleted";
                readonly description: "Indicates that the message has been deleted and reactions can no longer be added/removed.";
            }, {
                readonly name: "ReactionLimitReached";
                readonly description: "Indicates that the message has the maximum number of reactions allowed for a single user, and the requested reaction wasn't yet present. If it was already present, the request will not fail since it is idempotent.";
            }, {
                readonly name: "ReactionInvalidValue";
                readonly description: "Indicates the value for the reaction is not acceptable. In general, this means it is not an emoji.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=addReaction.d.ts.map