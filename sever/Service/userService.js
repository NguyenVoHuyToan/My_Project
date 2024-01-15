import { json } from "express";
import databaseProject from "../mongodb.js";
import jwt from "jsonwebtoken";
import { User } from "../Schema/userSchema.js";
import { ObjectId } from "mongodb";
import { createAccessToken } from "../jwt/creatAccessToken.js";
import {google} from "googleapis";
const key = process.env.PRIVATE_KEY;
export const getOAuth = async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(
    "145235191844-f43anvogvcut7gab7p1etehf0idjcqs5.apps.googleusercontent.com",
    "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",
    "http://localhost:3000/user/oauth"
  );
  const { code } = req.query;
  const response  = await oauth2Client.getToken(code);
  
  const userInfo = await oauth2Client.getTokenInfo(response.tokens.access_token);
  console.log(userInfo);
  if (userInfo.email_verified == 'true') {
    const user = await databaseProject.users.findOne({ email: userInfo.email });
    const password = Math.random().toString(36).substring(2, 12);
    if (user) {
      const access_token = jwt.sign(
        { email: user.email, password: password },
        key
      );
      return res.redirect(`http://localhost:5173/?accessToken=${access_token}`);
    } else {
      await databaseProject.users.insertOne({email:userInfo.email,password:password});
    }
  } else {
    throw new Error("Email is wrong");
  }
  

  return res.redirect(`http://localhost:5173/signin`);
  
};
export const changeInfo = async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const gender = req.body.gender;
  const birthday = req.body.birthday;
  await databaseProject.users.updateOne(
    { userId: req.params.id },
    {
      $set: {
        fullName: fullName,
        email: email,
        gender: gender,
        birthday: birthday,
      },
    }
  );
  return res.json("completed");
};

class UserService {
  async register(payload) {
    const existingAccount = await databaseProject.users.findOne({ email: payload.email });
    if (!existingAccount) {
      const user_id = new ObjectId();
      await databaseProject
        .users
        .insertOne(
          new User({
            ...payload,
            _id: user_id,
          })
        );
      const access_token = await createAccessToken({ payload: user_id });
      return access_token;
      
    }
    return false
  }
}
export const user_service = new UserService()

export const getCartDetail=async (req,res)=>{
  const userID=req.params.id;
  console.log(userID);
  const detailCart=await databaseProject.cart.aggregate([
    {
      '$match': {}
    }, {
      '$lookup': {
        'from': 'inventory', 
        'localField': 'cart.product_id', 
        'foreignField': 'product_id', 
        'as': 'product_des'
      }
    }, {
      '$match': {
        'userId': `${userID}`
      }
    }
  ]).toArray();
  return res.json(detailCart)
}

