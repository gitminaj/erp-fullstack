import AuditorSubTechnicalArea from "../../models/auditor/auditorSubTechnicalArea.js";

const auditorSubTechnicalAreas = [
    "A.1.1-Part-01-General non-active,non-implantable medical devices",
    "A.1.1-Part-02-Non- active implants",
    "A.1.1-Part-03-Device for wound care",
    "A.1.1-Part-04-Non-active dental devices and accessories",
    "A.1.1-Part-05-Non-active medical devices other than specified above",
    "A.1.2-Part-01-General active medical devices",
    "A.1.2-Active (Non-Implantable) Medical Devices",
    "A.1.2-Part-02-Devices for imaging",
    "A.1.2-Part-03-Monitoring devices (Part- 03)",
    "A.1.2-Part-04-Devices for radiation therapy and thermo therapy",
    "A.1.2-Part-05-Active ( non-implantable medical devices) other than specified above",
    "A.1.3-Active Implantable Medical Devices",
    "A.1.3-Part-01-General active implantable medical devices",
    "A.1.3-Implantable medical devices other than specified above",
    "A.1.4-In Vitro Diagnostic Medical Devices",
    "A.1.4-Part-01-Reagents and reagent products, calibrators, and control materials for:Clinical Chemistry Immunochemistry (Immunology)Haematology/Haemostasis/ Immunohematology MicrobiologyInfectious Immunology Histology/Cytology Genetic Testing",
    "A.1.4-In Vitro Diagnostic Instruments and software",
    "A.1.4-IVD Medical Device Other than Specified above",
    "A.1.5-Sterilization Methods for Medical Devices",
    "A.1.5-Part-01-Ethylene oxide gas sterilization (EOG)",
    "A.1.5-Moist heat",
    "A.1.5-Aseptic processing",
    "A.1.5-Radiation sterilization (e.g. gamma, x-ray, electron beam)",
    "A.1.5-Low temperature steam and formaldehyde sterlization",
    "A.1.5-Thermic sterilization with dry heat",
    "A.1.5-Sterlization with hydrogen peroxide",
    "A.1.5-Sterilization method other than specified above",
    "A.1.6-Devices Incorporating / Utilizing Specific Substances / Technologies",
    "A.1.6-Medical Devices Utilizing Tissues of Animal origin",
    "A.1.6-Medical devices incorporating human blood",
    "A.1.6-Medical devices utilizing micromechanics",
    "A.1.6-Medical devices utilizing nanomaterials",
    "A.1.6-Medical devices utilizing biological active coatings and/or materials or being wholly or mainly absorbed",
    "A.1.6-Medical devices incorporating or utilizing specific substances/technologies/elements other than specified above",
    "A.1.7-Parts and Services",
    "A.1.7-Part-01-Raw materials",
    "A.1.7-Components",
    "A.1.7-Subassemblies",
    "A.1.7-Calibration services",
    "A.1.7-Distribution services",
    "A.1.7-Maintenance services",
    "A.1.7-Transportation services",
    "A.1.7-Other services",
];

export const seedAuditorSubTechnicalArea = async () => {
    for (const auditorSubTechnicalArea of auditorSubTechnicalAreas) {
        await AuditorSubTechnicalArea.findOrCreate({
            where: { name: auditorSubTechnicalArea },
        });
    }
};
