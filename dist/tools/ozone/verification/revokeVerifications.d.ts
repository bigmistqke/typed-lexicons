declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.verification.revokeVerifications";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Revoke previously granted verifications in batches of up to 100.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["uris"];
                    readonly properties: {
                        readonly uris: {
                            readonly type: "array";
                            readonly description: "Array of verification record uris to revoke";
                            readonly maxLength: 100;
                            readonly items: {
                                readonly type: "string";
                                readonly description: "The AT-URI of the verification record to revoke.";
                                readonly format: "at-uri";
                            };
                        };
                        readonly revokeReason: {
                            readonly type: "string";
                            readonly description: "Reason for revoking the verification. This is optional and can be omitted if not needed.";
                            readonly maxLength: 1000;
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["revokedVerifications", "failedRevocations"];
                    readonly properties: {
                        readonly revokedVerifications: {
                            readonly type: "array";
                            readonly description: "List of verification uris successfully revoked";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "at-uri";
                            };
                        };
                        readonly failedRevocations: {
                            readonly type: "array";
                            readonly description: "List of verification uris that couldn't be revoked, including failure reasons";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#revokeError";
                            };
                        };
                    };
                };
            };
        };
        readonly revokeError: {
            readonly type: "object";
            readonly description: "Error object for failed revocations";
            readonly required: readonly ["uri", "error"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly description: "The AT-URI of the verification record that failed to revoke.";
                    readonly format: "at-uri";
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Description of the error that occurred during revocation.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=revokeVerifications.d.ts.map