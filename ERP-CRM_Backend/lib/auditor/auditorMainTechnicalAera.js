import AuditorMainTechnicalArea from "../../models/auditor/auditorMainTechnicalArea.js";

const auditorMainTechnicalAreas = [
    "A.1.1-NON-ACTIVE MEDICAL DEVICES A.1.1-Part-01-General non-active, non-implantable medical devices",
    "A.1.2-ACTIVE (NON-IMPLANTABLE) MEDICAL DEVICES A.1.2-Part-01-General active medical devices",
    "A.1.3-Active Implantable medical Devices A.1.3-General active implantable medical devices",
    "A.1.4-IN VITRO DIAGNOSTIC MEDICAL DEVICES A.1.4-Reagents and reagent products, calibrators and control materials for; Clinical Chemistry, Immunochemistry, Hematology, Immunohematology, Microbiology, InfectiousImmunology, Histology, Genetic Testing",
    "A.1.5 - STERILIZATION METHODS FOR MEDICAL DEVICES A.1.5 - Ethylene oxide gas sterilization(EOG)",
    "A.1.6-DEVICES INCORPORATING / UTILIZING SPECIFIC SUBSTANCES / TECHNOLOGIES A.1.6-Medical devices incorporating medicinal substances",
    "A.1.7-PARTS AND SERVICES A.1.7-Raw materials"
];

export const seedAuditorMainTechnicalArea = async () => {
    for (const auditorMainTechnicalArea of auditorMainTechnicalAreas) {
        await AuditorMainTechnicalArea.findOrCreate({
            where: { name: auditorMainTechnicalArea },
        });
    }
};
