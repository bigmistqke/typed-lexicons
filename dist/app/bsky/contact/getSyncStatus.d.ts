declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.getSyncStatus";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "Gets the user's current contact import status. Requires authentication.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {};
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly syncStatus: {
                            readonly description: "If present, indicates the user has imported their contacts. If not present, indicates the user never used the feature or called `app.bsky.contact.removeData` and didn't import again since.";
                            readonly type: "ref";
                            readonly ref: "app.bsky.contact.defs#syncStatus";
                        };
                    };
                };
            };
            readonly errors: readonly [{
                readonly name: "InvalidDid";
            }, {
                readonly name: "InternalError";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=getSyncStatus.d.ts.map