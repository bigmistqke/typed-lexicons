declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.authManageModeration";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Manage Personal Moderation";
            readonly "title:lang": {};
            readonly detail: "Control over blocks, mutes, mod lists, mod services, and preferences.";
            readonly "detail:lang": {};
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "rpc";
                readonly inheritAud: true;
                readonly lxm: readonly ["app.bsky.actor.getPreferences", "app.bsky.actor.putPreferences", "app.bsky.graph.muteActor", "app.bsky.graph.muteActorList", "app.bsky.graph.muteThread", "app.bsky.graph.unmuteActor", "app.bsky.graph.unmuteActorList", "app.bsky.graph.unmuteThread"];
            }, {
                readonly type: "permission";
                readonly resource: "repo";
                readonly action: readonly ["create", "update", "delete"];
                readonly collection: readonly ["app.bsky.graph.block", "app.bsky.graph.listblock"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authManageModeration.d.ts.map