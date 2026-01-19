declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getRepoStatus";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.";
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
                    readonly required: readonly ["did", "active"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly active: {
                            readonly type: "boolean";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.";
                            readonly knownValues: readonly ["takendown", "suspended", "deleted", "deactivated", "desynchronized", "throttled"];
                        };
                        readonly rev: {
                            readonly type: "string";
                            readonly format: "tid";
                            readonly description: "Optional field, the current rev of the repo, if active=true";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "RepoNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getRepoStatus.d.ts.map