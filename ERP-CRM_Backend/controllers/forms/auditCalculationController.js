import DecreasingCriteria from "../../models/decreasingCriteria.js";
import DummyPrice from "../../models/dummyPrice.js";
import AuditDataOne from "../../models/forms/auditDataOne.js";
import AuditDataTwo from "../../models/forms/auditDataTwo.js";
import IncreaseCriteria from "../../models/increaseCriteria.js";
import { Op } from "sequelize";

const calculateAuditDays = (auditManDays, percentage) => {
  return auditManDays * (1 - percentage / 100);
};

const roundToNearestHalf = (value) => {
  return Math.ceil(value * 2) / 2;
};


const roundToNextHalfDayExample5 = (value) => {
  const rounded = Math.ceil(value * 2) / 2; // Round to the next 0.5
  return value <= 3.5 ? 3.5 : rounded; // Apply custom rounding logic
};


const roundToNextHalfDay = (value, calculatedValue) => {
  const rounded = Math.ceil(value * 2) / 2; // Round to the next 0.5
  return value <= calculatedValue ? calculatedValue : rounded; // Custom rounding logic
};


const calculateAuditDaysExample3 = (auditManDays, percentage) => {
  return auditManDays * 0.7;
};


export const getAuditCalculationOne = async (req, res) => {
  try {
    const auditOne = await AuditDataOne.findAll();
    return res.status(200).json(auditOne);
  } catch (error) {
    console.error("Error fetching audit calulation one:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAuditCalculationTwo = async (req, res) => {
  try {
    const auditTwo = await AuditDataTwo.findAll();
    return res.status(200).json(auditTwo);
  } catch (error) {
    console.error("Error fetching audit calculation two:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//   try {
//     const { employeeCount } = req.body;

//     const percentageReduction = 15;

//     // Retrieve audit data
//     const auditDataOne = await AuditDataOne.findOne({
//       where: {
//         employeesFrom: { [Op.lte]: employeeCount },
//         employeesTo: { [Op.gte]: employeeCount },
//       },
//     });

//     const auditDataTwo = await AuditDataTwo.findOne({
//       where: {
//         employeesFrom: { [Op.lte]: employeeCount },
//         employeesTo: { [Op.gte]: employeeCount },
//       },
//     });

//     if (!auditDataOne || !auditDataTwo) {
//       return res
//         .status(404)
//         .json({ message: "No audit data found for the given employee count" });
//     }

//     // Calculations
//     const calculatedAuditDays = calculateAuditDays(auditDataOne.auditManDays, percentageReduction);
//     const roundedAuditDays = roundToNearestHalf(calculatedAuditDays);

//     const calculatedSurveillanceDays = calculateAuditDays(auditDataOne.surveillanceAuditMandays, percentageReduction);
//     const roundedSurveillanceDays = roundToNearestHalf(calculatedSurveillanceDays);

//     const calculatedRecertificationDays = calculateAuditDays(auditDataTwo.auditManDays, percentageReduction);
//     const roundedRecertificationDays = roundToNearestHalf(calculatedRecertificationDays);

//     return res.status(200).json({
//       employeeCount,
//       auditManDays: auditDataOne.auditManDays,
//       calculatedAuditDays: calculatedAuditDays.toFixed(2),
//       roundedAuditDays,
//       surveillanceAuditMandays: auditDataOne.surveillanceAuditMandays,
//       calculatedSurveillanceDays: calculatedSurveillanceDays.toFixed(2),
//       roundedSurveillanceDays,
//       recertificationAuditManDays: auditDataTwo.auditManDays,
//       calculatedRecertificationDays: calculatedRecertificationDays.toFixed(2),
//       roundedRecertificationDays,
//     });
//   } catch (error) {
//     console.error("Error in audit calculation:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const calculateAuditForEmployee = async (req, res) => {
//   try {
//     const { employeeCount, percentage, upperPercentage } = req.body;

//     // Check if percentage and upperPercentage are provided
//     if (percentage && upperPercentage) {
//       // Logic from calculateAuditForEmployeeExample3
//       const percentageReduction = 15;

//       const auditDataOne = await AuditDataOne.findOne({
//         where: {
//           employeesFrom: { [Op.lte]: employeeCount },
//           employeesTo: { [Op.gte]: employeeCount },
//         },
//       });

//       const auditDataTwo = await AuditDataTwo.findOne({
//         where: {
//           employeesFrom: { [Op.lte]: employeeCount },
//           employeesTo: { [Op.gte]: employeeCount },
//         },
//       });

//       if (!auditDataOne || !auditDataTwo) {
//         return res
//           .status(404)
//           .json({ message: "No audit data found for the given employee count" });
//       }

//       const calculatedAuditDays = calculateAuditDaysExample3(
//         auditDataOne.auditManDays,
//         percentageReduction
//       );
//       const roundedAuditDays = roundToNextHalfDay(calculatedAuditDays);

//       const calculatedSurveillanceDays = calculateAuditDays(
//         auditDataOne.surveillanceAuditMandays,
//         percentageReduction
//       );
//       const roundedSurveillanceDays = roundToNextHalfDay(
//         calculatedSurveillanceDays
//       );

//       const calculatedRecertificationDays = calculateAuditDays(
//         auditDataTwo.auditManDays,
//         percentageReduction
//       );
//       const roundedRecertificationDays = roundToNextHalfDay(
//         calculatedRecertificationDays
//       );

//       return res.status(200).json({
//         employeeCount,
//         auditManDays: auditDataOne.auditManDays,
//         calculatedAuditDays: calculatedAuditDays.toFixed(2),
//         roundedAuditDays,
//         surveillanceAuditMandays: auditDataOne.surveillanceAuditMandays,
//         calculatedSurveillanceDays: calculatedSurveillanceDays.toFixed(2),
//         roundedSurveillanceDays,
//         recertificationAuditManDays: auditDataTwo.auditManDays,
//         calculatedRecertificationDays: calculatedRecertificationDays.toFixed(2),
//         roundedRecertificationDays,
//       });
//     }

//     // Default logic from calculateAuditForEmployee
//     const percentageReduction = 15;

//     const auditDataOne = await AuditDataOne.findOne({
//       where: {
//         employeesFrom: { [Op.lte]: employeeCount },
//         employeesTo: { [Op.gte]: employeeCount },
//       },
//     });

//     const auditDataTwo = await AuditDataTwo.findOne({
//       where: {
//         employeesFrom: { [Op.lte]: employeeCount },
//         employeesTo: { [Op.gte]: employeeCount },
//       },
//     });

//     if (!auditDataOne || !auditDataTwo) {
//       return res
//         .status(404)
//         .json({ message: "No audit data found for the given employee count" });
//     }

//     const calculatedAuditDays = calculateAuditDays(auditDataOne.auditManDays, percentageReduction);
//     const roundedAuditDays = roundToNearestHalf(calculatedAuditDays);

//     const calculatedSurveillanceDays = calculateAuditDays(auditDataOne.surveillanceAuditMandays, percentageReduction);
//     const roundedSurveillanceDays = roundToNearestHalf(calculatedSurveillanceDays);

//     const calculatedRecertificationDays = calculateAuditDays(auditDataTwo.auditManDays, percentageReduction);
//     const roundedRecertificationDays = roundToNearestHalf(calculatedRecertificationDays);

//     return res.status(200).json({
//       employeeCount,
//       auditManDays: auditDataOne.auditManDays,
//       calculatedAuditDays: calculatedAuditDays.toFixed(2),
//       roundedAuditDays,
//       surveillanceAuditMandays: auditDataOne.surveillanceAuditMandays,
//       calculatedSurveillanceDays: calculatedSurveillanceDays.toFixed(2),
//       roundedSurveillanceDays,
//       recertificationAuditManDays: auditDataTwo.auditManDays,
//       calculatedRecertificationDays: calculatedRecertificationDays.toFixed(2),
//       roundedRecertificationDays,
//     });
//   } catch (error) {
//     console.error("Error in audit calculation:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const calculateAuditForEmployee = async (req, res) => {
//   try {
//     const { employeeCount, percentage, upperPercentage } = req.body;

//     if (!employeeCount) {
//       return res.status(400).json({ message: "Employee count is required" });
//     }

//     // Ensure percentage and upperPercentage are provided, otherwise default to 0
//     const initialStageDiscount = percentage || 0;
//     const otherAuditsDiscount = upperPercentage || 0;

//     const auditDataOne = await AuditDataOne.findOne({
//       where: {
//         employeesFrom: { [Op.lte]: employeeCount },
//         employeesTo: { [Op.gte]: employeeCount },
//       },
//     });

//     const auditDataTwo = await AuditDataTwo.findOne({
//       where: {
//         employeesFrom: { [Op.lte]: employeeCount },
//         employeesTo: { [Op.gte]: employeeCount },
//       },
//     });

//     if (!auditDataOne || !auditDataTwo) {
//       return res
//         .status(404)
//         .json({ message: "No audit data found for the given employee count" });
//     }

//     // Helper function for calculations
//     const calculateAuditDays = (manDays, discount) =>
//       manDays - (manDays * discount) / 100;

//     const roundToNearestHalf = (value) => Math.ceil(value * 2) / 2;

//     // Initial Stage
//     const initialStageDays = calculateAuditDays(
//       auditDataOne.auditManDays,
//       initialStageDiscount
//     );
//     const roundedInitialStageDays = roundToNearestHalf(initialStageDays);

//     // Surveillance 1
//     const surveillance1Days = calculateAuditDays(
//       auditDataOne.surveillanceAuditMandays,
//       otherAuditsDiscount
//     );
//     const roundedSurveillance1Days = roundToNearestHalf(surveillance1Days);

//     // Surveillance 2
//     const surveillance2Days = calculateAuditDays(
//       auditDataOne.surveillanceAuditMandays,
//       otherAuditsDiscount
//     );
//     const roundedSurveillance2Days = roundToNearestHalf(surveillance2Days);

//     // Recertification
//     const recertificationDays = calculateAuditDays(
//       auditDataTwo.auditManDays,
//       otherAuditsDiscount
//     );
//     const roundedRecertificationDays = roundToNearestHalf(recertificationDays);

//     // Respond with calculated data
//     return res.status(200).json({
//       employeeCount,
//       initialStage: {
//         auditManDays: auditDataOne.auditManDays,
//         calculatedDays: initialStageDays.toFixed(2),
//         roundedDays: roundedInitialStageDays,
//       },
//       surveillance1: {
//         auditManDays: auditDataOne.surveillanceAuditMandays,
//         calculatedDays: surveillance1Days.toFixed(2),
//         roundedDays: roundedSurveillance1Days,
//       },
//       surveillance2: {
//         auditManDays: auditDataOne.surveillanceAuditMandays,
//         calculatedDays: surveillance2Days.toFixed(2),
//         roundedDays: roundedSurveillance2Days,
//       },
//       recertification: {
//         auditManDays: auditDataTwo.auditManDays,
//         calculatedDays: recertificationDays.toFixed(2),
//         roundedDays: roundedRecertificationDays,
//       },
//     });
//   } catch (error) {
//     console.error("Error in audit calculation:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

export const calculateAuditForEmployee = async (req, res) => {
  try {
    const { employeeCount, percentage, upperPercentage } = req.body;

    if (!employeeCount) {
      return res.status(400).json({ message: "Employee count is required" });
    }

    // Ensure percentage and upperPercentage are provided, otherwise default to 0
    const initialStageDiscount = percentage || 0;
    const otherAuditsDiscount = upperPercentage || 0;

    const auditDataOne = await AuditDataOne.findOne({
      where: {
        employeesFrom: { [Op.lte]: employeeCount },
        employeesTo: { [Op.gte]: employeeCount },
      },
    });

    const auditDataTwo = await AuditDataTwo.findOne({
      where: {
        employeesFrom: { [Op.lte]: employeeCount },
        employeesTo: { [Op.gte]: employeeCount },
      },
    });

    if (!auditDataOne || !auditDataTwo) {
      return res
        .status(404)
        .json({ message: "No audit data found for the given employee count" });
    }

    // Helper function for calculations
    const calculateAuditDays = (manDays, discount) =>
      manDays - (manDays * discount) / 100;

    const roundToNearestHalf = (value) => Math.ceil(value * 2) / 2;

    // Initial Stage
    const initialStageDays = calculateAuditDays(
      auditDataOne.auditManDays,
      initialStageDiscount + otherAuditsDiscount
    );
    const roundedInitialStageDays = roundToNearestHalf(initialStageDays);

    // Surveillance Audit
    const surveillanceDays = calculateAuditDays(
      auditDataOne.surveillanceAuditMandays,
      initialStageDiscount
    );
    const roundedSurveillanceDays = roundToNearestHalf(surveillanceDays);

    // Recertification
    const recertificationDays = calculateAuditDays(
      auditDataTwo.auditManDays,
      initialStageDiscount
    );
    const roundedRecertificationDays = roundToNearestHalf(recertificationDays);

    // Respond with the consolidated data format
    return res.status(200).json({
      employeeCount,
      auditManDays: auditDataOne.auditManDays,
      calculatedAuditDays: initialStageDays.toFixed(2),
      roundedAuditDays: roundedInitialStageDays,
      surveillanceAuditMandays: auditDataOne.surveillanceAuditMandays,
      calculatedSurveillanceDays: surveillanceDays.toFixed(2),
      roundedSurveillanceDays: roundedSurveillanceDays,
      recertificationAuditManDays: auditDataTwo.auditManDays,
      calculatedRecertificationDays: recertificationDays.toFixed(2),
      roundedRecertificationDays: roundedRecertificationDays,
    });
  } catch (error) {
    console.error("Error in audit calculation:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// done
export const calculateAuditForEmployeeExample6 = async (req, res) => {
  try {
    const {
      employees1,
      employees2,
      employees3,
      employees4,
      employees5,
      employees6,
      employees7,
      saRsl1,
      saRsl2,
    } = req.body;

    if (
      !employees1 ||
      !employees2 ||
      !employees3 ||
      !employees4 ||
      !employees5 ||
      !employees6 ||
      !employees7 ||
      !saRsl1 ||
      !saRsl2
    ) {
      return res
        .status(400)
        .json({ message: "All employee values and SA_RSL1 and SA_RSL2 are required." });
    }

    const calculatePercentage = (value, total) =>
      ((value / total) * 100).toFixed(2);


    const calculateAuditDays = (manDays, factor) => manDays + factor;
    const roundToNextHalfDay = (value) => Math.ceil(value * 2) / 2;

    const performCalculation = async (employees) => {
      const auditDataOne = await AuditDataOne.findOne({
        where: {
          employeesFrom: { [Op.lte]: employees },
          employeesTo: { [Op.gte]: employees },
        },
      });

      const auditDataTwo = await AuditDataTwo.findOne({
        where: {
          employeesFrom: { [Op.lte]: employees },
          employeesTo: { [Op.gte]: employees },
        },
      });

      const initialAuditManDays = auditDataOne?.auditManDays || 0;
      const surveillanceAuditMandays = auditDataOne?.surveillanceAuditMandays || 0;
      const recertificationAuditMandays = auditDataTwo?.auditManDays || 0;

      const calculatedInitialStageDays = calculateAuditDays(initialAuditManDays, 0);
      const initialStageDays = roundToNextHalfDay(calculatedInitialStageDays);

      const calculatedSurveillanceDays = calculateAuditDays(surveillanceAuditMandays, 0);
      const surveillance1Days = roundToNextHalfDay(calculatedSurveillanceDays);
      const surveillance2Days = roundToNextHalfDay(calculatedSurveillanceDays);

      const calculatedRecertificationDays = calculateAuditDays(
        recertificationAuditMandays,
        0
      );
      const recertificationDays = roundToNextHalfDay(calculatedRecertificationDays);

      const totalSA_RSL = employees1 + employees2 + employees3 + employees4 + employees5 + employees6 + employees7;

      // Calculate percentageOfEmployees
      const percentageOfEmployees = (employees / totalSA_RSL) * 100;

      // Calculate saRsl1Apportion and saRsl2Apportion based on percentageOfEmployees
      const totalSA_ASR = saRsl1 + saRsl2;
      const sarslEmployeeAportion = Math.round(totalSA_ASR * percentageOfEmployees / 100)

      // Calculate totalEmployeesForMinimumAuditDays
      const totalEmployeesForAudit = employees - sarslEmployeeAportion;



      return {
        employees,
        leftSideCalculation: {
          initialStage: {
            auditManDays: initialAuditManDays,
            calculatedDays: calculatedInitialStageDays.toFixed(2),
            roundedDays: initialStageDays.toFixed(2),
          },
          surveillance1: {
            auditManDays: surveillanceAuditMandays,
            calculatedDays: calculatedSurveillanceDays.toFixed(2),
            roundedDays: surveillance1Days.toFixed(2),
          },
          surveillance2: {
            auditManDays: surveillanceAuditMandays,
            calculatedDays: calculatedSurveillanceDays.toFixed(2),
            roundedDays: surveillance2Days.toFixed(2),
          },
          recertification: {
            auditManDays: recertificationAuditMandays,
            calculatedDays: calculatedRecertificationDays.toFixed(2),
            roundedDays: recertificationDays.toFixed(2),
          },
        },
        rightSideCalculation: {
          totalSA_RSL,
          percentageOfEmployees: percentageOfEmployees.toFixed(2),
          sarslEmployeeAportion,
          totalEmployeesForMinimumAuditDays: totalEmployeesForAudit,
        },
      };
    };

    const calculations = await Promise.all([
      performCalculation(employees1),
      performCalculation(employees2),
      performCalculation(employees3),
      performCalculation(employees4),
      performCalculation(employees5),
      performCalculation(employees6),
      performCalculation(employees7),
    ]);

    return res.status(200).json({ calculations });
  } catch (error) {
    console.error("Error in calculateAuditForEmployeeExample6:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const calculateAuditForEmployeeExample7 = async (req, res) => {
  try {

    const {
      employees1,
      employees2,
      employees3,
      employees4,
      employees5,
      employees6,
      employees7,
      saRsl1,
      saRsl2,
    } = req.body;

    if (
      !employees1 ||
      !employees2 ||
      !employees3 ||
      !employees4 ||
      !employees5 ||
      !employees6 ||
      !employees7 ||
      !saRsl1 ||
      !saRsl2
    ) {
      return res
        .status(400)
        .json({ message: "All employee values and SA_RSL1 and SA_RSL2 are required." });
    }


    const calculateAuditDays = (manDays, factor) => manDays + factor;
    const roundToNextHalfDay = (value) => Math.ceil(value * 2) / 2;

    const performCalculation = async (employees) => {
      const auditDataOne = await AuditDataOne.findOne({
        where: {
          employeesFrom: { [Op.lte]: employees },
          employeesTo: { [Op.gte]: employees },
        },
      });

      const auditDataTwo = await AuditDataTwo.findOne({
        where: {
          employeesFrom: { [Op.lte]: employees },
          employeesTo: { [Op.gte]: employees },
        },
      });

      const initialAuditManDays = auditDataOne?.auditManDays || 0;
      const surveillanceAuditMandays = auditDataOne?.surveillanceAuditMandays || 0;
      const recertificationAuditMandays = auditDataTwo?.auditManDays || 0;

      const calculatedInitialStageDays = calculateAuditDays(initialAuditManDays, 0);
      const initialStageDays = roundToNextHalfDay(calculatedInitialStageDays);

      const calculatedSurveillanceDays = calculateAuditDays(surveillanceAuditMandays, 0);
      const surveillance1Days = roundToNextHalfDay(calculatedSurveillanceDays);
      const surveillance2Days = roundToNextHalfDay(calculatedSurveillanceDays);

      const calculatedRecertificationDays = calculateAuditDays(
        recertificationAuditMandays,
        0
      );
      const recertificationDays = roundToNextHalfDay(calculatedRecertificationDays);

      const totalSA_RSL = employees1 + employees2 + employees3 + employees4 + employees5 + employees6 + employees7;

      // Calculate percentageOfEmployees
      const percentageOfEmployees = (employees / totalSA_RSL) * 100;

      // Calculate saRsl1Apportion and saRsl2Apportion based on percentageOfEmployees
      const totalSA_ASR = saRsl1 + saRsl2;
      const sarslEmployeeAportion = Math.round(totalSA_ASR * percentageOfEmployees / 100)

      // Calculate totalEmployeesForMinimumAuditDays
      const totalEmployeesForAudit = employees - sarslEmployeeAportion;



      return {
        employees,
        leftSideCalculation: {
          initialStage: {
            auditManDays: initialAuditManDays,
            calculatedDays: calculatedInitialStageDays.toFixed(2),
            roundedDays: initialStageDays.toFixed(2),
          },
          surveillance1: {
            auditManDays: surveillanceAuditMandays,
            calculatedDays: calculatedSurveillanceDays.toFixed(2),
            roundedDays: surveillance1Days.toFixed(2),
          },
          surveillance2: {
            auditManDays: surveillanceAuditMandays,
            calculatedDays: calculatedSurveillanceDays.toFixed(2),
            roundedDays: surveillance2Days.toFixed(2),
          },
          recertification: {
            auditManDays: recertificationAuditMandays,
            calculatedDays: calculatedRecertificationDays.toFixed(2),
            roundedDays: recertificationDays.toFixed(2),
          },
        },
        rightSideCalculation: {
          totalSA_RSL,
          percentageOfEmployees: percentageOfEmployees.toFixed(2),
          sarslEmployeeAportion,
          totalEmployeesForMinimumAuditDays: totalEmployeesForAudit,
        },
      };
    };

    const calculations = await Promise.all([
      performCalculation(employees1),
      performCalculation(employees2),
      performCalculation(employees3),
      performCalculation(employees4),
      performCalculation(employees5),
      performCalculation(employees6),
      performCalculation(employees7),
    ]);

    return res.status(200).json({ calculations });



  } catch (error) {
    console.error("Error in calculateAuditForEmployee:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// export const calculateQuotation = async (req, res) => {
//   try {
//     const {
//       stage1auditManDays,
//       stage2auditManDays,
//       surveillance1AuditMandays,
//       surveillance2AuditMandays,
//       employeeCount,
//       standard
//     } = req.body;

//     if (!stage1auditManDays || !stage2auditManDays || !surveillance1AuditMandays || !surveillance2AuditMandays || !employeeCount || !standard) {
//       return res.status(400).json({ message: "Missing required data" });
//     }
//     const priceData = await DummyPrice.findOne({ where: { standard } });
//     if (!priceData) {
//       return res.status(404).json({ message: "Pricing data not found for the given standard" });
//     }
//     const feeCategory = employeeCount <= 65 ? "1-65" : "65+";

//     const applicationFees = priceData.applicationFees[feeCategory];
//     const accreditationFees = priceData.accreditationFees[feeCategory];
//     const auditFeesPerManday = priceData.auditFeesPerManday[feeCategory];

//     const stage1AuditFees = stage1auditManDays * auditFeesPerManday;
//     const stage2AuditFees = stage2auditManDays * auditFeesPerManday;
//     const surveillance1AuditFees = surveillance1AuditMandays * auditFeesPerManday;
//     const surveillance2AuditFees = surveillance2AuditMandays * auditFeesPerManday;

//     // Total audit fees across all stages
//     const totalAuditFees = stage1AuditFees + stage2AuditFees + surveillance1AuditFees + surveillance2AuditFees;
//     // Calculate total quotation including application and accreditation fees
//     const totalQuotation = totalAuditFees + applicationFees + accreditationFees;
//     return res.status(200).json({
//       employeeCount,
//       standard,
//       stage1auditManDays,
//       stage2auditManDays,
//       surveillance1AuditMandays,
//       surveillance2AuditMandays,
//       applicationFees,
//       accreditationFees,
//       auditFeesPerManday,
//       stage1AuditFees,
//       stage2AuditFees,
//       surveillance1AuditFees,
//       surveillance2AuditFees,
//       totalAuditFees,
//       totalQuotation,
//     });
//   } catch (error) {
//     console.error("Error calculating quotation:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };


export const calculateQuotation = async (req, res) => {
  try {
    const {
      stage1auditManDays,
      stage2auditManDays,
      surveillance1AuditMandays,
      surveillance2AuditMandays,
      employeeCount,
      standard,
      discountPercentage,
    } = req.body;

    const { role } = req.existUser;

    if (!stage1auditManDays || !stage2auditManDays || !surveillance1AuditMandays || !surveillance2AuditMandays || !employeeCount || !standard) {
      return res.status(400).json({ message: "Missing required data" });
    }

    const priceData = await DummyPrice.findOne({ where: { standard } });
    if (!priceData) {
      return res.status(404).json({ message: "Pricing data not found for the given standard" });
    }

    const feeCategory = employeeCount <= 65 ? "1-65" : "65+";

    const applicationFees = priceData.applicationFees[feeCategory];
    const accreditationFees = priceData.accreditationFees[feeCategory];
    const auditFeesPerManday = priceData.auditFeesPerManday[feeCategory];

    const stage1AuditFees = stage1auditManDays * auditFeesPerManday;
    const stage2AuditFees = stage2auditManDays * auditFeesPerManday;
    const surveillance1AuditFees = surveillance1AuditMandays * auditFeesPerManday;
    const surveillance2AuditFees = surveillance2AuditMandays * auditFeesPerManday;

    const totalAuditFees = stage1AuditFees + stage2AuditFees + surveillance1AuditFees + surveillance2AuditFees;
    const totalQuotation = totalAuditFees + applicationFees + accreditationFees;

    // Validate role and discount percentage
    let discount = 0;
    if (role === "Business Development Executive" && discountPercentage === 5) {
      discount = (totalAuditFees * discountPercentage) / 100;
    } else if (role === "Regional Head" && discountPercentage === 15) {
      discount = (totalAuditFees * discountPercentage) / 100;
    } else if (discountPercentage > 0) {
      return res.status(403).json({
        message: "You are not authorized to apply the given discount percentage",
      });
    }

    const finalAuditFees = totalAuditFees - discount;

    return res.status(200).json({
      employeeCount,
      standard,
      stage1auditManDays,
      stage2auditManDays,
      surveillance1AuditMandays,
      surveillance2AuditMandays,
      applicationFees,
      accreditationFees,
      auditFeesPerManday,
      stage1AuditFees,
      stage2AuditFees,
      surveillance1AuditFees,
      surveillance2AuditFees,
      totalAuditFees,
      totalQuotation,
      discount,
      finalAuditFees,
    });
  } catch (error) {
    console.error("Error calculating quotation:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getIncreasingCriteria = async (req, res) => {
  try {
    const iIncreasingCriteria = await IncreaseCriteria.findAll();
    return res.status(200).json(iIncreasingCriteria);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

export const getDecreasingCriteria = async (req, res) => {
  try {
    const decreasingCriteria = await DecreasingCriteria.findAll({
      where: {
        decreasingCriteria: {
          [Op.like]: '%IATF16949%'
        }
      }
    });
    return res.status(200).json(decreasingCriteria);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
