declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.notification.registerPush";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Register to receive push notifications, via a specified service, for the requesting account. Requires auth.";
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
                        readonly ageRestricted: {
                            readonly type: "boolean";
                            readonly description: "Set to true when the actor is age restricted";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=registerPush.d.ts.map