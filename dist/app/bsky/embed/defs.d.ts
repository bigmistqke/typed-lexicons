declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.embed.defs";
    readonly defs: {
        readonly aspectRatio: {
            readonly type: "object";
            readonly description: "width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit.";
            readonly required: readonly ["width", "height"];
            readonly properties: {
                readonly width: {
                    readonly type: "integer";
                    readonly minimum: 1;
                };
                readonly height: {
                    readonly type: "integer";
                    readonly minimum: 1;
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map