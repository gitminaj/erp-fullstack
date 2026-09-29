import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorType from "../auditor/auditorType.js";
import User from "../user.js"

export const AuditReport = sequelize.define(
    "AuditReport",
    {
        companyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fileNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Standard: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        ReportSubmissionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        auditType: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: AuditorType,
                key: "name",
            },
        },


        // Adequacy Checklist
        auditPackreview: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        auditpackreviewRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        reportSubmission: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        reportSubmissionRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        AAF: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        AAFRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        NACE: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        NACERemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mandaysPerApplication: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        mandaysPerApplicationRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        changesManpower: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        changesManpowerRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        waiverRaised: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        waiverRaisedRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        confirmationScope: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        confirmationScopeRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        travelDetails: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        travelDetailsRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        attendanceSheet: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        attendanceSheetRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        filledDataRequestForm: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        filledDataRequestFormRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last12MonthsPerformance: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        last12MonthsPerformanceRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        iQAandMRM: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        iQAandMRMRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        customerScoreCard: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        customerScoreCardRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        customerComplaintDetails: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        customerComplaintDetailsRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        auditPlan: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        auditPlanRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        customerSpecificRequirement: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        customerSpecificRequirementRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        auditScheduleMention: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        auditScheduleToMentionRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coverageCustomer: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        coverageOfCustomerRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        supportFunctionAudited: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        supportFunctionAuditedRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        changesTeamLeader: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        changesInTeamLeaderRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shiftsCoveredDuring: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        allShiftsCoveredDuringRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        thirdspentManufacturing: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        thirdTimeSpentInManufacturingRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        auditSchedule: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        auditScheduleRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        verificationOEMComplaints: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        verificationOfOEMComplaintsRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        previousNCVerification: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        previousNCVerificationRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        availabilityOfScope: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        availabilityOfScopeRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        processesAuditSchedule: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        processesAuditScheduleRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        processesAudited: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        processesAudited: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        scopeExtensionJustified: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        scopeExtensionJustifiedRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        majorNCRaised: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        majorNcsRaisedRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nocRaisedDuringAudit: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        nocRaisedDuringTheAuditRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        recommendationSpecialAudit: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        recommendationOnSpecialAuditRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        recommendationSpecialAudit: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        recommendationSpecialAuditRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ncManagement: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        ncManagementRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rootCauseAnalysis: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        rootCauseAnalysisRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ncClosedResolved: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        ncClosedResolvedRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ChangesManpower: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        changesInManpowerRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        stageAuditWith90Days: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        stageIIauditWith90DaysRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        statusAOC: {
            type: DataTypes.ENUM("C", "NC", "NA"),
            allowNull: true,
        },
        statusOfAOCRemarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        }

    },
    {
        tableName: "certificate_information",
    }
);


AuditReport.belongsTo(User, {
    foreignKey: "createdBy",
    targetKey: "id"
});

AuditReport.belongsTo(AuditorType, {
    foreignKey: "auditType",
    targetKey: "name"
});

export default AuditReport;
