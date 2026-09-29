import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";
import AuditorAllocation from "../auditor/auditorAllocation.js";
import LeadForm from "../leadForm.js";

export const IATFDocumentReview = sequelize.define(
    "IATFDocumentReview",
    {
        clientName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        clientAddress: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        // a. Maintained Documented Information

        Aclause43ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause43CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause43Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause43NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause431ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause431CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause431Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause431NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause442ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause442CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause442Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause442NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause522ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause522CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause522Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause522NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause6123ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause6123CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause6123Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause6123NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },


        Aclause621ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause621CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause621Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause621NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause71531ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause71531CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause71531Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause71531NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause723ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause723CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause723Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause723NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause731ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause731CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause731Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause731NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause7511ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause7511CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause7511Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause7511NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause81ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause81CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause81Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause81NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause851ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause851CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause851Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause851NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause8513ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause8513CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause8513Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause8513NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Aclause9331ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause9331CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Aclause9331Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Aclause9331NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },


        // b. Maintained Documented Process(es)

        Bclause4412ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause4412CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause4412Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause4412NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause71521ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause71521CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause71521Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause71521NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause721ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause721CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause721Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause721NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause723ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause723CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause723Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause723NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause732ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause732CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause732Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause732NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause75321ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause75321CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause75321Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause75321NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause75322ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause75322CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause75322Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause75322NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8333ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8333CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8333Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8333NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8412ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8412CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8412Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8412NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8421ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8421CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8421Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8421NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8422ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8422CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8422Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8422NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8424ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8424CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8424Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8424NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },


        Bclause8515ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8515CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8515Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8515NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },


        Bclause8561ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8561CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8561Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8561NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause85611ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause85611CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause85611Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause85611NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8714ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8714CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8714Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8714NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8715ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8715CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8715Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8715NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause8717ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8717CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause8717Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause8717NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause9221ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause9221CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause9221Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause9221NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause1023ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause1023CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause1023Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause1023NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },


        Bclause1024ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause1024CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause1024Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause1024NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        Bclause1031ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause1031CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Bclause1031Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Bclause1031NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        // C. Retained Documented information

        clause442ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause442CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause442Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause442NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        clause531ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause531CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause531Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause531NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause6121ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause6121CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause6121Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause6121NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause6122ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause6122CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause6122Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause6122NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause6123ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause6123CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause6123Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause6123NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause7151ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause7151CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause7151Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause7151NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause71511ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause71511CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause71511Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause71511NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause7152lientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause7152CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause7152Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause7152NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause71521ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause71521CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause71521Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause71521NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause71521ClientReference11: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause71521CommentByAuditor11: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause71521Ok11: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause71521NotOk11: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause72ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause72CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause72Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause72NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause723ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause723CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause723Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause723NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause75322ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause75322CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause75322Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause75322NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause81ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause81CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause812Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause81NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8232ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8232CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8232Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8232NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8323ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8323CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8323Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8323NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        clause833ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause833CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause833Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause833NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        clause834ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause834CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause834Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause834NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8344ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8344CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8344Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8344NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause835ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause835CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause835Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause835NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause836ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause836CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause836Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause836NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause841ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause841CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause841Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause841NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause4412ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause84241CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause84241Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause84241NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause84231ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause84231CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause84231Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause84231NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8513ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8513CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8513Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8513NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause853ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause853CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause853Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause853NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause856ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause856CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause856Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause856NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause86ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause86CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause86Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause86NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8561ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8561CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8561Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8561NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause872ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause872CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause872Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause872NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8711ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8711CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8711Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8711NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8714ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8714CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8714Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8714NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8715ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8715CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause8715Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause8715NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause872ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause872CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause872Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause872NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause911ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause911CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause911Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause911NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause9111ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause9111CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause9111Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause9111NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause9111ClientReference38: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause9111CommentByAuditor38: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause9111Ok38: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause9111NotOk38: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause922ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause922CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause922Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause922NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause4412ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause933CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause933Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause933NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause1022ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause1022CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause1022Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause1022NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause1024ClientReference: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause1024CommentByAuditor: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        clause1024Ok: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        clause1024NotOk: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        reviewComments: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        signature: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.Sequelize.NOW,
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
        tableName: "IATF_document_review",
    }
);



IATFDocumentReview.belongsTo(LeadForm, {
    foreignKey: "createdBy",
    targetKey: "id",
});


IATFDocumentReview.belongsTo(AuditorAllocation, {
    foreignKey: "auditorAllocationId",
    targetKey: "id",
})

export default IATFDocumentReview;
