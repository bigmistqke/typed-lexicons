declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.lexicon.resolveLexicon";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Resolves an atproto lexicon (NSID) to a schema.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly nsid: {
                        readonly format: "nsid";
                        readonly type: "string";
                        readonly description: "The lexicon NSID to resolve.";
                    };
                };
                readonly required: readonly ["nsid"];
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly cid: {
                            readonly type: "string";
                            readonly format: "cid";
                            readonly description: "The CID of the lexicon schema record.";
                        };
                        readonly schema: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.lexicon.schema#main";
                            readonly description: "The resolved lexicon schema record.";
                        };
                        readonly uri: {
                            readonly type: "string";
                            readonly format: "at-uri";
                            readonly description: "The AT-URI of the lexicon schema record.";
                        };
                    };
                    readonly required: readonly ["uri", "cid", "schema"];
                };
            };
            readonly errors: readonly [{
                readonly description: "No lexicon was resolved for the NSID.";
                readonly name: "LexiconNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=resolveLexicon.d.ts.map