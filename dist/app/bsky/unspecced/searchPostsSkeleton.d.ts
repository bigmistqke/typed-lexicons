declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.searchPostsSkeleton";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Backend Posts search, returns only skeleton";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["q"];
                readonly properties: {
                    readonly q: {
                        readonly type: "string";
                        readonly description: "Search query string; syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended.";
                    };
                    readonly sort: {
                        readonly type: "string";
                        readonly knownValues: readonly ["top", "latest"];
                        readonly default: "latest";
                        readonly description: "Specifies the ranking order of results.";
                    };
                    readonly since: {
                        readonly type: "string";
                        readonly description: "Filter results for posts after the indicated datetime (inclusive). Expected to use 'sortAt' timestamp, which may not match 'createdAt'. Can be a datetime, or just an ISO date (YYYY-MM-DD).";
                    };
                    readonly until: {
                        readonly type: "string";
                        readonly description: "Filter results for posts before the indicated datetime (not inclusive). Expected to use 'sortAt' timestamp, which may not match 'createdAt'. Can be a datetime, or just an ISO date (YYY-MM-DD).";
                    };
                    readonly mentions: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "Filter to posts which mention the given account. Handles are resolved to DID before query-time. Only matches rich-text facet mentions.";
                    };
                    readonly author: {
                        readonly type: "string";
                        readonly format: "at-identifier";
                        readonly description: "Filter to posts by the given account. Handles are resolved to DID before query-time.";
                    };
                    readonly lang: {
                        readonly type: "string";
                        readonly format: "language";
                        readonly description: "Filter to posts in the given language. Expected to be based on post language field, though server may override language detection.";
                    };
                    readonly domain: {
                        readonly type: "string";
                        readonly description: "Filter to posts with URLs (facet links or embeds) linking to the given domain (hostname). Server may apply hostname normalization.";
                    };
                    readonly url: {
                        readonly type: "string";
                        readonly format: "uri";
                        readonly description: "Filter to posts with links (facet links or embeds) pointing to this URL. Server may apply URL normalization or fuzzy matching.";
                    };
                    readonly tag: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly maxLength: 640;
                            readonly maxGraphemes: 64;
                        };
                        readonly description: "Filter to posts with the given tag (hashtag), based on rich-text facet or tag field. Do not include the hash (#) prefix. Multiple tags can be specified, with 'AND' matching.";
                    };
                    readonly viewer: {
                        readonly type: "string";
                        readonly format: "did";
                        readonly description: "DID of the account making the request (not included for public/unauthenticated queries). Used for 'from:me' queries.";
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
                    readonly required: readonly ["posts"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly hitsTotal: {
                            readonly type: "integer";
                            readonly description: "Count of search hits. Optional, may be rounded/truncated, and may not be possible to paginate through all hits.";
                        };
                        readonly posts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.unspecced.defs#skeletonSearchPost";
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
//# sourceMappingURL=searchPostsSkeleton.d.ts.map