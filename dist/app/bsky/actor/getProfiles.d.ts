declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.getProfiles";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get detailed profile views of multiple actors.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["actors"];
                readonly properties: {
                    readonly actors: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "at-identifier";
                        };
                        readonly maxLength: 25;
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["profiles"];
                    readonly properties: {
                        readonly profiles: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "app.bsky.actor.defs#profileViewDetailed";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getProfiles.d.ts.map