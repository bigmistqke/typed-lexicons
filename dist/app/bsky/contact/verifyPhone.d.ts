declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.verifyPhone";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Verifies control over a phone number with a code received via SMS and starts a contact import session. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["phone", "code"];
                    readonly properties: {
                        readonly phone: {
                            readonly description: "The phone number to verify. Should be the same as the one passed to `app.bsky.contact.startPhoneVerification`.";
                            readonly type: "string";
                        };
                        readonly code: {
                            readonly description: "The code received via SMS as a result of the call to `app.bsky.contact.startPhoneVerification`.";
                            readonly type: "string";
                        };
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
                            readonly description: "JWT to be used in a call to `app.bsky.contact.importContacts`. It is only valid for a single call.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "RateLimitExceeded";
            }, {
                readonly name: "InvalidDid";
            }, {
                readonly name: "InvalidPhone";
            }, {
                readonly name: "InvalidCode";
            }, {
                readonly name: "InternalError";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=verifyPhone.d.ts.map