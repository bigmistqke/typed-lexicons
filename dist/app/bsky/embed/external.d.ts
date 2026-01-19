declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.embed.external";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly description: "A representation of some externally linked content (eg, a URL and 'card'), embedded in a Bluesky record (eg, a post).";
            readonly required: readonly ["external"];
            readonly properties: {
                readonly external: {
                    readonly type: "ref";
                    readonly ref: "#external";
                };
            };
        };
        readonly external: {
            readonly type: "object";
            readonly required: readonly ["uri", "title", "description"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly thumb: {
                    readonly type: "blob";
                    readonly accept: readonly ["image/*"];
                    readonly maxSize: 1000000;
                };
            };
        };
        readonly view: {
            readonly type: "object";
            readonly required: readonly ["external"];
            readonly properties: {
                readonly external: {
                    readonly type: "ref";
                    readonly ref: "#viewExternal";
                };
            };
        };
        readonly viewExternal: {
            readonly type: "object";
            readonly required: readonly ["uri", "title", "description"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly thumb: {
                    readonly type: "string";
                    readonly format: "uri";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=external.d.ts.map