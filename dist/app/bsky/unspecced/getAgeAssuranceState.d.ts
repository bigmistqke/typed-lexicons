declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.unspecced.getAgeAssuranceState";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Returns the current state of the age assurance process for an account. This is used to check if the user has completed age assurance or if further action is required.";
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.unspecced.defs#ageAssuranceState";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=getAgeAssuranceState.d.ts.map