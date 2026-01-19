declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getRepo";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.";
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
                        readonly description: "The revision ('rev') of the repo to create a diff from.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/vnd.ipld.car";
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
//# sourceMappingURL=getRepo.d.ts.map