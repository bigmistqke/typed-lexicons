declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.verification.defs";
    readonly defs: {
        readonly verificationView: {
            readonly type: "object";
            readonly description: "Verification data for the associated subject.";
            readonly required: readonly ["issuer", "uri", "subject", "handle", "displayName", "createdAt"];
            readonly properties: {
                readonly issuer: {
                    readonly type: "string";
                    readonly description: "The user who issued this verification.";
                    readonly format: "did";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly description: "The AT-URI of the verification record.";
                    readonly format: "at-uri";
                };
                readonly subject: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "The subject of the verification.";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly description: "Handle of the subject the verification applies to at the moment of verifying, which might not be the same at the time of viewing. The verification is only valid if the current handle matches the one at the time of verifying.";
                    readonly format: "handle";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "Display name of the subject the verification applies to at the moment of verifying, which might not be the same at the time of viewing. The verification is only valid if the current displayName matches the one at the time of verifying.";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly description: "Timestamp when the verification was created.";
                    readonly format: "datetime";
                };
                readonly revokeReason: {
                    readonly type: "string";
                    readonly description: "Describes the reason for revocation, also indicating that the verification is no longer valid.";
                };
                readonly revokedAt: {
                    readonly type: "string";
                    readonly description: "Timestamp when the verification was revoked.";
                    readonly format: "datetime";
                };
                readonly revokedBy: {
                    readonly type: "string";
                    readonly description: "The user who revoked this verification.";
                    readonly format: "did";
                };
                readonly subjectProfile: {
                    readonly type: "union";
                    readonly refs: readonly [];
                };
                readonly issuerProfile: {
                    readonly type: "union";
                    readonly refs: readonly [];
                };
                readonly subjectRepo: {
                    readonly type: "union";
                    readonly refs: readonly ["tools.ozone.moderation.defs#repoViewDetail", "tools.ozone.moderation.defs#repoViewNotFound"];
                };
                readonly issuerRepo: {
                    readonly type: "union";
                    readonly refs: readonly ["tools.ozone.moderation.defs#repoViewDetail", "tools.ozone.moderation.defs#repoViewNotFound"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map