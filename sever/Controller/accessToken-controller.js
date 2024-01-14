import {createAccessToken} from "../jwt/creatAccessToken.js";
export const accessTokenController = async(req,res) => {
    
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
   
    
    const token = await createAccessToken(user);
    
    return res.json({
        accessToken : token
    })
}
