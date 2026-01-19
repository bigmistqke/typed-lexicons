declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.getServiceAuth";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a signed token on behalf of the requesting DID for the requested service.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["aud"];
                readonly properties: {
                    readonly aud: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The DID of the service that the token will be used to authenticate with";
                    };
                    readonly exp: {
                        readonly type: "integer";
                        readonly description: "The time in Unix Epoch seconds that the JWT expires. Defaults to 60 seconds in the future. The service may enforce certain time bounds on tokens depending on the requested scope.";
                    };
                    readonly lxm: {
                        readonly type: "string";
                        readonly format: "nsid";
                        readonly description: "Lexicon (XRPC) method to bind the requested token to";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["token"];
                    readonly properties: {
                        readonly token: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "BadExpiration";
                readonly description: "Indicates that the requested expiration date is not a valid. May be in the past or may be reliant on the requested scopes.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getServiceAuth.d.ts.map