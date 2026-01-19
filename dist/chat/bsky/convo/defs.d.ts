declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.convo.defs";
    readonly defs: {
        readonly messageRef: {
            readonly type: "object";
            readonly required: readonly ["did", "messageId", "convoId"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly convoId: {
                    readonly type: "string";
                };
                readonly messageId: {
                    readonly type: "string";
                };
            };
        };
        readonly messageInput: {
            readonly type: "object";
            readonly required: readonly ["text"];
            readonly properties: {
                readonly text: {
                    readonly type: "string";
                    readonly maxLength: 10000;
                    readonly maxGraphemes: 1000;
                };
                readonly facets: {
                    readonly type: "array";
                    readonly description: "Annotations of text (mentions, URLs, hashtags, etc)";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.richtext.facet";
                    };
                };
                readonly embed: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.embed.record"];
                };
            };
        };
        readonly messageView: {
            readonly type: "object";
            readonly required: readonly ["id", "rev", "text", "sender", "sentAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly rev: {
                    readonly type: "string";
                };
                readonly text: {
                    readonly type: "string";
                    readonly maxLength: 10000;
                    readonly maxGraphemes: 1000;
                };
                readonly facets: {
                    readonly type: "array";
                    readonly description: "Annotations of text (mentions, URLs, hashtags, etc)";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.richtext.facet";
                    };
                };
                readonly embed: {
                    readonly type: "union";
                    readonly refs: readonly ["app.bsky.embed.record#view"];
                };
                readonly reactions: {
                    readonly type: "array";
                    readonly description: "Reactions to this message, in ascending order of creation time.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#reactionView";
                    };
                };
                readonly sender: {
                    readonly type: "ref";
                    readonly ref: "#messageViewSender";
                };
                readonly sentAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly deletedMessageView: {
            readonly type: "object";
            readonly required: readonly ["id", "rev", "sender", "sentAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly rev: {
                    readonly type: "string";
                };
                readonly sender: {
                    readonly type: "ref";
                    readonly ref: "#messageViewSender";
                };
                readonly sentAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly messageViewSender: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly reactionView: {
            readonly type: "object";
            readonly required: readonly ["value", "sender", "createdAt"];
            readonly properties: {
                readonly value: {
                    readonly type: "string";
                };
                readonly sender: {
                    readonly type: "ref";
                    readonly ref: "#reactionViewSender";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly reactionViewSender: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly messageAndReactionView: {
            readonly type: "object";
            readonly required: readonly ["message", "reaction"];
            readonly properties: {
                readonly message: {
                    readonly type: "ref";
                    readonly ref: "#messageView";
                };
                readonly reaction: {
                    readonly type: "ref";
                    readonly ref: "#reactionView";
                };
            };
        };
        readonly convoView: {
            readonly type: "object";
            readonly required: readonly ["id", "rev", "members", "muted", "unreadCount"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly rev: {
                    readonly type: "string";
                };
                readonly members: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "chat.bsky.actor.defs#profileViewBasic";
                    };
                };
                readonly lastMessage: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageView", "#deletedMessageView"];
                };
                readonly lastReaction: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageAndReactionView"];
                };
                readonly muted: {
                    readonly type: "boolean";
                };
                readonly status: {
                    readonly type: "string";
                    readonly knownValues: readonly ["request", "accepted"];
                };
                readonly unreadCount: {
                    readonly type: "integer";
                };
            };
        };
        readonly logBeginConvo: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
            };
        };
        readonly logAcceptConvo: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
            };
        };
        readonly logLeaveConvo: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
            };
        };
        readonly logMuteConvo: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
            };
        };
        readonly logUnmuteConvo: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
            };
        };
        readonly logCreateMessage: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId", "message"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageView", "#deletedMessageView"];
                };
            };
        };
        readonly logDeleteMessage: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId", "message"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageView", "#deletedMessageView"];
                };
            };
        };
        readonly logReadMessage: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId", "message"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageView", "#deletedMessageView"];
                };
            };
        };
        readonly logAddReaction: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId", "message", "reaction"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageView", "#deletedMessageView"];
                };
                readonly reaction: {
                    readonly type: "ref";
                    readonly ref: "#reactionView";
                };
            };
        };
        readonly logRemoveReaction: {
            readonly type: "object";
            readonly required: readonly ["rev", "convoId", "message", "reaction"];
            readonly properties: {
                readonly rev: {
                    readonly type: "string";
                };
                readonly convoId: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "union";
                    readonly refs: readonly ["#messageView", "#deletedMessageView"];
                };
                readonly reaction: {
                    readonly type: "ref";
                    readonly ref: "#reactionView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map