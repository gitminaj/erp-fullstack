import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorType from "../auditor/auditorType.js";
import AuditorAllocation from "../auditor/auditorAllocation.js";

export const InternalWitness = sequelize.define(
    "InternalWitness",
    {

        clientName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        auditType: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: AuditorType,
                key: "name",
            }
        },

        // Duration Of The Witness Audit


        asPerCBRulesStageII: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        asPerCBRulesSurveillance: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        asPerCBRulesRecertification: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        actualDurationStageII: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        actualDurationSurveillance: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        actualDurationRecertification: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        auditstartdateStageII: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        auditstartdateSurveillance: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        auditstartdateRecertification: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        auditEnddateStageII: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        auditEnddateSurveillance: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        auditEnddateRecertification: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        nameOfTheWitnessAuditor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nameOfTheAuditorUnderWitness: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        WhetherInitialWitnessPeriodic: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        auditteamleadereffectivelyconductmeeting: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        // No Question 1

        strength1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement1: {
            type: DataTypes.TEXT,
            allowNull: true,
        },



        // No Question 2

        strength2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 3

        isAuditschedule: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        auditManDdays: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        shiftsCovered: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        // No Question 4

        usageOfTheData4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        ifclientDidnProvide4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        customer4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        usageOfAnalysis4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        usageOfInternal: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        effectiveness4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Istheauditplanbased4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Doesauditschedule4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Doestheauditplanidentify4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Incaseofsurveillanceaudit4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength4: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness4: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat4: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement4: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 5

        Howarecustomercomplaints5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Ifteamleaderauditoraudits5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Doesauditorusethesetrail5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        DoesapplicableCSRs5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength5: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness5: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat5: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement5: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 6

        Howistopmanagementaudited61: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        HowaretheQMS62: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howcompetent63: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howarethestrategic64: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howthepolicy65: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howdothemanagement66: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howarecustomer67: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Whatisthemechanism68: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howarechanges69: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Doesauditor610: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength6: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness6: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat6: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement6: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 7

        Doestheauditorunderstand71: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Clientprocesses72: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Clientonthecurrent73: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Clientwithfocus74: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Questioningtheprocess75: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Questioningwhatplans76: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Followingaudittrails77: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Questioningtheclient78: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifytheidentification79: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength7: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness7: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat7: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement7: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 8

        Doestheauditor81: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifytheclient82: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifytheclient83: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Effectivelyincorporate84: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Audittheclientprocesses85: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howdoestheauditorprioritize86: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Doestheauditreportidentify87: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength8: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness8: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat8: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement8: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 9

        Whetherprioritizing91: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Demonstrationofprioritizing92: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Whileselectingthesamples93: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        HowareCSRs94: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Areinternalrejections95: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Demonstrateschangesinprioritization96: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength9: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness9: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat9: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement9: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // No Question 10

        Auditprocessesidentified10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Locatingthecustomer10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Reviewandassess10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Investigateanddetermine10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyanycustomerspecified10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Sampleaclien10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Incorporate10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Audittheclient10: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        strength10: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness10: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat10: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement10: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // No Question 11

        Discriminate111: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Absorbdata112: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Demonstrate113: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Recognise114: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Recogniseanduseanycustome115: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Questiontheeffectiveness116: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Drawconclusions117: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength11: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness11: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat11: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement11: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 12 

        Verifyiftheclient: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyiftheclienthasthecurrentlevel: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        VerifyiftheCSRareincorporatedi: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyiftheclienthasunderstood: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength12: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness12: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat12: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement12: {
            type: DataTypes.TEXT,
            allowNull: true,
        },



        // No Question 12 A

        challengingtheclient121: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        verifyingthecompetency122: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        verifyingonanyRPN123: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        followupoftheaudit124: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        effectivelyauditingthelinks125: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength12a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness12a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat12a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement12a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 12 B

        verifyingtheselectionofappropriate121b: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        usageofcontrol12b2: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        verifyhowtheclient12b3: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        verifyhowtheclienthasarrived12b4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        verifyhowtheclientdecides12b5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        integratethecustomer12b6: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        effectivelyaudittheGR12b7: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength12b: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness12b: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat12b: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement12b: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 12 C

        Verifyiftherelevant12c1: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyhowtheappropriate12c2: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Howthecontrolcharts12c3: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyifthestatistical12c4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyiftheprocess12c5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyiftheclient12c6: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength12c: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness12c: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat12c: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement12c: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // No Question 12 D

        Verifyhowtheclient12d1: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyhowthecompetency12d2: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifyiftheauditcovers12d3: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength12d: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness12d: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat12d: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement12d: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 13

        ApplytheKnowledge131: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Interpretandevaluate132: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Undertakeandreport133: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        EnsureCSRrequirements134: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength13: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness13: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat13: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement13: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 13 A

        Demonstrationoftheability13a1: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        DocumentingtheNC13a2: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Mostappropriate13a3: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Internalcommunication13a4: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Communication13a5: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Correctlycompletes13a6: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Verifytheresponses13a7: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        VerifyiftheCAhasbeen13a8: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        VerifytheclientCAprocess13a9: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength13a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness13a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat13a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement13a: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 14

        Focusing141: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Developing142: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Questioning143: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Communication144: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Effectivelyinteracting145: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Adjustmentininterviewing146: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Demonstratingopenmindedness147: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength14: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness14: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat14: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement14: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 15

        Determinepriority: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Effectivelymanaging: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Stayingfocused: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Demonstratingtimemanagement: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        Complyingwithrules: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength15: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness15: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat15: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement15: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 16

        provide161: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        managing162: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        coordinate163: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength16: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness16: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat16: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement16: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        // No Question 17

        demonstrates171: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        effectively172: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength17: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness17: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat17: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement17: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // No Question 18 

        manage181: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        demonstrates182: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        effectively183: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength18: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness18: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat18: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement18: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // No Question 19  

        recognize191: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        auditing192: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },

        strength19: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness19: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat19: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement19: {
            type: DataTypes.TEXT,
            allowNull: true,
        },


        // No Question 20
        auditing201: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        review202: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        verifying203: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        interviewing204: {
            type: DataTypes.ENUM("G (Green)", "R (Red)", "Y (Yellow)"),
            allowNull: true,
        },
        strength20: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        weakness20: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        threat20: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        opportunityForImprovement20: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        commentsFromWitnessAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        commentsFromAuditee: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        signOfAuditee: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        signOfWitnessAuditor: {
            type: DataTypes.TEXT,
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

    },
    {
        tableName: "internal_witness",
    }
);


InternalWitness.belongsTo(AuditorType, { foreignKey: "auditType", targetKey: "name" })
InternalWitness.hasMany(InternalWitness, { foreignKey: "auditType", targetKey: "name" })
InternalWitness.belongsTo(AuditorAllocation, {
    foreignKey: "auditorAllocationId",
    targetKey: "id",
})


export default InternalWitness;
