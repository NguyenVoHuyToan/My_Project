import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()
const key = process.env.PRIVATE_KEY
export const createAccessToken = (user) => {
  console.log("user", user);
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      key,
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
};

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        const errorMessage = err.message || "Invalid token";
        reject(errorMessage);
      }
      resolve(decoded);
    });
  });
};
