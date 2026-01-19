declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.temp.checkSignupQueue";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Check accounts location in signup queue.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["activated"];
                    readonly properties: {
                        readonly activated: {
                            readonly type: "boolean";
                        };
                        readonly placeInQueue: {
                            readonly type: "integer";
                        };
                        readonly estimatedTimeMs: {
                            readonly type: "integer";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=checkSignupQueue.d.ts.map