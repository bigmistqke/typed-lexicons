declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.createAccount";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create an account. Implemented by PDS.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["handle"];
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                            readonly description: "Requested handle for the account.";
                        };
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "Pre-existing atproto DID, being imported to a new account.";
                        };
                        readonly inviteCode: {
                            readonly type: "string";
                        };
                        readonly verificationCode: {
                            readonly type: "string";
                        };
                        readonly verificationPhone: {
                            readonly type: "string";
                        };
                        readonly password: {
                            readonly type: "string";
                            readonly description: "Initial account password. May need to meet instance-specific password strength requirements.";
                        };
                        readonly recoveryKey: {
                            readonly type: "string";
                            readonly description: "DID PLC rotation key (aka, recovery key) to be included in PLC creation operation.";
                        };
                        readonly plcOp: {
                            readonly type: "unknown";
                            readonly description: "A signed DID PLC operation to be submitted as part of importing an existing account to this instance. NOTE: this optional field may be updated when full account migration is implemented.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly description: "Account login session returned on successful account creation.";
                    readonly required: readonly ["accessJwt", "refreshJwt", "handle", "did"];
                    readonly properties: {
                        readonly accessJwt: {
                            readonly type: "string";
                        };
                        readonly refreshJwt: {
                            readonly type: "string";
                        };
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                        };
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "The DID of the new account.";
                        };
                        readonly didDoc: {
                            readonly type: "unknown";
                            readonly description: "Complete DID document.";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidHandle";
            }, {
                readonly name: "InvalidPassword";
            }, {
                readonly name: "InvalidInviteCode";
            }, {
                readonly name: "HandleNotAvailable";
            }, {
                readonly name: "UnsupportedDomain";
            }, {
                readonly name: "UnresolvableDid";
            }, {
                readonly name: "IncompatibleDidDoc";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=createAccount.d.ts.map