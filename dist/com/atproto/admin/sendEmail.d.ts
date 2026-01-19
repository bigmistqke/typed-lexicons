declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.admin.sendEmail";
    readonly defs: {
        readonly main: {
            readonly type: "procedure";
            readonly description: "Send email to a user's account email address.";
            readonly input: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["recipientDid", "content", "senderDid"];
                    readonly properties: {
                        readonly recipientDid: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly content: {
                            readonly type: "string";
                        };
                        readonly subject: {
                            readonly type: "string";
                        };
                        readonly senderDid: {
                            readonly type: "string";
                            readonly format: "did";
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly description: "Additional comment by the sender that won't be used in the email itself but helpful to provide more context for moderators/reviewers";
                        };
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["sent"];
                    readonly properties: {
                        readonly sent: {
                            readonly type: "boolean";
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=sendEmail.d.ts.map