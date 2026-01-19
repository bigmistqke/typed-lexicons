declare const _default: {
    readonly lexicon: 1;
    readonly id: "app.bsky.graph.defs";
    readonly defs: {
        readonly listViewBasic: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "name", "purpose"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                };
                readonly purpose: {
                    readonly type: "ref";
                    readonly ref: "#listPurpose";
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly listItemCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "#listViewerState";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly listView: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "creator", "name", "purpose", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly creator: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                };
                readonly purpose: {
                    readonly type: "ref";
                    readonly ref: "#listPurpose";
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxGraphemes: 300;
                    readonly maxLength: 3000;
                };
                readonly descriptionFacets: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.richtext.facet";
                    };
                };
                readonly avatar: {
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly listItemCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly viewer: {
                    readonly type: "ref";
                    readonly ref: "#listViewerState";
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly listItemView: {
            readonly type: "object";
            readonly required: readonly ["uri", "subject"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly subject: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileView";
                };
            };
        };
        readonly starterPackView: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "record", "creator", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly record: {
                    readonly type: "unknown";
                };
                readonly creator: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewBasic";
                };
                readonly list: {
                    readonly type: "ref";
                    readonly ref: "#listViewBasic";
                };
                readonly listItemsSample: {
                    readonly type: "array";
                    readonly maxLength: 12;
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#listItemView";
                    };
                };
                readonly feeds: {
                    readonly type: "array";
                    readonly maxLength: 3;
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "app.bsky.feed.defs#generatorView";
                    };
                };
                readonly joinedWeekCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly joinedAllTimeCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly starterPackViewBasic: {
            readonly type: "object";
            readonly required: readonly ["uri", "cid", "record", "creator", "indexedAt"];
            readonly properties: {
                readonly uri: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
                readonly cid: {
                    readonly type: "string";
                    readonly format: "cid";
                };
                readonly record: {
                    readonly type: "unknown";
                };
                readonly creator: {
                    readonly type: "ref";
                    readonly ref: "app.bsky.actor.defs#profileViewBasic";
                };
                readonly listItemCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly joinedWeekCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly joinedAllTimeCount: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly labels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "com.atproto.label.defs#label";
                    };
                };
                readonly indexedAt: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
            };
        };
        readonly listPurpose: {
            readonly type: "string";
            readonly knownValues: readonly ["app.bsky.graph.defs#modlist", "app.bsky.graph.defs#curatelist", "app.bsky.graph.defs#referencelist"];
        };
        readonly modlist: {
            readonly type: "token";
            readonly description: "A list of actors to apply an aggregate moderation action (mute/block) on.";
        };
        readonly curatelist: {
            readonly type: "token";
            readonly description: "A list of actors used for curation purposes such as list feeds or interaction gating.";
        };
        readonly referencelist: {
            readonly type: "token";
            readonly description: "A list of actors used for only for reference purposes such as within a starter pack.";
        };
        readonly listViewerState: {
            readonly type: "object";
            readonly properties: {
                readonly muted: {
                    readonly type: "boolean";
                };
                readonly blocked: {
                    readonly type: "string";
                    readonly format: "at-uri";
                };
            };
        };
        readonly notFoundActor: {
            readonly type: "object";
            readonly description: "indicates that a handle or DID could not be resolved";
            readonly required: readonly ["actor", "notFound"];
            readonly properties: {
                readonly actor: {
                    readonly type: "string";
                    readonly format: "at-identifier";
                };
                readonly notFound: {
                    readonly type: "boolean";
                    readonly const: true;
                };
            };
        };
        readonly relationship: {
            readonly type: "object";
            readonly description: "lists the bi-directional graph relationships between one actor (not indicated in the object), and the target actors (the DID included in the object)";
            readonly required: readonly ["did"];
            readonly properties: {
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly following: {
                    readonly type: "string";
                    readonly format: "at-uri";
                    readonly description: "if the actor follows this DID, this is the AT-URI of the follow record";
                };
                readonly followedBy: {
                    readonly type: "string";
                    readonly format: "at-uri";
                    readonly description: "if the actor is followed by this DID, contains the AT-URI of the follow record";
                };
                readonly blocking: {
                    readonly type: "string";
                    readonly format: "at-uri";
                    readonly description: "if the actor blocks this DID, this is the AT-URI of the block record";
                };
                readonly blockedBy: {
                    readonly type: "string";
                    readonly format: "at-uri";
                    readonly description: "if the actor is blocked by this DID, contains the AT-URI of the block record";
                };
                readonly blockingByList: {
                    readonly type: "string";
                    readonly format: "at-uri";
                    readonly description: "if the actor blocks this DID via a block list, this is the AT-URI of the listblock record";
                };
                readonly blockedByList: {
                    readonly type: "string";
                    readonly format: "at-uri";
                    readonly description: "if the actor is blocked by this DID via a block list, contains the AT-URI of the listblock record";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map