declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.listHosts";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Enumerates upstream hosts (eg, PDS or relay instances) that this service consumes from. Implemented by relays.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 1000;
                        readonly default: 200;
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
                    readonly required: readonly ["hosts"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly hosts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#host";
                            };
                            readonly description: "Sort order is not formally specified. Recommended order is by time host was first seen by the server, with oldest first.";
                        };
                    };
                };
            };
        };
        readonly host: {
            readonly type: "object";
            readonly required: readonly ["hostname"];
            readonly properties: {
                readonly hostname: {
                    readonly type: "string";
                    readonly description: "hostname of server; not a URL (no scheme)";
                };
                readonly seq: {
                    readonly type: "integer";
                    readonly description: "Recent repo stream event sequence number. May be delayed from actual stream processing (eg, persisted cursor not in-memory cursor).";
                };
                readonly accountCount: {
                    readonly type: "integer";
                };
                readonly status: {
                    readonly type: "ref";
                    readonly ref: "com.atproto.sync.defs#hostStatus";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listHosts.d.ts.map