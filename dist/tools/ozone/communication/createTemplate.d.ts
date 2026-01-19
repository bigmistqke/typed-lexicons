declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.communication.createTemplate";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Administrative action to create a new, re-usable communication (email for now) template.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["subject", "contentMarkdown", "name"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the template.";
                        };
                        readonly contentMarkdown: {
                            readonly type: "string";
                            readonly description: "Content of the template, markdown supported, can contain variable placeholders.";
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly description: "Subject of the message, used in emails.";
                        };
                        readonly lang: {
                            readonly type: "string";
                            readonly format: "language";
                            readonly description: "Message language.";
                        };
                        readonly createdBy: {
                            readonly type: "string";
                            readonly format: "did";
                            readonly description: "DID of the user who is creating the template.";
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
//# sourceMappingURL=createTemplate.d.ts.map