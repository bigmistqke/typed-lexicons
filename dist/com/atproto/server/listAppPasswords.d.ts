declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.listAppPasswords";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List all App Passwords.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["passwords"];
                    readonly properties: {
                        readonly passwords: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "#appPassword";
                            };
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "AccountTakedown";
            }];
        };
        readonly appPassword: {
            readonly type: "object";
            readonly required: readonly ["name", "createdAt"];
            readonly properties: {
                readonly name: {
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
//# sourceMappingURL=listAppPasswords.d.ts.map