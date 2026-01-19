declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.getRepo";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Get details about a repository.";
            readonly parameters: {
                readonly type: "params";
                readonly required: readonly ["did"];
                readonly properties: {
                    readonly did: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.moderation.defs#repoViewDetail";
                };
            };
            readonly errors: readonly [{
                readonly name: "RepoNotFound";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getRepo.d.ts.map