import AuditorLanuage from "../../models/auditor/auditorLanuage.js";

const auditorLanuages = [
  "English",
  "Hindi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Gujarati",
  "Others"
];

export const seedAuditorLanuages = async () => {
  for (const auditorLanuage of auditorLanuages) {
    await AuditorLanuage.findOrCreate({
      where: { name: auditorLanuage },
    });
  }
};
