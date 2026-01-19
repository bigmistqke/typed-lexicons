declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getHead";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "DEPRECATED - please use com.atproto.sync.getLatestCommit instead";
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
                    readonly required: readonly ["root"];
                    readonly properties: {
                        readonly root: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "HeadNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getHead.d.ts.map