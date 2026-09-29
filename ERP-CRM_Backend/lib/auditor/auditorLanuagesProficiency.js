import AuditorLanuagesProficiency from "../../models/auditor/auditorLanuagesProficiency.js";

const auditorLanuagesProficiency = [
    "Understanding",
    "Speaking",
    "Writing",
    "Writing & Speaking",
];

export const seedAuditorLanuagesProficiency = async () => {
    for (const auditorLanuageProficienies of auditorLanuagesProficiency) {
        await AuditorLanuagesProficiency.findOrCreate({
            where: { name: auditorLanuageProficienies },
        });
    }
};
