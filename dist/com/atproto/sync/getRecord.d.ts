declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getRecord";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did", "collection", "rkey"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The DID of the repo.";
                    };
                    readonly collection: {
                        readonly type: "string";
                        readonly format: "nsid";
                    };
                    readonly rkey: {
                        readonly type: "string";
                        readonly description: "Record Key";
                        readonly format: "record-key";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/vnd.ipld.car";
            };
            readonly errors: readonly [{
                readonly name: "RecordNotFound";
            }, {
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
//# sourceMappingURL=getRecord.d.ts.map