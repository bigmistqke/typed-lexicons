declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.video.uploadVideo";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Upload a video to be processed then stored on the PDS.";
            readonly input: {
                readonly encoding: "video/mp4";
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["jobStatus"];
                    readonly properties: {
                        readonly jobStatus: {
                            readonly type: "ref";
                            readonly ref: "app.bsky.video.defs#jobStatus";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=uploadVideo.d.ts.map