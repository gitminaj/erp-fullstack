import { DataTypes, Op } from "sequelize";
import sequelize from "../lib/db.js";
import { Lead } from "./lead.js";
import { Surveillance } from "./questionnaire/surveillanceType.js";
import Zone from "./questionnaire/zone.js";
import Certification from "./questionnaire/certificationType.js";
import User from "./user.js";
import LeadForm from "./leadForm.js";

const Questionnaire = sequelize.define(
  "Questionnaire",
  {
    questionnaireNo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Zone,
        key: "name",
      },
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
    readinessDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    selectSites: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    standard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    selectedStandard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accreditation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    selectedAccreditation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    businessActivity: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    requestScope: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    additionalInformation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    anyOtherServices: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    systemImplementationPeriod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    irsServiceProvided: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consultantName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otherConsultant: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consultancyFirmName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    faxNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    managementOfChanges: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    supplierFor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desiredScopeOfCertification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    productDesignResponsibility: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qmsSingleManufacturingSite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qmsSingleExtendedSites: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qmsCorporateScheme: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    leadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lead,
        key: "id",
      },
    },

    createdByType: {
      type: DataTypes.ENUM("User", "Client"),
      allowNull: false,
    },
    createdById: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (questionnaire) => {
        const currentDate = new Date();
        const currentMonthYear = currentDate
          .toLocaleString("en-US", {
            month: "2-digit",
            year: "2-digit",
          })
          .replace("/", "");
        const count = await Questionnaire.count({
          where: {
            questionnaireNo: {
              [Op.like]: `${currentMonthYear}%`,
            },
          },
        });
        const serialNumber = String(count + 1).padStart(6, "0");
        questionnaire.questionnaireNo = `${currentMonthYear}/${serialNumber}`;
      },
    },
  }
);


Questionnaire.belongsTo(User, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "User",
  },
});

User.hasMany(Questionnaire, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "User",
  },
});

Questionnaire.belongsTo(LeadForm, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "LeadForm",
  },
});

LeadForm.hasMany(Questionnaire, {
  foreignKey: "createdById",
  constraints: false,
  scope: {
    createdByType: "LeadForm",
  },
});

Lead.hasOne(Questionnaire, { foreignKey: "leadId" });
Questionnaire.belongsTo(Lead, { foreignKey: "leadId" });

export default Questionnaire;
