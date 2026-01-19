declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.ageassurance.defs";
    readonly defs: {
        readonly access: {
            readonly description: "The access level granted based on Age Assurance data we've processed.";
            readonly type: "string";
            readonly knownValues: readonly ["unknown", "none", "safe", "full"];
        };
        readonly status: {
            readonly type: "string";
            readonly description: "The status of the Age Assurance process.";
            readonly knownValues: readonly ["unknown", "pending", "assured", "blocked"];
        };
        readonly state: {
            readonly type: "object";
            readonly description: "The user's computed Age Assurance state.";
            readonly required: readonly ["status", "access"];
            readonly properties: {
                readonly lastInitiatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The timestamp when this state was last updated.";
                };
                readonly status: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#status";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly stateMetadata: {
            readonly type: "object";
            readonly description: "Additional metadata needed to compute Age Assurance state client-side.";
            readonly required: readonly [];
            readonly properties: {
                readonly accountCreatedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The account creation timestamp.";
                };
            };
        };
        readonly config: {
            readonly type: "object";
            readonly description: "";
            readonly required: readonly ["regions"];
            readonly properties: {
                readonly regions: {
                    readonly type: "array";
                    readonly description: "The per-region Age Assurance configuration.";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.ageassurance.defs#configRegion";
                    };
                };
            };
        };
        readonly configRegion: {
            readonly type: "object";
            readonly description: "The Age Assurance configuration for a specific region.";
            readonly required: readonly ["countryCode", "minAccessAge", "rules"];
            readonly properties: {
                readonly countryCode: {
                    readonly type: "string";
                    readonly description: "The ISO 3166-1 alpha-2 country code this configuration applies to.";
                };
                readonly regionCode: {
                    readonly type: "string";
                    readonly description: "The ISO 3166-2 region code this configuration applies to. If omitted, the configuration applies to the entire country.";
                };
                readonly minAccessAge: {
                    readonly type: "integer";
                    readonly description: "The minimum age (as a whole integer) required to use Bluesky in this region.";
                };
                readonly rules: {
                    readonly type: "array";
                    readonly description: "The ordered list of Age Assurance rules that apply to this region. Rules should be applied in order, and the first matching rule determines the access level granted. The rules array should always include a default rule as the last item.";
                    readonly items: {
                        readonly type: "union";
                        readonly refs: readonly ["#configRegionRuleDefault", "#configRegionRuleIfDeclaredOverAge", "#configRegionRuleIfDeclaredUnderAge", "#configRegionRuleIfAssuredOverAge", "#configRegionRuleIfAssuredUnderAge", "#configRegionRuleIfAccountNewerThan", "#configRegionRuleIfAccountOlderThan"];
                    };
                };
            };
        };
        readonly configRegionRuleDefault: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies by default.";
            readonly required: readonly ["access"];
            readonly properties: {
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly configRegionRuleIfDeclaredOverAge: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies if the user has declared themselves equal-to or over a certain age.";
            readonly required: readonly ["age", "access"];
            readonly properties: {
                readonly age: {
                    readonly type: "integer";
                    readonly description: "The age threshold as a whole integer.";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly configRegionRuleIfDeclaredUnderAge: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies if the user has declared themselves under a certain age.";
            readonly required: readonly ["age", "access"];
            readonly properties: {
                readonly age: {
                    readonly type: "integer";
                    readonly description: "The age threshold as a whole integer.";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly configRegionRuleIfAssuredOverAge: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies if the user has been assured to be equal-to or over a certain age.";
            readonly required: readonly ["age", "access"];
            readonly properties: {
                readonly age: {
                    readonly type: "integer";
                    readonly description: "The age threshold as a whole integer.";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly configRegionRuleIfAssuredUnderAge: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies if the user has been assured to be under a certain age.";
            readonly required: readonly ["age", "access"];
            readonly properties: {
                readonly age: {
                    readonly type: "integer";
                    readonly description: "The age threshold as a whole integer.";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly configRegionRuleIfAccountNewerThan: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies if the account is equal-to or newer than a certain date.";
            readonly required: readonly ["date", "access"];
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date threshold as a datetime string.";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly configRegionRuleIfAccountOlderThan: {
            readonly type: "object";
            readonly description: "Age Assurance rule that applies if the account is older than a certain date.";
            readonly required: readonly ["date", "access"];
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date threshold as a datetime string.";
                };
                readonly access: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.ageassurance.defs#access";
                };
            };
        };
        readonly event: {
            readonly type: "object";
            readonly description: "Object used to store Age Assurance data in stash.";
            readonly required: readonly ["createdAt", "status", "access", "attemptId", "countryCode"];
            readonly properties: {
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "The date and time of this write operation.";
                };
                readonly attemptId: {
                    readonly type: "string";
                    readonly description: "The unique identifier for this instance of the Age Assurance flow, in UUID format.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the Age Assurance process.";
                    readonly knownValues: readonly ["unknown", "pending", "assured", "blocked"];
                };
                readonly access: {
                    readonly description: "The access level granted based on Age Assurance data we've processed.";
                    readonly type: "string";
                    readonly knownValues: readonly ["unknown", "none", "safe", "full"];
                };
                readonly countryCode: {
                    readonly type: "string";
                    readonly description: "The ISO 3166-1 alpha-2 country code provided when beginning the Age Assurance flow.";
                };
                readonly regionCode: {
                    readonly type: "string";
                    readonly description: "The ISO 3166-2 region code provided when beginning the Age Assurance flow.";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email used for Age Assurance.";
                };
                readonly initIp: {
                    readonly type: "string";
                    readonly description: "The IP address used when initiating the Age Assurance flow.";
                };
                readonly initUa: {
                    readonly type: "string";
                    readonly description: "The user agent used when initiating the Age Assurance flow.";
                };
                readonly completeIp: {
                    readonly type: "string";
                    readonly description: "The IP address used when completing the Age Assurance flow.";
                };
                readonly completeUa: {
                    readonly type: "string";
                    readonly description: "The user agent used when completing the Age Assurance flow.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map