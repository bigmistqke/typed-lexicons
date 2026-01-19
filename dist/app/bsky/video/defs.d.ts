declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.video.defs";
    readonly defs: {
        readonly jobStatus: {
            readonly type: "object";
            readonly required: readonly ["jobId", "did", "state"];
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly state: {
                    readonly type: "string";
                    readonly description: "The state of the video processing job. All values not listed as a known value indicate that the job is in process.";
                    readonly knownValues: readonly ["JOB_STATE_COMPLETED", "JOB_STATE_FAILED"];
                };
                readonly progress: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                    readonly description: "Progress within the current processing state.";
                };
                readonly blob: {
                    readonly type: "blob";
                };
                readonly error: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map