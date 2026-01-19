declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getBlocks";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did", "cids"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The DID of the repo.";
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
            readonly output: {
                readonly encoding: "application/vnd.ipld.car";
            };
            readonly errors: readonly [{
                readonly name: "BlockNotFound";
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
//# sourceMappingURL=getBlocks.d.ts.map