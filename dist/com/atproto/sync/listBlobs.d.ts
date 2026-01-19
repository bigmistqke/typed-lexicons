declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.listBlobs";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The DID of the repo.";
                    };
                    readonly since: {
                        readonly type: "string";
                        readonly format: "tid";
                        readonly description: "Optional revision of the repo to list blobs since.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 1000;
                        readonly default: 500;
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["cids"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly cids: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly format: "cid";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "RepoNotFound";
            }, {
                readonly name: "RepoTakendown";
            }, {
                readonly name: "RepoSuspended";
            }, {
                readonly name: "RepoDeactivated";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=listBlobs.d.ts.map