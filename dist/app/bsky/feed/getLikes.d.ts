declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.getLikes";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get like records which reference a subject (by AT-URI and CID).";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["uri"];
                readonly properties: {
                    readonly uri: {
                        readonly type: "string";
                        readonly format: "at-uri";
                        readonly description: "AT-URI of the subject (eg, a post record).";
                    };
                    readonly cid: {
                        readonly type: "string";
                        readonly format: "cid";
                        readonly description: "CID of the subject record (aka, specific version of record), to filter likes.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
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
                    readonly required: readonly ["uri", "likes"];
                    readonly properties: {
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "at-uri";
                        };
                        readonly cid: {
                            readonly type: "string";
                            readonly format: "cid";
                        };
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly likes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#like";
                            };
                        };
                    };
                };
            };
        };
        readonly like: {
            readonly type: "object";
            readonly required: readonly ["indexedAt", "createdAt", "actor"];
            readonly properties: {
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly actor: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getLikes.d.ts.map