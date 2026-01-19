declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.requestCrawl";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["hostname"];
                    readonly properties: {
                        readonly hostname: {
                            readonly type: "string";
                            readonly description: "Hostname of the current service (eg, PDS) that is requesting to be crawled.";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "HostBanned";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=requestCrawl.d.ts.map