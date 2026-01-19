declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getSubjects";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about subjects.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["subjects"];
                readonly properties: {
                    readonly subjects: {
                        readonly type: "array";
                        readonly maxLength: 100;
                        readonly minLength: 1;
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subjects"];
                    readonly properties: {
                        readonly subjects: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.moderation.defs#subjectView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getSubjects.d.ts.map