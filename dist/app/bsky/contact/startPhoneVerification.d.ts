declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.startPhoneVerification";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Starts a phone verification flow. The phone passed will receive a code via SMS that should be passed to `app.bsky.contact.verifyPhone`. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["phone"];
                    readonly properties: {
                        readonly phone: {
                            readonly description: "The phone number to receive the code via SMS.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
            readonly errors: readonly [{
                readonly name: "RateLimitExceeded";
            }, {
                readonly name: "InvalidDid";
            }, {
                readonly name: "InvalidPhone";
            }, {
                readonly name: "InternalError";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=startPhoneVerification.d.ts.map