import Department from "../models/deparment.js";

const deparments = ["Hr", "Admin", "User"];

export const seedDepartmnt = async () => {
  for (const department of deparments) {
    await Department.findOrCreate({
      where: { name: department },
    });
  }
};
