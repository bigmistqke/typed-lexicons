declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getBlob";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did", "cid"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "The DID of the account.";
                    };
                    readonly cid: {
                        readonly type: "string";
                        readonly format: "cid";
                        readonly description: "The CID of the blob to fetch";
                    };
                };
            };
            readonly output: {
                readonly encoding: "*/*";
            };
            readonly errors: readonly [{
                readonly name: "BlobNotFound";
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
//# sourceMappingURL=getBlob.d.ts.map