declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.getRecommendedDidCredentials";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Describe the credentials that should be included in the DID doc of an account that is migrating to this service.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly rotationKeys: {
                            readonly description: "Recommended rotation keys for PLC dids. Should be undefined (or ignored) for did:webs.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly alsoKnownAs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly verificationMethods: {
                            readonly type: "unknown";
                        };
                        readonly services: {
                            readonly type: "unknown";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getRecommendedDidCredentials.d.ts.map