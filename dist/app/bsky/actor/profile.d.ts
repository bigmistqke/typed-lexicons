declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.actor.profile";
    readonly defs: {
        readonly main: {
            readonly type: "record";
            readonly description: "A declaration of a Bluesky account profile.";
            readonly key: "literal:self";
            readonly record: {
                readonly type: "object";
                readonly properties: {
                    readonly displayName: {
                        readonly type: "string";
                        readonly maxGraphemes: 64;
                        readonly maxLength: 640;
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Free-form profile description text.";
                        readonly maxGraphemes: 256;
                        readonly maxLength: 2560;
                    };
                    readonly pronouns: {
                        readonly type: "string";
                        readonly description: "Free-form pronouns text.";
                        readonly maxGraphemes: 20;
                        readonly maxLength: 200;
                    };
                    readonly website: {
                        readonly type: "string";
                        readonly format: "uri";
                    };
                    readonly avatar: {
                        readonly type: "blob";
                        readonly description: "Small image to be displayed next to posts from account. AKA, 'profile picture'";
                        readonly accept: readonly ["image/png", "image/jpeg"];
                        readonly maxSize: 1000000;
                    };
                    readonly banner: {
                        readonly type: "blob";
                        readonly description: "Larger horizontal image to display behind profile view.";
                        readonly accept: readonly ["image/png", "image/jpeg"];
                        readonly maxSize: 1000000;
                    };
                    readonly labels: {
                        readonly type: "union";
                        readonly description: "Self-label values, specific to the Bluesky application, on the overall account.";
                        readonly refs: readonly ["com.atproto.label.defs#selfLabels"];
                    };
                    readonly joinedViaStarterPack: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.repo.strongRef";
                    };
                    readonly pinnedPost: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.repo.strongRef";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "datetime";
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=profile.d.ts.map