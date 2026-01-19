declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.authManageLabelerService";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Manage Hosted Labeling Service";
            readonly "title:lang": {};
            readonly detail: "Configure labeler declaration records.";
            readonly "detail:lang": {};
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "repo";
                readonly action: readonly ["create", "update", "delete"];
                readonly collection: readonly ["app.bsky.labeler.service"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authManageLabelerService.d.ts.map