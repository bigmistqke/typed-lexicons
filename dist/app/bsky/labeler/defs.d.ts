declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.labeler.defs";
    readonly defs: {
        readonly labelerView: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "creator", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly creator: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
                readonly likeCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "#labelerViewerState";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
            };
        };
        readonly labelerViewDetailed: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "creator", "policies", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly creator: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
                readonly policies: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.labeler.defs#labelerPolicies";
                };
                readonly likeCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "#labelerViewerState";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
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
        readonly labelerViewerState: {
            readonly type: "object";
            readonly properties: {
                readonly like: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly labelerPolicies: {
            readonly type: "object";
            readonly required: readonly ["labelValues"];
            readonly properties: {
                readonly labelValues: {
                    readonly type: "array";
                    readonly description: "The label values which this labeler publishes. May include global or custom labels.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#labelValue";
                    };
                };
                readonly labelValueDefinitions: {
                    readonly type: "array";
                    readonly description: "Label values created by this labeler and scoped exclusively to it. Labels defined here will override global label definitions for this labeler.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#labelValueDefinition";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map