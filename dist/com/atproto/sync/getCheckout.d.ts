declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getCheckout";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "DEPRECATED - please use com.atproto.sync.getRepo instead";
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
                readonly encoding: "application/vnd.ipld.car";
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getCheckout.d.ts.map