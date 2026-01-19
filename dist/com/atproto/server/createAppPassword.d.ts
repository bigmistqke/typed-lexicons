declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.createAppPassword";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Create an App Password.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["name"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "A short name for the App Password, to help distinguish them.";
                        };
                        readonly privileged: {
                            readonly type: "boolean";
                            readonly description: "If an app password has 'privileged' access to possibly sensitive account state. Meant for use with trusted clients.";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "#appPassword";
                };
            };
            readonly errors: readonly [{
                readonly name: "AccountTakedown";
            }];
        };
        readonly appPassword: {
            readonly type: "object";
            readonly required: readonly ["name", "password", "createdAt"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly password: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly privileged: {
                    readonly type: "boolean";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=createAppPassword.d.ts.map