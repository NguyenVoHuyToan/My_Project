import { checkSchema, validationResult } from "express-validator";

import databaseProject from "../mongodb.js";
export const validator = (schema) => {
  return async (req, res, next) => {
    await schema.run(req);
    const error = validationResult(req).mapped();
    if (Object.values(error).length > 0) {
      next(error);
    }
    next();
  };
};

export const validateRegister = validator(
  checkSchema(
    {
      email: {
        errorMessage: "Invalid email",
        isEmail: true,
        custom: {
          options: async (value) => {
            const isExist = await databaseProject.users.findOne({
              email: value,
            });
            console.log(isExist);
            if (isExist) {
              throw new Error("Email is already existsMAIL IS EXISTED");
            } else {
              return true;
            }
          },
        },
      },
      password: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Password should be at least 8 chars",
        },
      },
      confirm_pass: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Password should be at least 8 chars",
        },
        custom: {
          options: (value, { req }) => {
            if (value != req.body.password) {
              throw new Error("Confirm password must be same as password");
            }
            return true;
          },
        },
      },
    },
    ["body"]
  )
);

export const loginValidator = validator(
  checkSchema(
    {
      email: {
        errorMessage: "Invalid email",
        isEmail: true,
        custom: {
          options: async (value) => {
            const isUserExist = await databaseProject.users.findOne({
              email: value,
            });

            if (isUserExist) {
              return true;
            } else {
              throw new Error("Email is not registered");
            }
          },
        },
      },
      password: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Password should be at least 8 chars",
        },
        custom: {
          options: async (value, { req }) => {
            const userLogin = await databaseProject.users.findOne({
              email: req.body.email,
            });
            if (userLogin.password == value) {
              return true;
            } else {
              throw new Error(" PASSWORD DOES NOT MATCH");
            }
          },
        },
      },
    },
    ["body"]
  )
);
