declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.uploadBlob";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.";
            readonly input: {
                readonly encoding: "*/*";
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["blob"];
                    readonly properties: {
                        readonly blob: {
                            readonly type: "blob";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=uploadBlob.d.ts.map