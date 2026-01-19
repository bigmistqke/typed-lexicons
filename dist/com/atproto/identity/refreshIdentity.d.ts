declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.refreshIdentity";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Request that the server re-resolve an identity (DID and handle). The server may ignore this request, or require authentication, depending on the role, implementation, and policy of the server.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["identifier"];
                    readonly properties: {
                        readonly identifier: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                        };
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
//# sourceMappingURL=refreshIdentity.d.ts.map