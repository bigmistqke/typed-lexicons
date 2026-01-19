declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.authManageNotifications";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Manage Bluesky Notifications";
            readonly "title:lang": {};
            readonly detail: "View and configure notifications for the Bluesky app.";
            readonly "detail:lang": {};
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "rpc";
                readonly inheritAud: true;
                readonly lxm: readonly ["app.bsky.notification.getPreferences", "app.bsky.notification.getUnreadCount", "app.bsky.notification.listActivitySubscriptions", "app.bsky.notification.listNotifications", "app.bsky.notification.putActivitySubscription", "app.bsky.notification.putPreferences", "app.bsky.notification.putPreferencesV2", "app.bsky.notification.registerPush", "app.bsky.notification.unregisterPush", "app.bsky.notification.updateSeen"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authManageNotifications.d.ts.map