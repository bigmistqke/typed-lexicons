declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.resolveDid";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Resolves DID to DID document. Does not bi-directionally verify handle.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID to resolve.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["didDoc"];
                    readonly properties: {
                        readonly didDoc: {
                            readonly type: "unknown";
                            readonly description: "The complete DID document for the identity.";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "DidNotFound";
                readonly description: "The DID resolution process confirmed that there is no current DID.";
            }, {
                readonly name: "DidDeactivated";
                readonly description: "The DID previously existed, but has been deactivated.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=resolveDid.d.ts.map