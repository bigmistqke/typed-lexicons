declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.video.getJobStatus";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get status details for a video processing job.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["jobId"];
                readonly properties: {
                    readonly jobId: {
                        readonly type: "string";
                    };
                };
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
//# sourceMappingURL=getJobStatus.d.ts.map