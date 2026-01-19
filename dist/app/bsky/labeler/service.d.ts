declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.labeler.service";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "A declaration of the existence of labeler service.";
            readonly key: "literal:self";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["policies", "createdAt"];
                readonly properties: {
                    readonly policies: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.labeler.defs#labelerPolicies";
                    };
                    readonly labels: {
                        readonly type: "union";
                        readonly refs: readonly ["com.atproto.label.defs#selfLabels"];
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                    readonly reasonTypes: {
                        readonly description: "The set of report reason 'codes' which are in-scope for this service to review and action. These usually align to policy categories. If not defined (distinct from empty array), all reason types are allowed.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.moderation.defs#reasonType";
                        };
                    };
                    readonly subjectTypes: {
                        readonly description: "The set of subject types (account, record, etc) this service accepts reports on.";
                        readonly type: "array";
                        readonly items: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.moderation.defs#subjectType";
                        };
                    };
                    readonly subjectCollections: {
                        readonly type: "array";
                        readonly description: "Set of record types (collection NSIDs) which can be reported to this service. If not defined (distinct from empty array), default is any record type.";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "nsid";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=service.d.ts.map