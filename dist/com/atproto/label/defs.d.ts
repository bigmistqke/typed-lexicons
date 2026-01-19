declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.label.defs";
    readonly defs: {
        readonly label: {
            readonly type: "object";
            readonly description: "Metadata tag on an atproto resource (eg, repo or record).";
            readonly required: readonly ["src", "uri", "val", "cts"];
            readonly properties: {
                readonly ver: {
                    readonly type: "integer";
                    readonly description: "The AT Protocol version of the label object.";
                };
                readonly src: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "DID of the actor who created this label.";
                };
                readonly uri: {
                    readonly type: "string";
                    readonly format: "uri";
                    readonly description: "AT URI of the record, repository (account), or other resource that this label applies to.";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                    readonly description: "Optionally, CID specifying the specific version of 'uri' resource this label applies to.";
                };
                readonly val: {
                    readonly type: "string";
                    readonly maxLength: 128;
                    readonly description: "The short string name of the value or type of this label.";
                };
                readonly neg: {
                    readonly type: "boolean";
                    readonly description: "If true, this is a negation label, overwriting a previous label.";
                };
                readonly cts: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp when this label was created.";
                };
                readonly exp: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp at which this label expires (no longer applies).";
                };
                readonly sig: {
                    readonly type: "bytes";
                    readonly description: "Signature of dag-cbor encoded label.";
                };
            };
        };
        readonly selfLabels: {
            readonly type: "object";
            readonly description: "Metadata tags on an atproto record, published by the author within the record.";
            readonly required: readonly ["values"];
            readonly properties: {
                readonly values: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#selfLabel";
                    };
                    readonly maxLength: 10;
                };
            };
        };
        readonly selfLabel: {
            readonly type: "object";
            readonly description: "Metadata tag on an atproto record, published by the author within the record. Note that schemas should use #selfLabels, not #selfLabel.";
            readonly required: readonly ["val"];
            readonly properties: {
                readonly val: {
                    readonly type: "string";
                    readonly maxLength: 128;
                    readonly description: "The short string name of the value or type of this label.";
                };
            };
        };
        readonly labelValueDefinition: {
            readonly type: "object";
            readonly description: "Declares a label value and its expected interpretations and behaviors.";
            readonly required: readonly ["identifier", "severity", "blurs", "locales"];
            readonly properties: {
                readonly identifier: {
                    readonly type: "string";
                    readonly description: "The value of the label being defined. Must only include lowercase ascii and the '-' character ([a-z-]+).";
                    readonly maxLength: 100;
                    readonly maxGraphemes: 100;
                };
                readonly severity: {
                    readonly type: "string";
                    readonly description: "How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing.";
                    readonly knownValues: readonly ["inform", "alert", "none"];
                };
                readonly blurs: {
                    readonly type: "string";
                    readonly description: "What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing.";
                    readonly knownValues: readonly ["content", "media", "none"];
                };
                readonly defaultSetting: {
                    readonly type: "string";
                    readonly description: "The default setting for this label.";
                    readonly knownValues: readonly ["ignore", "warn", "hide"];
                    readonly default: "warn";
                };
                readonly adultOnly: {
                    readonly type: "boolean";
                    readonly description: "Does the user need to have adult content enabled in order to configure this label?";
                };
                readonly locales: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#labelValueDefinitionStrings";
                    };
                };
            };
        };
        readonly labelValueDefinitionStrings: {
            readonly type: "object";
            readonly description: "Strings which describe the label in the UI, localized into a specific language.";
            readonly required: readonly ["lang", "name", "description"];
            readonly properties: {
                readonly lang: {
                    readonly type: "string";
                    readonly description: "The code of the language these strings are written in.";
                    readonly format: "language";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "A short human-readable name for the label.";
                    readonly maxGraphemes: 64;
                    readonly maxLength: 640;
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "A longer description of what the label means and why it might be applied.";
                    readonly maxGraphemes: 10000;
                    readonly maxLength: 100000;
                };
            };
        };
        readonly labelValue: {
            readonly type: "string";
            readonly knownValues: readonly ["!hide", "!no-promote", "!warn", "!no-unauthenticated", "dmca-violation", "doxxing", "porn", "sexual", "nudity", "nsfl", "gore"];
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map