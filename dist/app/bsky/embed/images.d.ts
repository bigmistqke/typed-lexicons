declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.embed.images";
    readonly description: "A set of images embedded in a Bluesky record (eg, a post).";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly required: readonly ["images"];
            readonly properties: {
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#image";
                    };
                    readonly maxLength: 4;
                };
            };
        };
        readonly image: {
            readonly type: "object";
            readonly required: readonly ["image", "alt"];
            readonly properties: {
                readonly image: {
                    readonly type: "blob";
                    readonly accept: readonly ["image/*"];
                    readonly maxSize: 1000000;
                };
                readonly alt: {
                    readonly type: "string";
                    readonly description: "Alt text description of the image, for accessibility.";
                };
                readonly aspectRatio: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.embed.defs#aspectRatio";
                };
            };
        };
        readonly view: {
            readonly type: "object";
            readonly required: readonly ["images"];
            readonly properties: {
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#viewImage";
                    };
                    readonly maxLength: 4;
                };
            };
        };
        readonly viewImage: {
            readonly type: "object";
            readonly required: readonly ["thumb", "fullsize", "alt"];
            readonly properties: {
                readonly thumb: {
                    readonly type: "string";
                    readonly format: "uri";
                    readonly description: "Fully-qualified URL where a thumbnail of the image can be fetched. For example, CDN location provided by the App View.";
                };
                readonly fullsize: {
                    readonly type: "string";
                    readonly format: "uri";
                    readonly description: "Fully-qualified URL where a large version of the image can be fetched. May or may not be the exact original blob. For example, CDN location provided by the App View.";
                };
                readonly alt: {
                    readonly type: "string";
                    readonly description: "Alt text description of the image, for accessibility.";
                };
                readonly aspectRatio: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.embed.defs#aspectRatio";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=images.d.ts.map