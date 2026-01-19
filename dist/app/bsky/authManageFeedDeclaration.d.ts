declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.authManageFeedDeclarations";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Manage Hosted Feeds";
            readonly "title:lang": {};
            readonly detail: "Configure feed generator declaration records.";
            readonly "detail:lang": {};
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "repo";
                readonly action: readonly ["create", "update", "delete"];
                readonly collection: readonly ["app.bsky.feed.generator"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authManageFeedDeclaration.d.ts.map