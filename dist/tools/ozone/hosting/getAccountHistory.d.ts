declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.hosting.getAccountHistory";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get account history, e.g. log of updated email addresses or other identity information.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly events: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly knownValues: readonly ["accountCreated", "emailUpdated", "emailConfirmed", "passwordUpdated", "handleUpdated"];
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["events"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#event";
                            };
                        };
                    };
                };
            };
        };
        readonly event: {
            readonly type: "object";
            readonly required: readonly ["details", "createdBy", "createdAt"];
            readonly properties: {
                readonly details: {
                    readonly type: "union";
                    readonly refs: readonly ["#accountCreated", "#emailUpdated", "#emailConfirmed", "#passwordUpdated", "#handleUpdated"];
                };
                readonly createdBy: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly accountCreated: {
            readonly type: "object";
            readonly required: readonly [];
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
            };
        };
        readonly emailUpdated: {
            readonly type: "object";
            readonly required: readonly ["email"];
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                };
            };
        };
        readonly emailConfirmed: {
            readonly type: "object";
            readonly required: readonly ["email"];
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                };
            };
        };
        readonly passwordUpdated: {
            readonly type: "object";
            readonly required: readonly [];
            readonly properties: {};
        };
        readonly handleUpdated: {
            readonly type: "object";
            readonly required: readonly ["handle"];
            readonly properties: {
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getAccountHistory.d.ts.map