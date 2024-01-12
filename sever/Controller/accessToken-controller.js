import { createAccessToken } from "../jwt/creatAccessToken";

export const accessTokenController = async(req,res) => {
    const user = {
        email: req.body.email,
        pass: req.body.password,
    };
    console.log('user',user);
    const token = await createAccessToken(user);
    return res.json({
        accessToken : token
    })
}