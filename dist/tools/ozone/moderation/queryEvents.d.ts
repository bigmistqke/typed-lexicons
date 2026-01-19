declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.moderation.queryEvents";
    readonly defs: {
        readonly main: {
            readonly type: "query";
            readonly description: "List moderation events related to a subject.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly types: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "The types of events (fully qualified string in the format of tools.ozone.moderation.defs#modEvent<name>) to filter by. If not specified, all events are returned.";
                    };
                    readonly createdBy: {
                        readonly type: "string";
                        readonly format: "did";
                    };
                    readonly sortDirection: {
                        readonly type: "string";
                        readonly default: "desc";
                        readonly enum: readonly ["asc", "desc"];
                        readonly description: "Sort direction for the events. Defaults to descending order of created at timestamp.";
                    };
                    readonly createdAfter: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Retrieve events created after a given timestamp";
                    };
                    readonly createdBefore: {
                        readonly type: "string";
                        readonly format: "datetime";
                        readonly description: "Retrieve events created before a given timestamp";
                    };
                    readonly subject: {
                        readonly type: "string";
                        readonly format: "uri";
                    };
                    readonly collections: {
                        readonly type: "array";
                        readonly maxLength: 20;
                        readonly description: "If specified, only events where the subject belongs to the given collections will be returned. When subjectType is set to 'account', this will be ignored.";
                        readonly items: {
                            readonly type: "string";
                            readonly format: "nsid";
                        };
                    };
                    readonly subjectType: {
                        readonly type: "string";
                        readonly description: "If specified, only events where the subject is of the given type (account or record) will be returned. When this is set to 'account' the 'collections' parameter will be ignored. When includeAllUserRecords or subject is set, this will be ignored.";
                        readonly knownValues: readonly ["account", "record"];
                    };
                    readonly includeAllUserRecords: {
                        readonly type: "boolean";
                        readonly default: false;
                        readonly description: "If true, events on all record types (posts, lists, profile etc.) or records from given 'collections' param, owned by the did are returned.";
                    };
                    readonly limit: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 50;
                    };
                    readonly hasComment: {
                        readonly type: "boolean";
                        readonly description: "If true, only events with comments are returned";
                    };
                    readonly comment: {
                        readonly type: "string";
                        readonly description: "If specified, only events with comments containing the keyword are returned. Apply || separator to use multiple keywords and match using OR condition.";
                    };
                    readonly addedLabels: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "If specified, only events where all of these labels were added are returned";
                    };
                    readonly removedLabels: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "If specified, only events where all of these labels were removed are returned";
                    };
                    readonly addedTags: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "If specified, only events where all of these tags were added are returned";
                    };
                    readonly removedTags: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "If specified, only events where all of these tags were removed are returned";
                    };
                    readonly reportTypes: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly policies: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "If specified, only events where the action policies match any of the given policies are returned";
                        };
                    };
                    readonly modTool: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "If specified, only events where the modTool name matches any of the given values are returned";
                    };
                    readonly batchId: {
                        readonly type: "string";
                        readonly description: "If specified, only events where the batchId matches the given value are returned";
                    };
                    readonly ageAssuranceState: {
                        readonly type: "string";
                        readonly description: "If specified, only events where the age assurance state matches the given value are returned";
                        readonly knownValues: readonly ["pending", "assured", "unknown", "reset", "blocked"];
                    };
                    readonly withStrike: {
                        readonly type: "boolean";
                        readonly description: "If specified, only events where strikeCount value is set are returned.";
                    };
                    readonly cursor: {
                        readonly type: "string";
                    };
                };
            };
            readonly output: {
                readonly encoding: "application/json";
                readonly schema: {
                    readonly type: "object";
                    readonly required: readonly ["events"];
                    readonly properties: {
                        readonly cursor: {
                            readonly type: "string";
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "ref";
                                readonly ref: "tools.ozone.moderation.defs#modEventView";
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=queryEvents.d.ts.map