declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.resolveIdentity";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Resolves an identity (DID or Handle) to a full identity (DID document and verified handle).";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["identifier"];
                readonly properties: {
                    readonly identifier: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "Handle or DID to resolve.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.identity.defs#identityInfo";
                };
            };
            readonly errors: readonly [{
                readonly name: "HandleNotFound";
                readonly description: "The resolution process confirmed that the handle does not resolve to any DID.";
            }, {
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
//# sourceMappingURL=resolveIdentity.d.ts.map