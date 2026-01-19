declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.repo.importRepo";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set.";
            readonly input: {
                readonly encoding: "application/vnd.ipld.car";
            };
        };
    };
};
export default _default;
//# sourceMappingURL=importRepo.d.ts.map