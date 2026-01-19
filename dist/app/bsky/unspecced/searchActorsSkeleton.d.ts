declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.searchActorsSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Backend Actors (profile) search, returns only skeleton.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["q"];
                readonly properties: {
                    readonly q: {
                        readonly type: "string";
                        readonly description: "Search query string; syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. For typeahead search, only simple term match is supported, not full syntax.";
                    };
                    readonly viewer: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account making the request (not included for public/unauthenticated queries). Used to boost followed accounts in ranking.";
                    };
                    readonly typeahead: {
                        readonly type: "boolean";
                        readonly description: "If true, acts as fast/simple 'typeahead' query.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 25;
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly description: "Optional pagination mechanism; may not necessarily allow scrolling through entire result set.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["actors"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly hitsTotal: {
                            readonly type: "integer";
                            readonly description: "Count of search hits. Optional, may be rounded/truncated, and may not be possible to paginate through all hits.";
                        };
                        readonly actors: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.unspecced.defs#skeletonSearchActor";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "BadQueryString";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=searchActorsSkeleton.d.ts.map