declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getLatestCommit";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get the current commit CID & revision of the specified repo. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The DID of the repo.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["cid", "rev"];
                    readonly properties: {
                        readonly cid: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                        readonly rev: {
                            readonly type: "string";
                            readonly format: "tid";
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
//# sourceMappingURL=getLatestCommit.d.ts.map