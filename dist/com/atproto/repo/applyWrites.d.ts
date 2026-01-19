declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.applyWrites";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["repo", "writes"];
                    readonly properties: {
                        readonly repo: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                            readonly description: "The handle or DID of the repo (aka, current account).";
                        };
                        readonly validate: {
                            readonly type: "boolean";
                            readonly description: "Can be set to 'false' to skip Lexicon schema validation of record data across all operations, 'true' to require it, or leave unset to validate only for known Lexicons.";
                        };
                        readonly writes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["#create", "#update", "#delete"];
                                readonly closed: true;
                            };
                        };
                        readonly swapCommit: {
                            readonly type: "string";
                            readonly description: "If provided, the entire operation will fail if the current repo commit CID does not match this value. Used to prevent conflicting repo mutations.";
                            readonly format: "cid";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {
                        readonly commit: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.repo.defs#commitMeta";
                        };
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "union";
                                readonly refs: readonly ["#createResult", "#updateResult", "#deleteResult"];
                                readonly closed: true;
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidSwap";
                readonly description: "Indicates that the 'swapCommit' parameter did not match current commit.";
            }];
        };
        readonly create: {
            readonly type: "object";
            readonly description: "Operation which creates a new record.";
            readonly required: readonly ["collection", "value"];
            readonly properties: {
                readonly collection: {
                    readonly type: "string";
                    readonly format: "nsid";
                };
                readonly rkey: {
                    readonly type: "string";
                    readonly maxLength: 512;
                    readonly format: "record-key";
                    readonly description: "NOTE: maxLength is redundant with record-key format. Keeping it temporarily to ensure backwards compatibility.";
                };
                readonly value: {
                    readonly type: "unknown";
                };
            };
        };
        readonly update: {
            readonly type: "object";
            readonly description: "Operation which updates an existing record.";
            readonly required: readonly ["collection", "rkey", "value"];
            readonly properties: {
                readonly collection: {
                    readonly type: "string";
                    readonly format: "nsid";
                };
                readonly rkey: {
                    readonly type: "string";
                    readonly format: "record-key";
                };
                readonly value: {
                    readonly type: "unknown";
                };
            };
        };
        readonly delete: {
            readonly type: "object";
            readonly description: "Operation which deletes an existing record.";
            readonly required: readonly ["collection", "rkey"];
            readonly properties: {
                readonly collection: {
                    readonly type: "string";
                    readonly format: "nsid";
                };
                readonly rkey: {
                    readonly type: "string";
                    readonly format: "record-key";
                };
            };
        };
        readonly createResult: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly validationStatus: {
                    readonly type: "string";
                    readonly knownValues: readonly ["valid", "unknown"];
                };
            };
        };
        readonly updateResult: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly validationStatus: {
                    readonly type: "string";
                    readonly knownValues: readonly ["valid", "unknown"];
                };
            };
        };
        readonly deleteResult: {
            readonly type: "object";
            readonly required: readonly [];
            readonly properties: {};
        };
    };
};
export default _default;
//# sourceMappingURL=applyWrites.d.ts.map