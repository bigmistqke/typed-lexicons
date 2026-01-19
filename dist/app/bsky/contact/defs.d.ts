declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.defs";
    readonly defs: {
        readonly matchAndContactIndex: {
            readonly description: "Associates a profile with the positional index of the contact import input in the call to `app.bsky.contact.importContacts`, so clients can know which phone caused a particular match.";
            readonly type: "object";
            readonly required: readonly ["match", "contactIndex"];
            readonly properties: {
                readonly match: {
                    readonly description: "Profile of the matched user.";
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
                readonly contactIndex: {
                    readonly description: "The index of this match in the import contact input.";
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 999;
                };
            };
        };
        readonly syncStatus: {
            readonly type: "object";
            readonly required: readonly ["syncedAt", "matchesCount"];
            readonly properties: {
                readonly syncedAt: {
                    readonly description: "Last date when contacts where imported.";
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly matchesCount: {
                    readonly description: "Number of existing contact matches resulting of the user imports and of their imported contacts having imported the user. Matches stop being counted when the user either follows the matched contact or dismisses the match.";
                    readonly type: "integer";
                    readonly minimum: 0;
                };
            };
        };
        readonly notification: {
            readonly description: "A stash object to be sent via bsync representing a notification to be created.";
            readonly type: "object";
            readonly required: readonly ["from", "to"];
            readonly properties: {
                readonly from: {
                    readonly description: "The DID of who this notification comes from.";
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly to: {
                    readonly description: "The DID of who this notification should go to.";
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map