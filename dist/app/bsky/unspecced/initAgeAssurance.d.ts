declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.initAgeAssurance";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Initiate age assurance for an account. This is a one-time action that will start the process of verifying the user's age.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["email", "language", "countryCode"];
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "The user's email address to receive assurance instructions.";
                        };
                        readonly language: {
                            readonly type: "string";
                            readonly description: "The user's preferred language for communication during the assurance process.";
                        };
                        readonly countryCode: {
                            readonly type: "string";
                            readonly description: "An ISO 3166-1 alpha-2 code of the user's location.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.unspecced.defs#ageAssuranceState";
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidEmail";
            }, {
                readonly name: "DidTooLong";
            }, {
                readonly name: "InvalidInitiation";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=initAgeAssurance.d.ts.map