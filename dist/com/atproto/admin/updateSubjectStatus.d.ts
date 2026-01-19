declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.updateSubjectStatus";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Update the service-specific admin status of a subject (account, record, or blob).";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subject"];
                    readonly properties: {
                        readonly subject: {
                            readonly type: "union";
                            readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef", "com.atproto.admin.defs#repoBlobRef"];
                        };
                        readonly takedown: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.admin.defs#statusAttr";
                        };
                        readonly deactivated: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.admin.defs#statusAttr";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subject"];
                    readonly properties: {
                        readonly subject: {
                            readonly type: "union";
                            readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef", "com.atproto.admin.defs#repoBlobRef"];
                        };
                        readonly takedown: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.admin.defs#statusAttr";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=updateSubjectStatus.d.ts.map