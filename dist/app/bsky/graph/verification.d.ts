declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.verification";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "Record declaring a verification relationship between two accounts. Verifications are only considered valid by an app if issued by an account the app considers trusted.";
            readonly key: "tid";
            readonly record: {
                readonly type: "object";
                readonly required: readonly ["subject", "handle", "displayName", "createdAt"];
                readonly properties: {
                    readonly subject: {
                        readonly description: "DID of the subject the verification applies to.";
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly handle: {
                        readonly description: "Handle of the subject the verification applies to at the moment of verifying, which might not be the same at the time of viewing. The verification is only valid if the current handle matches the one at the time of verifying.";
                        readonly type: "string";
                        readonly format: "handle";
                    };
                    readonly displayName: {
                        readonly description: "Display name of the subject the verification applies to at the moment of verifying, which might not be the same at the time of viewing. The verification is only valid if the current displayName matches the one at the time of verifying.";
                        readonly type: "string";
                    };
                    readonly createdAt: {
                        readonly description: "Date of when the verification was created.";
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=verification.d.ts.map