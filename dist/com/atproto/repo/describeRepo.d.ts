declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.describeRepo";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get information about an account and repository, including the list of collections. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["repo"];
                readonly properties: {
                    readonly repo: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "The handle or DID of the repo.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["handle", "did", "didDoc", "collections", "handleIsCorrect"];
                    readonly properties: {
                        readonly handle: {
                            readonly type: "string";
                            readonly format: "handle";
                        };
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly didDoc: {
                            readonly type: "unknown";
                            readonly description: "The complete DID document for this account.";
                        };
                        readonly collections: {
                            readonly type: "array";
                            readonly description: "List of all the collections (NSIDs) for which this repo contains at least one record.";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "nsid";
                            };
                        };
                        readonly handleIsCorrect: {
                            readonly type: "boolean";
                            readonly description: "Indicates if handle is currently valid (resolves bi-directionally)";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=describeRepo.d.ts.map