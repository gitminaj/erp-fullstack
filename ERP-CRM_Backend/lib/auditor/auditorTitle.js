
import AuditorTitle from "../../models/auditor/auditorTitle.js";
const auditorTitles = ["Mr", "Mrs", "Miss", "Capt", "Cdr", "Dr"];

export const seedAuditorTitles = async () => {
  for (const auditorTitle of auditorTitles) {
    await AuditorTitle.findOrCreate({
      where: { name: auditorTitle },
    });
  }
};
