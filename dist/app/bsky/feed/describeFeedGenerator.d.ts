declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.feed.describeFeedGenerator";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["did", "feeds"];
                    readonly properties: {
                        readonly did: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly feeds: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#feed";
                            };
                        };
                        readonly links: {
                            readonly type: "ref";
                            readonly ref: "#links";
                        };
                    };
                };
            };
        };
        readonly feed: {
            readonly type: "object";
            readonly required: readonly ["uri"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly links: {
            readonly type: "object";
            readonly properties: {
                readonly privacyPolicy: {
                    readonly type: "string";
                };
                readonly termsOfService: {
                    readonly type: "string";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=describeFeedGenerator.d.ts.map