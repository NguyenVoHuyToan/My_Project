import jwt from "jsonwebtoken";
const privateKey=process.env.PRIVATE_KEY;
export const checkToken=(privateKey,token)=>{
  

    return new Promise((resolve,reject)=>{
      const decode=jwt.verify(token,privateKey,{maxAge:"1h"},(err,token)=>{
        if(err){
          reject(err.message)
        }
        resolve(token);
        
      });
      
    })
  }

export const validateToken = async (req, res, next) => {

    const token = req.body.accessToken;

   
    const userUnit= await checkToken(privateKey,token);
    
    // if(result.username== "admin"){
    //   return res.json("success")
    // }
    // else{
    //   return res.json("fail")
    // }
    
    const result= await databaseUnit.users.findOne({email:userUnit.email});
    if(result){
      return next();
    }
    else{
      throw new Error("Access token is wrong")
    }
}
export const validateAdminToken = async (req, res, next) => {

  const token = req.body.accessToken;
 
  const userUnit= await checkToken(privateKey,token);
  
  // if(result.username== "admin"){
  //   return res.json("success")
  // }
  // else{
  //   return res.json("fail")
  // }
  
  const result= await databaseUnit.users.findOne({email:userUnit.email});

  if(result.email == "admin@gmail.com" ){
    return next();
  }
  else{
    throw new Error("Access token is wrong")
  }
}

