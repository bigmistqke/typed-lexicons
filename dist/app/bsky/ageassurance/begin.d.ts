declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.ageassurance.begin";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Initiate Age Assurance for an account.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["email", "language", "countryCode"];
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "The user's email address to receive Age Assurance instructions.";
                        };
                        readonly language: {
                            readonly type: "string";
                            readonly description: "The user's preferred language for communication during the Age Assurance process.";
                        };
                        readonly countryCode: {
                            readonly type: "string";
                            readonly description: "An ISO 3166-1 alpha-2 code of the user's location.";
                        };
                        readonly regionCode: {
                            readonly type: "string";
                            readonly description: "An optional ISO 3166-2 code of the user's region or state within the country.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#state";
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidEmail";
            }, {
                readonly name: "DidTooLong";
            }, {
                readonly name: "InvalidInitiation";
            }, {
                readonly name: "RegionNotSupported";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=begin.d.ts.map