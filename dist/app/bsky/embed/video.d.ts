declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.embed.video";
    readonly description: "A video embedded in a Bluesky record (eg, a post).";
    readonly defs: {
        readonly main: {
            readonly type: "object";
            readonly required: readonly ["video"];
            readonly properties: {
                readonly video: {
                    readonly type: "blob";
                    readonly description: "The mp4 video file. May be up to 100mb, formerly limited to 50mb.";
                    readonly accept: readonly ["video/mp4"];
                    readonly maxSize: 100000000;
                };
                readonly captions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#caption";
                    };
                    readonly maxLength: 20;
                };
                readonly alt: {
                    readonly type: "string";
                    readonly description: "Alt text description of the video, for accessibility.";
                    readonly maxGraphemes: 1000;
                    readonly maxLength: 10000;
                };
                readonly aspectRatio: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.embed.defs#aspectRatio";
                };
            };
        };
        readonly caption: {
            readonly type: "object";
            readonly required: readonly ["lang", "file"];
            readonly properties: {
                readonly lang: {
                    readonly type: "string";
                    readonly format: "language";
                };
                readonly file: {
                    readonly type: "blob";
                    readonly accept: readonly ["text/vtt"];
                    readonly maxSize: 20000;
                };
            };
        };
        readonly view: {
            readonly type: "object";
            readonly required: readonly ["cid", "playlist"];
            readonly properties: {
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly playlist: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly thumbnail: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly alt: {
                    readonly type: "string";
                    readonly maxGraphemes: 1000;
                    readonly maxLength: 10000;
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
//# sourceMappingURL=video.d.ts.map