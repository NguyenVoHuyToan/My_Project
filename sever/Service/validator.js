import { checkSchema, validationResult } from "express-validator";


import databaseProject from "../mongodb.js";
export const validator = (schema) => {
  return async (req, res, next) => {
    await schema.run(req);
    const error = validationResult(req).mapped();
    console.log(error);
    if (Object.values(error).length > 0) {

      return res.json(error)
    }
    next();
  };
};

export const validateRegister = validator(
  checkSchema(
    {
      email: {
        errorMessage: "Invalid email",
        isEmail: false,
        custom: {
          options: async (value) => {
            const isExist = await databaseProject.users.findOne({ email: value });
            
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
      email: {
        errorMessage: "Invalid email",
        isEmail: true,
        custom: {
          options: async (value) => {
            const isUserExist = await databaseProject.users.findOne({ email: value });
           console.log(isUserExist);
            if (isUserExist) {
              return true;
            } else {
              throw new Error("Error: email IS NOT EXIST");
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
            const userLogin = await databaseProject
              .users
              .findOne({ email: req.body.email });
            
            if (userLogin.password == value) {
              console.log(userLogin);
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
