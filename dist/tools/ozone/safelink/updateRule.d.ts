declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.safelink.updateRule";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Update an existing URL safety rule";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["url", "pattern", "action", "reason"];
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL or domain to update the rule for";
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
                            readonly description: "Optional comment about the update";
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "Optional DID to credit as the creator. Only respected for admin_token authentication.";
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
//# sourceMappingURL=updateRule.d.ts.map