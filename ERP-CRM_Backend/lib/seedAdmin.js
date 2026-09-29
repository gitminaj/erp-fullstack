import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { seedRoles } from "./role.js";
import { setPermissionsBasedOnRole } from "./permission.js";


const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};


export const seedAdmin = async () => {
  await seedRoles();

  const adminEmail = "admin@gmail.com";
  const adminPassword = await hashPassword("adminpassword");
  const permission = setPermissionsBasedOnRole("Administrator")

  await User.findOrCreate({
    where: { email: adminEmail },
    defaults: {
      firstName: "Admin",
      lastName: "Admin",
      email: adminEmail,
      password: adminPassword,
      roleName: "Administrator",
      isActive: true,
      permissions: permission
    },
  });
};

export const seedAuditPlanner = async () => {
  await seedRoles();

  const auditEmail = "minaj@gmail.com";
  const auditPassword = await hashPassword("minaj123");
  const permission = setPermissionsBasedOnRole("Audit Planner")

  await User.findOrCreate({
    where: { email: auditEmail },
    defaults: {
      firstName: "Minaj",
      lastName: "Minaj",
      email: auditEmail,
      password: auditPassword,
      roleName: "Audit Planner",
      isActive: true,
      permissions: permission
    },
  });
};