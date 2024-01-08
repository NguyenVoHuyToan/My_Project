export const getOAuth=async (req,res)=>{
    const oauth2Client = new google.auth.OAuth2(
        "145235191844-f43anvogvcut7gab7p1etehf0idjcqs5.apps.googleusercontent.com",
        "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",
        "https://localhost:3000/user/oauth"
      );
    const {code}=req.query;
    const {token}=await oauth2Client.getToken(code);
    const userInfo= await oauth2Client.getTokenInfo(token.access_token);
    
    return res.json(userInfo);
}