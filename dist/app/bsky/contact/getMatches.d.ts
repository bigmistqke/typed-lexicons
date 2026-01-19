declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.getMatches";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns the matched contacts (contacts that were mutually imported). Excludes dismissed matches. Requires authentication.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
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
                    readonly required: readonly ["matches"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly matches: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileView";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidDid";
            }, {
                readonly name: "InvalidLimit";
            }, {
                readonly name: "InvalidCursor";
            }, {
                readonly name: "InternalError";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getMatches.d.ts.map