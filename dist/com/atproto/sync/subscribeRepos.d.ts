declare const _default: {
    readonly lexicon: 1;
    readonly id: "com.atproto.sync.subscribeRepos";
    readonly defs: {
        readonly main: {
            readonly type: "subscription";
            readonly description: "Repository event stream, aka Firehose endpoint. Outputs repo commits with diff data, and identity update events, for all repositories on the current server. See the atproto specifications for details around stream sequencing, repo versioning, CAR diff format, and more. Public and does not require auth; implemented by PDS and Relay.";
            readonly parameters: {
                readonly type: "params";
                readonly properties: {
                    readonly cursor: {
                        readonly type: "integer";
                        readonly description: "The last known event seq number to backfill from.";
                    };
                };
            };
            readonly message: {
                readonly schema: {
                    readonly type: "union";
                    readonly refs: readonly ["#commit", "#sync", "#identity", "#account", "#info"];
                };
            };
            readonly errors: readonly [{
                readonly name: "FutureCursor";
            }, {
                readonly name: "ConsumerTooSlow";
                readonly description: "If the consumer of the stream can not keep up with events, and a backlog gets too large, the server will drop the connection.";
            }];
        };
        readonly commit: {
            readonly type: "object";
            readonly description: "Represents an update of repository state. Note that empty commits are allowed, which include no repo data changes, but an update to rev and signature.";
            readonly required: readonly ["seq", "rebase", "tooBig", "repo", "commit", "rev", "since", "blocks", "ops", "blobs", "time"];
            readonly nullable: readonly ["since"];
            readonly properties: {
                readonly seq: {
                    readonly type: "integer";
                    readonly description: "The stream sequence number of this message.";
                };
                readonly rebase: {
                    readonly type: "boolean";
                    readonly description: "DEPRECATED -- unused";
                };
                readonly tooBig: {
                    readonly type: "boolean";
                    readonly description: "DEPRECATED -- replaced by #sync event and data limits. Indicates that this commit contained too many ops, or data size was too large. Consumers will need to make a separate request to get missing data.";
                };
                readonly repo: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "The repo this event comes from. Note that all other message types name this field 'did'.";
                };
                readonly commit: {
                    readonly type: "cid-link";
                    readonly description: "Repo commit object CID.";
                };
                readonly rev: {
                    readonly type: "string";
                    readonly format: "tid";
                    readonly description: "The rev of the emitted commit. Note that this information is also in the commit object included in blocks, unless this is a tooBig event.";
                };
                readonly since: {
                    readonly type: "string";
                    readonly format: "tid";
                    readonly description: "The rev of the last emitted commit from this repo (if any).";
                };
                readonly blocks: {
                    readonly type: "bytes";
                    readonly description: "CAR file containing relevant blocks, as a diff since the previous repo state. The commit must be included as a block, and the commit block CID must be the first entry in the CAR header 'roots' list.";
                    readonly maxLength: 2000000;
                };
                readonly ops: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "ref";
                        readonly ref: "#repoOp";
                        readonly description: "List of repo mutation operations in this commit (eg, records created, updated, or deleted).";
                    };
                    readonly maxLength: 200;
                };
                readonly blobs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "cid-link";
                        readonly description: "DEPRECATED -- will soon always be empty. List of new blobs (by CID) referenced by records in this commit.";
                    };
                };
                readonly prevData: {
                    readonly type: "cid-link";
                    readonly description: "The root CID of the MST tree for the previous commit from this repo (indicated by the 'since' revision field in this message). Corresponds to the 'data' field in the repo commit object. NOTE: this field is effectively required for the 'inductive' version of firehose.";
                };
                readonly time: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp of when this message was originally broadcast.";
                };
            };
        };
        readonly sync: {
            readonly type: "object";
            readonly description: "Updates the repo to a new state, without necessarily including that state on the firehose. Used to recover from broken commit streams, data loss incidents, or in situations where upstream host does not know recent state of the repository.";
            readonly required: readonly ["seq", "did", "blocks", "rev", "time"];
            readonly properties: {
                readonly seq: {
                    readonly type: "integer";
                    readonly description: "The stream sequence number of this message.";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                    readonly description: "The account this repo event corresponds to. Must match that in the commit object.";
                };
                readonly blocks: {
                    readonly type: "bytes";
                    readonly description: "CAR file containing the commit, as a block. The CAR header must include the commit block CID as the first 'root'.";
                    readonly maxLength: 10000;
                };
                readonly rev: {
                    readonly type: "string";
                    readonly description: "The rev of the commit. This value must match that in the commit object.";
                };
                readonly time: {
                    readonly type: "string";
                    readonly format: "datetime";
                    readonly description: "Timestamp of when this message was originally broadcast.";
                };
            };
        };
        readonly identity: {
            readonly type: "object";
            readonly description: "Represents a change to an account's identity. Could be an updated handle, signing key, or pds hosting endpoint. Serves as a prod to all downstream services to refresh their identity cache.";
            readonly required: readonly ["seq", "did", "time"];
            readonly properties: {
                readonly seq: {
                    readonly type: "integer";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly time: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly handle: {
                    readonly type: "string";
                    readonly format: "handle";
                    readonly description: "The current handle for the account, or 'handle.invalid' if validation fails. This field is optional, might have been validated or passed-through from an upstream source. Semantics and behaviors for PDS vs Relay may evolve in the future; see atproto specs for more details.";
                };
            };
        };
        readonly account: {
            readonly type: "object";
            readonly description: "Represents a change to an account's status on a host (eg, PDS or Relay). The semantics of this event are that the status is at the host which emitted the event, not necessarily that at the currently active PDS. Eg, a Relay takedown would emit a takedown with active=false, even if the PDS is still active.";
            readonly required: readonly ["seq", "did", "time", "active"];
            readonly properties: {
                readonly seq: {
                    readonly type: "integer";
                };
                readonly did: {
                    readonly type: "string";
                    readonly format: "did";
                };
                readonly time: {
                    readonly type: "string";
                    readonly format: "datetime";
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly description: "Indicates that the account has a repository which can be fetched from the host that emitted this event.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "If active=false, this optional field indicates a reason for why the account is not active.";
                    readonly knownValues: readonly ["takendown", "suspended", "deleted", "deactivated", "desynchronized", "throttled"];
                };
            };
        };
        readonly info: {
            readonly type: "object";
            readonly required: readonly ["name"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly knownValues: readonly ["OutdatedCursor"];
                };
                readonly message: {
                    readonly type: "string";
                };
            };
        };
        readonly repoOp: {
            readonly type: "object";
            readonly description: "A repo operation, ie a mutation of a single record.";
            readonly required: readonly ["action", "path", "cid"];
            readonly nullable: readonly ["cid"];
            readonly properties: {
                readonly action: {
                    readonly type: "string";
                    readonly knownValues: readonly ["create", "update", "delete"];
                };
                readonly path: {
                    readonly type: "string";
                };
                readonly cid: {
                    readonly type: "cid-link";
                    readonly description: "For creates and updates, the new record CID. For deletions, null.";
                };
                readonly prev: {
                    readonly type: "cid-link";
                    readonly description: "For updates and deletes, the previous record CID (required for inductive firehose). For creations, field should not be defined.";
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=subscribeRepos.d.ts.map