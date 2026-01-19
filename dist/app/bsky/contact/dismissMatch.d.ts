declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.dismissMatch";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Removes a match that was found via contact import. It shouldn't appear again if the same contact is re-imported. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subject"];
                    readonly properties: {
                        readonly subject: {
                            readonly description: "The subject's DID to dismiss the match with.";
                            readonly type: "string";
                            readonly format: "did";
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
                readonly name: "InvalidDid";
            }, {
                readonly name: "InternalError";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=dismissMatch.d.ts.map