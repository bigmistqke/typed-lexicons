declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.safelink.defs";
    readonly defs: {
        readonly event: {
            readonly type: "object";
            readonly description: "An event for URL safety decisions";
            readonly required: readonly ["id", "eventType", "url", "pattern", "action", "reason", "createdBy", "createdAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "Auto-incrementing row ID";
                };
                readonly eventType: {
                    readonly type: "ref";
                    readonly ref: "#eventType";
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "The URL that this rule applies to";
                };
                readonly pattern: {
                    readonly type: "ref";
                    readonly ref: "#patternType";
                };
                readonly action: {
                    readonly type: "ref";
                    readonly ref: "#actionType";
                };
                readonly reason: {
                    readonly type: "ref";
                    readonly ref: "#reasonType";
                };
                readonly createdBy: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "DID of the user who created this rule";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Optional comment about the decision";
                };
            };
        };
        readonly eventType: {
            readonly type: "string";
            readonly knownValues: readonly ["addRule", "updateRule", "removeRule"];
        };
        readonly patternType: {
            readonly type: "string";
            readonly knownValues: readonly ["domain", "url"];
        };
        readonly actionType: {
            readonly type: "string";
            readonly knownValues: readonly ["block", "warn", "whitelist"];
        };
        readonly reasonType: {
            readonly type: "string";
            readonly knownValues: readonly ["csam", "spam", "phishing", "none"];
        };
        readonly urlRule: {
            readonly type: "object";
            readonly description: "Input for creating a URL safety rule";
            readonly required: readonly ["url", "pattern", "action", "reason", "createdBy", "createdAt", "updatedAt"];
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "The URL or domain to apply the rule to";
                };
                readonly pattern: {
                    readonly type: "ref";
                    readonly ref: "#patternType";
                };
                readonly action: {
                    readonly type: "ref";
                    readonly ref: "#actionType";
                };
                readonly reason: {
                    readonly type: "ref";
                    readonly ref: "#reasonType";
                };
                readonly comment: {
                    readonly type: "string";
                    readonly description: "Optional comment about the decision";
                };
                readonly createdBy: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "DID of the user added the rule.";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp when the rule was created";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp when the rule was last updated";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map