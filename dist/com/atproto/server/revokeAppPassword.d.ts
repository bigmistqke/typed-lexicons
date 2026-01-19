declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.revokeAppPassword";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Revoke an App Password by name.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["name"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=revokeAppPassword.d.ts.map