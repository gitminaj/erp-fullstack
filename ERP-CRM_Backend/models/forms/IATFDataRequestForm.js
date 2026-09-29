import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorAllocation from "../auditor/auditorAllocation.js";
import LeadForm from "../leadForm.js";

export const IATFDataRequestForm = sequelize.define(
    "IATFDataRequestForm",
    {
        clientName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        plant: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.Sequelize.NOW,
        },

        // General Requirements

        changesWithInTheOrganisation: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        mainPlantPermanentFullTime: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        mainPlantContractualTemporary: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        mainPlantLanguageSpoken: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        RSLSARSLPermanentFullTime: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        RSLSARSLContractualTemporary: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        RSLSARSLLanguageSpoken: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        extendedSitesPermanentFullTime: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        extendedSitesContractualTemporary: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        extendedSitesLanguageSpoken: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        developmentOfNewProductsSinceLastAudit: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        SetupOfNewManufacturingProcesses: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        adaptationOfNewTechnologies: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        additionOfNewMachinery: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        changesInThePlantlayout: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        ChangesInQualityManualProcessManualSinceLastAudit: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        DetailsOfAnyConsultingServicesUsed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        // B. Internal Audits and MRM

        qualitySystemAuditDateOfLastAuditConducted: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        qualitySystemAuditObservationRaise: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        qualitySystemAuditStatusOfNCS: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        qualitySystemAuditReviewComments: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        manufacturingProcessAuditDateOfLastAuditConducted: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        manufacturingProcessAuditObservationRaise: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        manufacturingProcessAuditStatusOfNCS: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        manufacturingProcessAuditReviewComments: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        productAuditDateOfLastAuditConducted: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        productAuditObservationRaise: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        productAuditStatusOfNCS: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        productAuditReviewComments: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        lastMRMConducted: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        chairedBy: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        coverAgeofAgendaPoints: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        reviewComments: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        currentCustomersList: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        csrRevisedDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        newCustomersAdded: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerLostDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerScorecard: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerSatisfaction: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerComplaints: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerDissatisfaction: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        iatfCmsComplaint: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Performance and Quality Data (From Image 2)
        internalPerformanceData: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        qualityManual: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        processInteractionMatrix: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        rslSarslDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        rslSarslAuditByIrqs: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        proceduresManual: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        csrMatrixCascading: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Continual Improvement and Shift Patterns (From Image 3)
        continualImprovementProgress: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shiftTimingsA: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shiftTimingsB: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shiftTimingsC: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        generalShiftTimings: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Customer Specific Requirements Sheet
        customerRequirements: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Customer Information (From Image 1)
        currentCustomersList: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        csrRevisedDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        newCustomersAdded: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerLostDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerScorecard: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerSatisfaction: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerComplaints: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerDissatisfaction: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        iatfCmsComplaint: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Performance and Quality Data (From Image 2)
        internalPerformanceData: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        qualityManual: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        processInteractionMatrix: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        rslSarslDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        rslSarslAuditByIrqs: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        proceduresManual: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        csrMatrixCascading: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Continual Improvement and Shift Patterns (From Image 3)
        continualImprovementProgress: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shiftTimingsA: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shiftTimingsB: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        shiftTimingsC: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        generalShiftTimings: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        // Customer Specific Requirements Sheet
        customerRequirementsSrNo: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerRequirementsCustomer: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerRequirementSupplierVendorCodeNo: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        customerRequirementsCSRDetails: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },


        // Area of Concerns / Effectiveness of the previous NCs raised by the IRQS (Previous NC details to be Provided by Client and Reviewed by Team Leader/ Auditor)

        clientName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        plant: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.Sequelize.NOW,
        },

        // Adding new fields from the audit planning review section
        prePlanningSubmissionDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        isRemoteAudit: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clientSuppliedRequiredInfo: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        missingInfoDetails: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        employeeNumberChange: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        employeeChangeDetails: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        hasRemoteSupportAccess: {
            type: DataTypes.ENUM('Yes', 'No', 'Not Applicable'),
            allowNull: true,
        },
        remoteSupportAccessDetails: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        remoteLocationIssues: {
            type: DataTypes.ENUM('Yes', 'No', 'Not Applicable'),
            allowNull: true,
        },
        remoteLocationIssueDetails: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        significantOrganizationChanges: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        organizationChangeDetails: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        manufacturingRelocation: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        relocationDetails: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        internalAuditRisks: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        managementReviewRisks: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        performanceTargetRisks: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        customerComplaintRisks: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        iatfOemReportsProvided: {
            type: DataTypes.ENUM('Yes', 'No', 'Not Applicable'),
            allowNull: true,
        },
        iatfTargetsMet: {
            type: DataTypes.ENUM('Yes', 'No', 'Not Applicable'),
            allowNull: true,
        },
        additionalAuditTimeAdded: {
            type: DataTypes.ENUM('Yes', 'No', 'Not Applicable'),
            allowNull: true,
        },
        noAdditionalTimeReason: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // Area of Concerns section
        previousNonConformities: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clientActions: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        teamLeaderVerification: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        otherAuditRisks: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        surveillanceAuditRisks: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        auditPlanImpact: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        auditDurationChanges: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        offsiteAuditPlanningTime: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        onsiteAuditPlanningTime: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        totalAuditPlanningTime: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        auditPlanIssueDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        auditorDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        auditorName: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        auditorAllocationId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: AuditorAllocation,
                key: "id",
            },
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: LeadForm,
                key: "id",
            },
        }

    },

    {
        tableName: "IATF_Data_Request_Form",
    }
);



IATFDataRequestForm.belongsTo(LeadForm, {
    foreignKey: "createdBy",
    targetKey: "id",
});


IATFDataRequestForm.belongsTo(AuditorAllocation, {
    foreignKey: "auditorAllocationId",
    targetKey: "id",
})
export default IATFDataRequestForm;
