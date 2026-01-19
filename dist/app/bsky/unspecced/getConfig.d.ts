declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getConfig";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get miscellaneous runtime configuration.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {
                        readonly checkEmailConfirmed: {
                            readonly type: "boolean";
                        };
                        readonly liveNow: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#liveNowConfig";
                            };
                        };
                    };
                };
            };
        };
        readonly liveNowConfig: {
            readonly type: "object";
            readonly required: readonly ["did", "domains"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly domains: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getConfig.d.ts.map