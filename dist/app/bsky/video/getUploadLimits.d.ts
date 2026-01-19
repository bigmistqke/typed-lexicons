declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.video.getUploadLimits";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get video upload limits for the authenticated user.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["canUpload"];
                    readonly properties: {
                        readonly canUpload: {
                            readonly type: "boolean";
                        };
                        readonly remainingDailyVideos: {
                            readonly type: "integer";
                        };
                        readonly remainingDailyBytes: {
                            readonly type: "integer";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly error: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getUploadLimits.d.ts.map