declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.notifyOfUpdate";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay. DEPRECATED: just use com.atproto.sync.requestCrawl";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["hostname"];
                    readonly properties: {
                        readonly hostname: {
                            readonly type: "string";
                            readonly description: "Hostname of the current service (usually a PDS) that is notifying of update.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=notifyOfUpdate.d.ts.map