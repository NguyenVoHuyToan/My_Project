import { checkSchema, validationResult } from "express-validator";

import databaseProject from "../mongodb.js";

export const validator = (schema) => {
  return async (req, res, next) => {
    console.log(req);
    await schema.run(req);
    const error = validationResult(req).mapped();
    if (Object.values(error).length > 0) {
      // next(error);
      return res.json({ error });
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
          options: async (value, { req }) => {
            const isExist = await databaseProject.users.findOne({
              email: value,
            });
            
            if (isExist) {
              throw new Error("Email is already existed");
            }
            return true;
          },
        },
      },
      password: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Password should be at least 8 chars",
        },
      },
      confirmPassword: {
        isLength: {
          options: { min: 8 },
          errorMessage: "Password should be at least 8 chars",
        },
        custom: {
          options: (value, { req }) => {
            if (value !== req.body.password) {
              throw new Error("Confirm password must be same as password");
            }
            return true;
          },
        },
      },
      // gender: {
      //   errorMessage: "Invalid gender",
      //   custom: {
      //     options: (value, { req }) => {
      //       if (
      //         !value ||
      //         !(["male","female","other"].includes(value.toLowerCase()))
      //       ) {
      //         throw new Error(`Gender should be male, female or other`);
      //       }
      //       return true;
      //     },
      //   },
      // },
      // birthday: {
      //   errorMessage: "Invalid birthday",
      //   custom: {
      //     options: (value, { req }) => {
      //       if (!value || isNaN(Date.parse(value))) {
      //         throw new Error("Birthday should be a valid date");
      //       }
      //       return true;
      //     },
      //   },
      // },
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
            if (userLogin.password === value) {
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
