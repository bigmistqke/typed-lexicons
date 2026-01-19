declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.server.deactivateAccount";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {
                        readonly deleteAfter: {
                            readonly type: "string";
                            readonly format: "datetime";
                            readonly description: "A recommendation to server as to how long they should hold onto the deactivated account before deleting.";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=deactivateAccount.d.ts.map