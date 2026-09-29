import { DataTypes, Op } from "sequelize";
import sequelize from "../../lib/db.js";
import User from "../user.js";
import AuditorStandards from "./auditorStandards.js";
import AuditorType from "./auditorType.js";
import Country from "./country.js";
// import AuditorApplyFor from "./auditorApplyFor.js";
import NaceCodeRev1 from "./auditorNaceCodeRev1.js";
import NaceCodeRev2 from "./auditorNaceCodeRev2.js";

const AuditorAllocation = sequelize.define('AuditorAllocation', {
  auditorAllocationNo: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  scheme: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: AuditorStandards,
      key: "name",
    },
  },
  fileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: Country,
      key: "name"
    }
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  clientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  corporateScheme: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  siteExtensions: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  contactPerson: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  manufacturingSiteAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturingSiteUSICode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturingSiteManpower: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  siteExtensionsAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  siteExtensionsUSICode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  siteExtensionsManpower: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  // Remote location details

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remoteLocationAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usiCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manpower: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  auditcompletionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  auditors: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  auditStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  auditEndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  naceCodeRev1: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: NaceCodeRev1,
      key: "name",
    },
  },
  naceCodeRev2: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: NaceCodeRev2,
      key: "name",
    },
  },

  scope: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  exclusions: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  remarkAuditPlanner: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  remarkAffApproval: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  transferApprovedSMMT: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  typeofAudit: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: AuditorType,
      key: "name"
    }
  },
  modeofAudit: {
    type: DataTypes.ENUM("Remote", "Onsite"),
    allowNull: true,
  },
  remoteAuditAuthorizationWithICTApproved: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  // roleInAudit: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  //   references: {
  //     model: AuditorApplyFor,
  //     key: "name"
  //   }
  // },
  developedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: "id"
    }
  },
  approvedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: "id"
    }
  },
  approvedByName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("Review", "Accept", "Reject", "Pending"),
    allowNull: true,
    defaultValue: "Pending",
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  memberOfTheAuditTeamInvoled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  waiverTakenTeamComposition: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  waiverTakenDelayedAudit: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  smmtWaiverNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  // summaryofpreviousauditfinding
  noOfAOC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  noOfMajorNcs: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  noOfMinorNcs: {
    type: DataTypes.STRING,
    allowNull: true,
  },


  // forsurveilenceAuditonly
  manpowerReportByClient: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manpowerReportInCR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isThereAnyChnagesForManDays: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },


  // planner notes

  internalAndIATFWitnessDetails: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  anyOtherInformationAsApporpriate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quoationAvailableInIBMAs: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quoationAvailableInIBMAsDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  letterOfConfomance: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  orderAcceptance: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  orderAcceptanceDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  PrepareByName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PrepareByDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  // revision history
  revNo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Details: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  revisionApprovedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  iatfCertificateNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  iqrsCertificateNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  expiryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  clientUnderSuspension: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  SuspendedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  auditTeamInvlod: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  }

}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (auditorallocations) => {
      const currentDate = new Date();
      const currentMonthYear = currentDate
        .toLocaleString("en-US", {
          month: "2-digit",
          year: "2-digit",
        })
        .replace("/", "");
      const count = await AuditorAllocation.count({
        where: {
          auditorAllocationNo: {
            [Op.like]: `${currentMonthYear}%`,
          },
        },
      });
      const serialNumber = String(count + 1).padStart(6, "0");
      auditorallocations.auditorAllocationNo = `${currentMonthYear}/${serialNumber}`;
    },
  }
});


AuditorAllocation.belongsTo(AuditorStandards, {
  foreignKey: "scheme",
  targetKey: "name",
});

AuditorStandards.hasMany(AuditorAllocation, { foreignKey: "scheme", sourceKey: "name" });


AuditorAllocation.belongsTo(Country, {
  foreignKey: "country",
  targetKey: "name",
});

Country.hasMany(AuditorAllocation, { foreignKey: "country", sourceKey: "name" });


AuditorAllocation.belongsTo(AuditorType, {
  foreignKey: "typeofAudit",
  targetKey: "name",
});

AuditorType.hasMany(AuditorAllocation, { foreignKey: "typeofAudit", sourceKey: "name" });


// AuditorAllocation.belongsTo(AuditorApplyFor, {
//   foreignKey: "roleInAudit",
//   targetKey: "name",
// });

// AuditorApplyFor.hasMany(AuditorAllocation, { foreignKey: "roleInAudit", sourceKey: "name" });


AuditorAllocation.belongsTo(User, {
  foreignKey: "developedBy",
  targetKey: "id",
});

User.hasMany(AuditorAllocation, { foreignKey: "developedBy", sourceKey: "id" });

AuditorAllocation.belongsTo(NaceCodeRev1, {
  foreignKey: "naceCodeRev1",
  targetKey: "name"
})

NaceCodeRev1.hasMany(AuditorAllocation, { foreignKey: "naceCodeRev1", sourceKey: "name" })

AuditorAllocation.belongsTo(NaceCodeRev2, {
  foreignKey: "naceCodeRev2",
  targetKey: "name"
})

NaceCodeRev2.hasMany(AuditorAllocation, { foreignKey: "naceCodeRev2", sourceKey: "name" })



export default AuditorAllocation;
