declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.moderation.createReport";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["reasonType", "subject"];
                    readonly properties: {
                        readonly reasonType: {
                            readonly type: "ref";
                            readonly description: "Indicates the broad category of violation the report is for.";
                            readonly ref: "com.atproto.moderation.defs#reasonType";
                        };
                        readonly reason: {
                            readonly type: "string";
                            readonly maxGraphemes: 2000;
                            readonly maxLength: 20000;
                            readonly description: "Additional context about the content and violation.";
                        };
                        readonly subject: {
                            readonly type: "union";
                            readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef"];
                        };
                        readonly modTool: {
                            readonly type: "ref";
                            readonly ref: "#modTool";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["id", "reasonType", "subject", "reportedBy", "createdAt"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                        };
                        readonly reasonType: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.moderation.defs#reasonType";
                        };
                        readonly reason: {
                            readonly type: "string";
                            readonly maxGraphemes: 2000;
                            readonly maxLength: 20000;
                        };
                        readonly subject: {
                            readonly type: "union";
                            readonly refs: readonly ["com.atproto.admin.defs#repoRef", "com.atproto.repo.strongRef"];
                        };
                        readonly reportedBy: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "datetime";
                        };
                    };
                };
            };
        };
        readonly modTool: {
            readonly type: "object";
            readonly description: "Moderation tool information for tracing the source of the action";
            readonly required: readonly ["name"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name/identifier of the source (e.g., 'bsky-app/android', 'bsky-web/chrome')";
                };
                readonly meta: {
                    readonly type: "unknown";
                    readonly description: "Additional arbitrary metadata about the source";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=createReport.d.ts.map