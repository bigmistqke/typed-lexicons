declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.server.getConfig";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about ozone's server configuration.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly appview: {
                            readonly type: "ref";
                            readonly ref: "#serviceConfig";
                        };
                        readonly pds: {
                            readonly type: "ref";
                            readonly ref: "#serviceConfig";
                        };
                        readonly blobDivert: {
                            readonly type: "ref";
                            readonly ref: "#serviceConfig";
                        };
                        readonly chat: {
                            readonly type: "ref";
                            readonly ref: "#serviceConfig";
                        };
                        readonly viewer: {
                            readonly type: "ref";
                            readonly ref: "#viewerConfig";
                        };
                        readonly verifierDid: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "The did of the verifier used for verification.";
                        };
                    };
                };
            };
        };
        readonly serviceConfig: {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly format: "uri";
                };
            };
        };
        readonly viewerConfig: {
            readonly type: "object";
            readonly properties: {
                readonly role: {
                    readonly type: "string";
                    readonly knownValues: readonly ["tools.ozone.team.defs#roleAdmin", "tools.ozone.team.defs#roleModerator", "tools.ozone.team.defs#roleTriage", "tools.ozone.team.defs#roleVerifier"];
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getConfig.d.ts.map