import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    if (!token || token === undefined) {
      return res.status(404).json({
        success: false,
        message: "Token missing",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.existUser = decode;
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong while verify the token",
      });
    }
    next();
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

// export const isBD = async (req, res, next) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         email: req.existUser.email,
//       },
//     });
//     if (user.roleName !== "Business Development Executive") {
//       return res.status(404).json({
//         success: false,
//         message: "You are not authorized to create or modify data",
//       });
//     }
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// };
