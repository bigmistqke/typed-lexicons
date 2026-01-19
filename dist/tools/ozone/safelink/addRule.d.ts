declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.safelink.addRule";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Add a new URL safety rule";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["url", "pattern", "action", "reason"];
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL or domain to apply the rule to";
                        };
                        readonly pattern: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.safelink.defs#patternType";
                        };
                        readonly action: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.safelink.defs#actionType";
                        };
                        readonly reason: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.safelink.defs#reasonType";
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly description: "Optional comment about the decision";
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "Author DID. Only respected when using admin auth";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.safelink.defs#event";
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidUrl";
                readonly description: "The provided URL is invalid";
            }, {
                readonly name: "RuleAlreadyExists";
                readonly description: "A rule for this URL/domain already exists";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=addRule.d.ts.map