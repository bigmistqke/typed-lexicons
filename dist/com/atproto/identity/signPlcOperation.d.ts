declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.identity.signPlcOperation";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Signs a PLC operation to update some value(s) in the requesting DID's document.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly token: {
                            readonly description: "A token received through com.atproto.identity.requestPlcOperationSignature";
                            readonly type: "string";
                        };
                        readonly rotationKeys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly alsoKnownAs: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly verificationMethods: {
                            readonly type: "unknown";
                        };
                        readonly services: {
                            readonly type: "unknown";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["operation"];
                    readonly properties: {
                        readonly operation: {
                            readonly type: "unknown";
                            readonly description: "A signed DID PLC operation.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=signPlcOperation.d.ts.map