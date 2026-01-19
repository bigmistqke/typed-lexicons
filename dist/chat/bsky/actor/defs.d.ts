declare const _default: {
    readonly lexicon: 1;
    readonly id: "chat.bsky.actor.defs";
    readonly defs: {
        readonly profileViewBasic: {
            readonly type: "object";
            readonly required: readonly ["did", "handle"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly maxGraphemes: 64;
                    readonly maxLength: 640;
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly associated: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileAssociated";
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#viewerState";
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly chatDisabled: {
                    readonly type: "boolean";
                    readonly description: "Set to true when the actor cannot actively participate in conversations";
                };
                readonly verification: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#verificationState";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map