declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.requestEmailUpdate";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Request a token in order to update email.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["tokenRequired"];
                    readonly properties: {
                        readonly tokenRequired: {
                            readonly type: "boolean";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=requestEmailUpdate.d.ts.map