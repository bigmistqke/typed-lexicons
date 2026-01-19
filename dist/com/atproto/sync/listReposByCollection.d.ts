declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.listReposByCollection";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates all the DIDs which have records with the given collection NSID.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["collection"];
                readonly properties: {
                    readonly collection: {
                        readonly type: "string";
                        readonly format: "nsid";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly description: "Maximum size of response set. Recommend setting a large maximum (1000+) when enumerating large DID lists.";
                        readonly minimum: 1;
                        readonly maximum: 2000;
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
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listReposByCollection.d.ts.map