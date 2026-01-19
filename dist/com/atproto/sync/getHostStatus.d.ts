declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.getHostStatus";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns information about a specified upstream host, as consumed by the server. Implemented by relays.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["hostname"];
                readonly properties: {
                    readonly hostname: {
                        readonly type: "string";
                        readonly description: "Hostname of the host (eg, PDS or relay) being queried.";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["hostname"];
                    readonly properties: {
                        readonly hostname: {
                            readonly type: "string";
                        };
                        readonly seq: {
                            readonly type: "integer";
                            readonly description: "Recent repo stream event sequence number. May be delayed from actual stream processing (eg, persisted cursor not in-memory cursor).";
                        };
                        readonly accountCount: {
                            readonly type: "integer";
                            readonly description: "Number of accounts on the server which are associated with the upstream host. Note that the upstream may actually have more accounts.";
                        };
                        readonly status: {
                            readonly type: "ref";
                            readonly ref: "com.atproto.sync.defs#hostStatus";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "HostNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getHostStatus.d.ts.map