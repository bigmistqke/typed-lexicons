declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.authCreatePosts";
    readonly defs: {
        readonly main: {
            readonly type: "permission-set";
            readonly title: "Create Bluesky Posts";
            readonly "title:lang": {};
            readonly detail: "Can not update or delete posts.";
            readonly "detail:lang": {};
            readonly permissions: readonly [{
                readonly type: "permission";
                readonly resource: "rpc";
                readonly inheritAud: true;
                readonly lxm: readonly ["app.bsky.video.uploadVideo", "app.bsky.video.getJobStatus", "app.bsky.video.getUploadLimits"];
            }, {
                readonly type: "permission";
                readonly resource: "repo";
                readonly action: readonly ["create"];
                readonly collection: readonly ["app.bsky.feed.post", "app.bsky.feed.postgate", "app.bsky.feed.threadgate"];
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=authCreatePosts.d.ts.map