import jwt from "jsonwebtoken";
import databaseProject from "../mongodb.js";
const privateKey=process.env.PRIVATE_KEY;
export const checkToken=(privateKey,token)=>{
  

    return new Promise((resolve,reject)=>{
      const decode=jwt.verify(token,privateKey,(err,token)=>{
        if(err){
          reject(err.message)
        }
        resolve(token);
        
      });
      
    })
  }

export const validateToken = async (req, res, next) => {
    console.log("accessToken",req.body);
    const token = req.body.accessToken;
    
    console.log(token);
    const userUnit= await checkToken(privateKey,token);
    
    // if(result.username== "admin"){
    //   return res.json("success")
    // }
    // else{
    //   return res.json("fail")
    // }
    console.log("userUnit",userUnit);
    const result= await databaseProject.users.findOne({email:userUnit.email});
    console.log(result);
    req.userEmail=userUnit.email;
    req.decode=result
    if(result){
      return next();
    }
    else{
      throw new Error("Access token is wrong")
    }
}
export const validateAdminToken = async (req, res, next) => {

  const token = req.body.accessToken;
  console.log("accessToken",token);
  const userUnit= await checkToken(privateKey,token);
  
  // if(result.username== "admin"){
  //   return res.json("success")
  // }
  // else{
  //   return res.json("fail")
  // }
  
  const result= await databaseProject.users.findOne({email:userUnit.email});
  console.log(result);
  if(result.email == "admin@gmail.com" ){
    return next();
  }
  else{
    throw new Error("Access token is wrong")
  }
}


