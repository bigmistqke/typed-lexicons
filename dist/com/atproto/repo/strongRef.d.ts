declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.strongRef";
    readonly description: "A URI with a content-hash fingerprint.";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=strongRef.d.ts.map