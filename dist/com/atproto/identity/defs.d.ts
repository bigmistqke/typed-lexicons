declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.defs";
    readonly defs: {
        readonly identityInfo: {
            readonly type: "object";
            readonly required: readonly ["did", "handle", "didDoc"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                    readonly description: "The validated handle of the account; or 'handle.invalid' if the handle did not bi-directionally match the DID document.";
                };
                readonly didDoc: {
                    readonly type: "unknown";
                    readonly description: "The complete DID document for the identity.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map