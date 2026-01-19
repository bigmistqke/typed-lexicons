declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.communication.updateTemplate";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Administrative action to update an existing communication template. Allows passing partial fields to patch specific fields only.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["id"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the template to be updated.";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the template.";
                        };
                        readonly lang: {
                            readonly type: "string";
                            readonly format: "language";
                            readonly description: "Message language.";
                        };
                        readonly contentMarkdown: {
                            readonly type: "string";
                            readonly description: "Content of the template, markdown supported, can contain variable placeholders.";
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly description: "Subject of the message, used in emails.";
                        };
                        readonly updatedBy: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "DID of the user who is updating the template.";
                        };
                        readonly disabled: {
                            readonly type: "boolean";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "ref";
                    readonly ref: "tools.ozone.communication.defs#templateView";
                };
            };
            readonly errors: readonly [{
                readonly name: "DuplicateTemplateName";
            }];
        };
    };
};
export default _default;
//# sourceMappingURL=updateTemplate.d.ts.map