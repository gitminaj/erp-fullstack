import { DataTypes, Op } from "sequelize";
import sequelize from "../lib/db.js";
import Currency from "./questionnaire/currency.js";
import Certification from "./questionnaire/certificationType.js";
import Surveillance from "./questionnaire/surveillanceType.js";
import { Lead } from "./lead.js";
import User from "./user.js";
import ContractReviewForm from "./forms/contractReviewForm.js";

const Quotation = sequelize.define(
  "Quotation",
  {
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    quotationNo: { // auto generate
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    revisionNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    certificationType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Certification,
        key: "name",
      },
    },
    surveillanceType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Surveillance,
        key: "name",
      },
    },
    standards: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requestedScope: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    businessActivity: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    applicationFees: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    accreditationFees: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    surveillanceAudit1Fees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    surveillanceAudit2Fees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    surveillanceAudit3Fees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    surveillanceAudit4Fees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    surveillanceAudit5Fees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    stage1AuditFees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    stage2AuditFees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    totalFees: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    currencyType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Currency,
        key: "name",
      },
    },
    isDiscountGiven: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    approvedQuotationAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    timestamps: true,
    hooks: {
      beforeCreate: async (quotation) => {
        const currentDate = new Date();
        const currentMonthYear = currentDate
          .toLocaleString("en-US", {
            month: "2-digit",
            year: "2-digit",
          })
          .replace("/", "");
        const count = await Quotation.count({
          where: {
            quotationNo: {
              [Op.like]: `${currentMonthYear}%`,
            },
          },
        });
        const serialNumber = String(count + 1).padStart(6, "0");
        quotation.quotationNo = `${currentMonthYear}/${serialNumber}`;
      },
    },
  }
);


// Quotation.belongsTo(Quotation, { foreignKey: "leadId" });
// Quotation.belongsTo(User, { foreignKey: "createdBy" });

Quotation.belongsTo(Lead, { foreignKey: "leadId" }); // Associate with Lead
Lead.hasMany(Quotation, { foreignKey: "leadId" }); // Reverse association with Lead

Quotation.hasOne(ContractReviewForm, { foreignKey: "leadId", as: "ContractReview" }); // Associate with ContractReviewForm
ContractReviewForm.belongsTo(Quotation, { foreignKey: "leadId" }); // Reverse association with Quotation

Quotation.belongsTo(User, { foreignKey: "createdBy" }); // Associate with User



export default Quotation;
