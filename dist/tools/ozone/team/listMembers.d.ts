declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.team.listMembers";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List all members with access to the ozone service.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly q: {
                        readonly type: "string";
                    };
                    readonly disabled: {
                        readonly type: "boolean";
                    };
                    readonly roles: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
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
                    readonly required: readonly ["members"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly members: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.team.defs#member";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=listMembers.d.ts.map