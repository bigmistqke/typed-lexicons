declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.defs";
    readonly defs: {
        readonly commitMeta: {
            readonly type: "object";
            readonly required: readonly ["cid", "rev"];
            readonly properties: {
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly rev: {
                    readonly type: "string";
                    readonly format: "tid";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map