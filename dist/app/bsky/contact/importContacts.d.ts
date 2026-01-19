declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.importContacts";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Import contacts for securely matching with other users. This follows the protocol explained in https://docs.bsky.app/blog/contact-import-rfc. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["token", "contacts"];
                    readonly properties: {
                        readonly token: {
                            readonly description: "JWT to authenticate the call. Use the JWT received as a response to the call to `app.bsky.contact.verifyPhone`.";
                            readonly type: "string";
                        };
                        readonly contacts: {
                            readonly description: "List of phone numbers in global E.164 format (e.g., '+12125550123'). Phone numbers that cannot be normalized into a valid phone number will be discarded. Should not repeat the 'phone' input used in `app.bsky.contact.verifyPhone`.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly minLength: 1;
                            readonly maxLength: 1000;
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["matchesAndContactIndexes"];
                    readonly properties: {
                        readonly matchesAndContactIndexes: {
                            readonly description: "The users that matched during import and their indexes on the input contacts, so the client can correlate with its local list.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.contact.defs#matchAndContactIndex";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidDid";
            }, {
                readonly name: "InvalidContacts";
            }, {
                readonly name: "TooManyContacts";
            }, {
                readonly name: "InvalidToken";
            }, {
                readonly name: "InternalError";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=importContacts.d.ts.map