declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.defs";
    readonly defs: {
        readonly statusAttr: {
            readonly type: "object";
            readonly required: readonly ["applied"];
            readonly properties: {
                readonly applied: {
                    readonly type: "boolean";
                };
                readonly ref: {
                    readonly type: "string";
                };
            };
        };
        readonly accountView: {
            readonly type: "object";
            readonly required: readonly ["did", "handle", "indexedAt"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly relatedRecords: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "unknown";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly invitedBy: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.server.defs#inviteCode";
                };
                readonly invites: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.server.defs#inviteCode";
                    };
                };
                readonly invitesDisabled: {
                    readonly type: "boolean";
                };
                readonly emailConfirmedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly inviteNote: {
                    readonly type: "string";
                };
                readonly deactivatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly threatSignatures: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#threatSignature";
                    };
                };
            };
        };
        readonly repoRef: {
            readonly type: "object";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
        readonly repoBlobRef: {
            readonly type: "object";
            readonly required: readonly ["did", "cid"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly recordUri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly threatSignature: {
            readonly type: "object";
            readonly required: readonly ["property", "value"];
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                };
                readonly value: {
                    readonly type: "string";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map