declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.unregisterPush";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "The inverse of registerPush - inform a specified service that push notifications should no longer be sent to the given token for the requesting account. Requires auth.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["serviceDid", "token", "platform", "appId"];
                    readonly properties: {
                        readonly serviceDid: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly token: {
                            readonly type: "string";
                        };
                        readonly platform: {
                            readonly type: "string";
                            readonly knownValues: readonly ["ios", "android", "web"];
                        };
                        readonly appId: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=unregisterPush.d.ts.map