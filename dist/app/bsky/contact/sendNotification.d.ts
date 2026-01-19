declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.contact.sendNotification";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "System endpoint to send notifications related to contact imports. Requires role authentication.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["from", "to"];
                    readonly properties: {
                        readonly from: {
                            readonly description: "The DID of who this notification comes from.";
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly to: {
                            readonly description: "The DID of who this notification should go to.";
                            readonly type: "string";
                            readonly format: "did";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=sendNotification.d.ts.map