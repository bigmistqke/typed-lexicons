declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.dereferenceScope";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Allows finding the oauth permission scope from a reference";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["scope"];
                readonly properties: {
                    readonly scope: {
                        readonly type: "string";
                        readonly description: "The scope reference (starts with 'ref:')";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["scope"];
                    readonly properties: {
                        readonly scope: {
                            readonly type: "string";
                            readonly description: "The full oauth permission scope";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidScopeReference";
                readonly description: "An invalid scope reference was provided.";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=dereferenceScope.d.ts.map