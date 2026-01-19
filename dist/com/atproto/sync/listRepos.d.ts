declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.listRepos";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
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
                    readonly required: readonly ["repos"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly repos: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#repo";
                            };
                        };
                    };
                };
            };
        };
        readonly repo: {
            readonly type: "object";
            readonly required: readonly ["did", "head", "rev"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly head: {
                    readonly type: "string";
                    readonly format: "cid";
                    readonly description: "Current repo commit CID";
                };
                readonly rev: {
                    readonly type: "string";
                    readonly format: "tid";
                };
                readonly active: {
                    readonly type: "boolean";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.";
                    readonly knownValues: readonly ["takendown", "suspended", "deleted", "deactivated", "desynchronized", "throttled"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listRepos.d.ts.map