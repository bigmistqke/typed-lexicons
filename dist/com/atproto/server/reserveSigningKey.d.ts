declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.reserveSigningKey";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "The DID to reserve a key for.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["signingKey"];
                    readonly properties: {
                        readonly signingKey: {
                            readonly type: "string";
                            readonly description: "The public key for the reserved signing key, in did:key serialization.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=reserveSigningKey.d.ts.map