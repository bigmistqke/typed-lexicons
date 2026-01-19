declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.authFullChatClient";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Full Chat Client (All Conversations)";
            readonly "title:lang": {};
            readonly detail: "Control of all chat conversations and configuration management.";
            readonly "detail:lang": {
                readonly en: "All Chat Conversations";
            };
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "rpc";
                readonly inheritAud: true;
                readonly lxm: readonly ["chat.bsky.actor.deleteAccount", "chat.bsky.convo.acceptConvo", "chat.bsky.convo.addReaction", "chat.bsky.convo.deleteMessageForSelf", "chat.bsky.convo.exportAccountData", "chat.bsky.convo.getConvo", "chat.bsky.convo.getConvoAvailability", "chat.bsky.convo.getConvoForMembers", "chat.bsky.convo.getLog", "chat.bsky.convo.getMessages", "chat.bsky.convo.leaveConvo", "chat.bsky.convo.listConvos", "chat.bsky.convo.muteConvo", "chat.bsky.convo.removeReaction", "chat.bsky.convo.sendMessage", "chat.bsky.convo.sendMessageBatch", "chat.bsky.convo.unmuteConvo", "chat.bsky.convo.updateAllRead", "chat.bsky.convo.updateRead"];
            }, {
                readonly type: "permission";
                readonly resource: "repo";
                readonly action: readonly ["create", "update", "delete"];
                readonly collection: readonly ["chat.bsky.actor.declaration"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authFullChatClient.d.ts.map