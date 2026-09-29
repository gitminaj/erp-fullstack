import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";
import { Lead } from "./lead.js";
import Certification from "./questionnaire/certificationType.js";
import ContractReview from "./questionnaire/contractRevew.js";
import Questionnaire from "./questionnaire.js";
import Surveillance from "./questionnaire/surveillanceType.js";
import Zone from "./questionnaire/zone.js";

export const Contract = sequelize.define(
  "Contract",
  {
    leadId: {
      type: DataTypes.INTEGER,
      references: {
        model: Lead,
        key: "id",
      },
      allowNull: false,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionnaireNo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Questionnaire,
        key: "questionnaireNo",
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
    contractRevewType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: ContractReview,
        key: "name",
      },
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Zone,
        key: "name",
      },
    },

    businessActivity: {
      type: DataTypes.STRING,
    },
    requestedScope: {
      type: DataTypes.STRING,
    },
    certificationAudit: {
      type: DataTypes.STRING,
    },
    certificationAudit1: {
      type: DataTypes.STRING,
    },
    certificationAudit2: {
      type: DataTypes.STRING,
    },

    consultant: {
      type: DataTypes.STRING,
    },
    organizations: {
      type: DataTypes.STRING,
    },
    influence: {
      type: DataTypes.STRING,
    },
    nameOfConsultant: {
      type: DataTypes.STRING,
    },
    reviewOfConflict: {
      type: DataTypes.STRING,
    },
    certificationAccepted: {
      type: DataTypes.BOOLEAN,
    },
    conclusion: {
      type: DataTypes.STRING,
    },
    significantChanges: {
      type: DataTypes.STRING,
    },
    externalSources: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedBy: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "contracts",
  }
);

Lead.hasOne(Contract, { foreignKey: "leadId" });
Contract.belongsTo(Lead, { foreignKey: "leadId" });

Contract.belongsTo(Questionnaire, {
  foreignKey: "questionnaireNo",
});
Questionnaire.hasOne(Contract, { foreignKey: "questionnaireNo" });

Contract.belongsTo(Certification, {
  foreignKey: "certificationType",
  targetKey: "name",
});
Certification.hasMany(Contract, {
  foreignKey: "certificationType",
  sourceKey: "name",
});

Contract.belongsTo(ContractReview, {
  foreignKey: "contractRevewType",
  targetKey: "name",
});
ContractReview.hasMany(Contract, {
  foreignKey: "contractRevewType",
  sourceKey: "name",
});

Contract.belongsTo(Surveillance, {
  foreignKey: "surveillanceType",
  targetKey: "name",
});

Surveillance.hasMany(Contract, {
  foreignKey: "surveillanceType",
  sourceKey: "name",
});

export default Contract;
