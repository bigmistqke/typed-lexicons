declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.verification.grantVerifications";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Grant verifications to multiple subjects. Allows batch processing of up to 100 verifications at once.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["verifications"];
                    readonly properties: {
                        readonly verifications: {
                            readonly type: "array";
                            readonly description: "Array of verification requests to process";
                            readonly maxLength: 100;
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#verificationInput";
                            };
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["verifications", "failedVerifications"];
                    readonly properties: {
                        readonly verifications: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.verification.defs#verificationView";
                            };
                        };
                        readonly failedVerifications: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#grantError";
                            };
                        };
                    };
                };
            };
        };
        readonly verificationInput: {
            readonly type: "object";
            readonly required: readonly ["subject", "handle", "displayName"];
            readonly properties: {
                readonly subject: {
                    readonly type: "string";
                    readonly description: "The did of the subject being verified";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly description: "Handle of the subject the verification applies to at the moment of verifying.";
                    readonly format: "handle";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "Display name of the subject the verification applies to at the moment of verifying.";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp for verification record. Defaults to current time when not specified.";
                };
            };
        };
        readonly grantError: {
            readonly type: "object";
            readonly description: "Error object for failed verifications.";
            readonly required: readonly ["error", "subject"];
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message describing the reason for failure.";
                };
                readonly subject: {
                    readonly type: "string";
                    readonly description: "The did of the subject being verified";
                    readonly format: "did";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=grantVerifications.d.ts.map