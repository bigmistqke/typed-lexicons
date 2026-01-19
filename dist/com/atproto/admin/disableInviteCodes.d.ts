declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.disableInviteCodes";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Disable some set of codes and/or all codes associated with a set of users.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly codes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly accounts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=disableInviteCodes.d.ts.map