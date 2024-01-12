import { checkSchema, validationResult } from "express-validator";

import { database } from "../Database/database.js";
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
        isemail: false,
        custom: {
          options: async (value) => {
            const isExist = await database.user().findOne({ email: value });
            console.log(isExist);
            if (isExist) {
              throw new Error("EMAIL IS EXISTED");
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
              throw new Error("Error Pass");
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
      username: {
        errorMessage: "Invalid username",
        isUserName: false,
        custom: {
          options: async (value) => {
            const isUserExist = await database.user().findOne({ username: value });

            if (isUserExist) {
              return true;
            } else {
              throw new Error("Error: USERNAME IS NOT EXIST");
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
            const userLogin = await database
              .user()
              .findOne({ username: req.body.username });

            if (userLogin.password == value) {
              return true;
            } else {
              throw new Error("ERROR: PASSWORD DOES NOT MATCH");
            }
          },
        },
      },
    },
    ["body"]
  )
);
