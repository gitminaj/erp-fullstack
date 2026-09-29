import AuditorUpgradeCsv from "../../models/auditor/auditorUpgradeCsv.js";

const auditorUpgrades = [
    "Auditor",
    "Auditor / Provisional Team Leader",
    "Team Leader",
    "Industry Expert",
    "Provisional Auditor / Industry Expert",
    "Provisional Team Leader",
    "Provisional Technical Exper"
];

export const seedAuditorUpgrades = async () => {
    for (const auditorUpgrade of auditorUpgrades) {
        await AuditorUpgradeCsv.findOrCreate({
            where: { name: auditorUpgrade },
        });
    }
};
