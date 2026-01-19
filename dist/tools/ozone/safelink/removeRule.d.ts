declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.safelink.removeRule";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Remove an existing URL safety rule";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["url", "pattern"];
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL or domain to remove the rule for";
                        };
                        readonly pattern: {
                            readonly type: "ref";
                            readonly ref: "tools.ozone.safelink.defs#patternType";
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly description: "Optional comment about why the rule is being removed";
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "Optional DID of the user. Only respected when using admin auth.";
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
                readonly name: "RuleNotFound";
                readonly description: "No active rule found for this URL/domain";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=removeRule.d.ts.map