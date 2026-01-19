declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.resolveHandle";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Resolves an atproto handle (hostname) to a DID. Does not necessarily bi-directionally verify against the the DID document.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["handle"];
                readonly properties: {
                    readonly handle: {
                        readonly type: "string";
                        readonly format: "handle";
                        readonly description: "The handle to resolve.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "HandleNotFound";
                readonly description: "The resolution process confirmed that the handle does not resolve to any DID.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=resolveHandle.d.ts.map