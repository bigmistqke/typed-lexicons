declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.removeData";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Removes all stored hashes used for contact matching, existing matches, and sync status. Requires authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {};
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
//# sourceMappingURL=removeData.d.ts.map