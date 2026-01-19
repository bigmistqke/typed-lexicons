declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.verification.listVerifications";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List verifications";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly cursor: {
                        readonly type: "string";
                        readonly description: "Pagination cursor";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly description: "Maximum number of results to return";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly createdAfter: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Filter to verifications created after this timestamp";
                    };
                    readonly createdBefore: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Filter to verifications created before this timestamp";
                    };
                    readonly issuers: {
                        readonly type: "array";
                        readonly maxLength: 100;
                        readonly description: "Filter to verifications from specific issuers";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                    readonly subjects: {
                        readonly type: "array";
                        readonly description: "Filter to specific verified DIDs";
                        readonly maxLength: 100;
                        readonly items: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                    readonly sortDirection: {
                        readonly type: "string";
                        readonly description: "Sort direction for creation date";
                        readonly enum: readonly ["asc", "desc"];
                        readonly default: "desc";
                    };
                    readonly isRevoked: {
                        readonly type: "boolean";
                        readonly description: "Filter to verifications that are revoked or not. By default, includes both.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["verifications"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly verifications: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.verification.defs#verificationView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listVerifications.d.ts.map