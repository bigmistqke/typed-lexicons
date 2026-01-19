declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.describeServer";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Describes the server's account creation requirements and capabilities. Implemented by PDS.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "availableUserDomains"];
                    readonly properties: {
                        readonly inviteCodeRequired: {
                            readonly type: "boolean";
                            readonly description: "If true, an invite code must be supplied to create an account on this instance.";
                        };
                        readonly phoneVerificationRequired: {
                            readonly type: "boolean";
                            readonly description: "If true, a phone verification token must be supplied to create an account on this instance.";
                        };
                        readonly availableUserDomains: {
                            readonly type: "array";
                            readonly description: "List of domain suffixes that can be used in account handles.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly links: {
                            readonly type: "ref";
                            readonly description: "URLs of service policy documents.";
                            readonly ref: "#links";
                        };
                        readonly contact: {
                            readonly type: "ref";
                            readonly description: "Contact information";
                            readonly ref: "#contact";
                        };
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
        };
        readonly links: {
            readonly type: "object";
            readonly properties: {
                readonly privacyPolicy: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly termsOfService: {
                    readonly type: "string";
                    readonly format: "uri";
                };
            };
        };
        readonly contact: {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=describeServer.d.ts.map