declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.authManageProfile";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Manage Bluesky Profile";
            readonly "title:lang": {};
            readonly detail: "Update profile data, as well as status and public chat visibility.";
            readonly "detail:lang": {};
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "repo";
                readonly action: readonly ["create", "update", "delete"];
                readonly collection: readonly ["app.bsky.actor.profile", "app.bsky.actor.status", "app.bsky.notification.declaration"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authManageProfile.d.ts.map