declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.deleteSession";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Delete the current session. Requires auth using the 'refreshJwt' (not the 'accessJwt').";
            readonly errors: readonly [{
                readonly name: "InvalidToken";
            }, {
                readonly name: "ExpiredToken";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=deleteSession.d.ts.map