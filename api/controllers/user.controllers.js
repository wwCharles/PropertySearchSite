import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

// export const test = (req, res) => {
//   res.send("API route working");
// };

export const test = (req, res) => {
  res.json({
    message: "API route working",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your account"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.passsword, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.bodt.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...userInfo } = updateUser._doc;
    res.status(200).json(userInfo);
  } catch (error) {
    next(error);
  }
};
