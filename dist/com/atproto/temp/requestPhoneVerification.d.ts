declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.requestPhoneVerification";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Request a verification code to be sent to the supplied phone number";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["phoneNumber"];
                    readonly properties: {
                        readonly phoneNumber: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=requestPhoneVerification.d.ts.map