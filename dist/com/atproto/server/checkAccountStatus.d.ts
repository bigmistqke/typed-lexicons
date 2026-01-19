declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.checkAccountStatus";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["activated", "validDid", "repoCommit", "repoRev", "repoBlocks", "indexedRecords", "privateStateValues", "expectedBlobs", "importedBlobs"];
                    readonly properties: {
                        readonly activated: {
                            readonly type: "boolean";
                        };
                        readonly validDid: {
                            readonly type: "boolean";
                        };
                        readonly repoCommit: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                        readonly repoRev: {
                            readonly type: "string";
                        };
                        readonly repoBlocks: {
                            readonly type: "integer";
                        };
                        readonly indexedRecords: {
                            readonly type: "integer";
                        };
                        readonly privateStateValues: {
                            readonly type: "integer";
                        };
                        readonly expectedBlobs: {
                            readonly type: "integer";
                        };
                        readonly importedBlobs: {
                            readonly type: "integer";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=checkAccountStatus.d.ts.map