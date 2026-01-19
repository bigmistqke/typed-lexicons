declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.communication.defs";
    readonly defs: {
        readonly templateView: {
            readonly type: "object";
            readonly required: readonly ["id", "name", "contentMarkdown", "disabled", "lastUpdatedBy", "createdAt", "updatedAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name of the template.";
                };
                readonly subject: {
                    readonly type: "string";
                    readonly description: "Content of the template, can contain markdown and variable placeholders.";
                };
                readonly contentMarkdown: {
                    readonly type: "string";
                    readonly description: "Subject of the message, used in emails.";
                };
                readonly disabled: {
                    readonly type: "boolean";
                };
                readonly lang: {
                    readonly type: "string";
                    readonly format: "language";
                    readonly description: "Message language.";
                };
                readonly lastUpdatedBy: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "DID of the user who last updated the template.";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map