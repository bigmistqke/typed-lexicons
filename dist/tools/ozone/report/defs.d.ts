declare const _default: {
    readonly lexicon: 1;
    readonly id: "tools.ozone.report.defs";
    readonly defs: {
        readonly reasonType: {
            readonly type: "string";
            readonly knownValues: readonly ["tools.ozone.report.defs#reasonAppeal", "tools.ozone.report.defs#reasonOther", "tools.ozone.report.defs#reasonViolenceAnimal", "tools.ozone.report.defs#reasonViolenceThreats", "tools.ozone.report.defs#reasonViolenceGraphicContent", "tools.ozone.report.defs#reasonViolenceGlorification", "tools.ozone.report.defs#reasonViolenceExtremistContent", "tools.ozone.report.defs#reasonViolenceTrafficking", "tools.ozone.report.defs#reasonViolenceOther", "tools.ozone.report.defs#reasonSexualAbuseContent", "tools.ozone.report.defs#reasonSexualNCII", "tools.ozone.report.defs#reasonSexualDeepfake", "tools.ozone.report.defs#reasonSexualAnimal", "tools.ozone.report.defs#reasonSexualUnlabeled", "tools.ozone.report.defs#reasonSexualOther", "tools.ozone.report.defs#reasonChildSafetyCSAM", "tools.ozone.report.defs#reasonChildSafetyGroom", "tools.ozone.report.defs#reasonChildSafetyPrivacy", "tools.ozone.report.defs#reasonChildSafetyHarassment", "tools.ozone.report.defs#reasonChildSafetyOther", "tools.ozone.report.defs#reasonHarassmentTroll", "tools.ozone.report.defs#reasonHarassmentTargeted", "tools.ozone.report.defs#reasonHarassmentHateSpeech", "tools.ozone.report.defs#reasonHarassmentDoxxing", "tools.ozone.report.defs#reasonHarassmentOther", "tools.ozone.report.defs#reasonMisleadingBot", "tools.ozone.report.defs#reasonMisleadingImpersonation", "tools.ozone.report.defs#reasonMisleadingSpam", "tools.ozone.report.defs#reasonMisleadingScam", "tools.ozone.report.defs#reasonMisleadingElections", "tools.ozone.report.defs#reasonMisleadingOther", "tools.ozone.report.defs#reasonRuleSiteSecurity", "tools.ozone.report.defs#reasonRuleProhibitedSales", "tools.ozone.report.defs#reasonRuleBanEvasion", "tools.ozone.report.defs#reasonRuleOther", "tools.ozone.report.defs#reasonSelfHarmContent", "tools.ozone.report.defs#reasonSelfHarmED", "tools.ozone.report.defs#reasonSelfHarmStunts", "tools.ozone.report.defs#reasonSelfHarmSubstances", "tools.ozone.report.defs#reasonSelfHarmOther"];
        };
        readonly reasonAppeal: {
            readonly type: "token";
            readonly description: "Appeal a previously taken moderation action";
        };
        readonly reasonOther: {
            readonly type: "token";
            readonly description: "An issue not included in these options";
        };
        readonly reasonViolenceAnimal: {
            readonly type: "token";
            readonly description: "Animal welfare violations";
        };
        readonly reasonViolenceThreats: {
            readonly type: "token";
            readonly description: "Threats or incitement";
        };
        readonly reasonViolenceGraphicContent: {
            readonly type: "token";
            readonly description: "Graphic violent content";
        };
        readonly reasonViolenceGlorification: {
            readonly type: "token";
            readonly description: "Glorification of violence";
        };
        readonly reasonViolenceExtremistContent: {
            readonly type: "token";
            readonly description: "Extremist content. These reports will be sent only be sent to the application's Moderation Authority.";
        };
        readonly reasonViolenceTrafficking: {
            readonly type: "token";
            readonly description: "Human trafficking";
        };
        readonly reasonViolenceOther: {
            readonly type: "token";
            readonly description: "Other violent content";
        };
        readonly reasonSexualAbuseContent: {
            readonly type: "token";
            readonly description: "Adult sexual abuse content";
        };
        readonly reasonSexualNCII: {
            readonly type: "token";
            readonly description: "Non-consensual intimate imagery";
        };
        readonly reasonSexualDeepfake: {
            readonly type: "token";
            readonly description: "Deepfake adult content";
        };
        readonly reasonSexualAnimal: {
            readonly type: "token";
            readonly description: "Animal sexual abuse";
        };
        readonly reasonSexualUnlabeled: {
            readonly type: "token";
            readonly description: "Unlabelled adult content";
        };
        readonly reasonSexualOther: {
            readonly type: "token";
            readonly description: "Other sexual violence content";
        };
        readonly reasonChildSafetyCSAM: {
            readonly type: "token";
            readonly description: "Child sexual abuse material (CSAM). These reports will be sent only be sent to the application's Moderation Authority.";
        };
        readonly reasonChildSafetyGroom: {
            readonly type: "token";
            readonly description: "Grooming or predatory behavior. These reports will be sent only be sent to the application's Moderation Authority.";
        };
        readonly reasonChildSafetyPrivacy: {
            readonly type: "token";
            readonly description: "Privacy violation involving a minor";
        };
        readonly reasonChildSafetyHarassment: {
            readonly type: "token";
            readonly description: "Harassment or bullying of minors";
        };
        readonly reasonChildSafetyOther: {
            readonly type: "token";
            readonly description: "Other child safety. These reports will be sent only be sent to the application's Moderation Authority.";
        };
        readonly reasonHarassmentTroll: {
            readonly type: "token";
            readonly description: "Trolling";
        };
        readonly reasonHarassmentTargeted: {
            readonly type: "token";
            readonly description: "Targeted harassment";
        };
        readonly reasonHarassmentHateSpeech: {
            readonly type: "token";
            readonly description: "Hate speech";
        };
        readonly reasonHarassmentDoxxing: {
            readonly type: "token";
            readonly description: "Doxxing";
        };
        readonly reasonHarassmentOther: {
            readonly type: "token";
            readonly description: "Other harassing or hateful content";
        };
        readonly reasonMisleadingBot: {
            readonly type: "token";
            readonly description: "Fake account or bot";
        };
        readonly reasonMisleadingImpersonation: {
            readonly type: "token";
            readonly description: "Impersonation";
        };
        readonly reasonMisleadingSpam: {
            readonly type: "token";
            readonly description: "Spam";
        };
        readonly reasonMisleadingScam: {
            readonly type: "token";
            readonly description: "Scam";
        };
        readonly reasonMisleadingElections: {
            readonly type: "token";
            readonly description: "False information about elections";
        };
        readonly reasonMisleadingOther: {
            readonly type: "token";
            readonly description: "Other misleading content";
        };
        readonly reasonRuleSiteSecurity: {
            readonly type: "token";
            readonly description: "Hacking or system attacks";
        };
        readonly reasonRuleProhibitedSales: {
            readonly type: "token";
            readonly description: "Promoting or selling prohibited items or services";
        };
        readonly reasonRuleBanEvasion: {
            readonly type: "token";
            readonly description: "Banned user returning";
        };
        readonly reasonRuleOther: {
            readonly type: "token";
            readonly description: "Other";
        };
        readonly reasonSelfHarmContent: {
            readonly type: "token";
            readonly description: "Content promoting or depicting self-harm";
        };
        readonly reasonSelfHarmED: {
            readonly type: "token";
            readonly description: "Eating disorders";
        };
        readonly reasonSelfHarmStunts: {
            readonly type: "token";
            readonly description: "Dangerous challenges or activities";
        };
        readonly reasonSelfHarmSubstances: {
            readonly type: "token";
            readonly description: "Dangerous substances or drug abuse";
        };
        readonly reasonSelfHarmOther: {
            readonly type: "token";
            readonly description: "Other dangerous content";
        };
    };
};
export default _default;
//# sourceMappingURL=defs.d.ts.map