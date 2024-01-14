import { user_service } from "../Service/userService.js"

export const registerController = async(req,res,next) => {
    const accessToken = await user_service.register(req.body);
    return res.json({
        message: 'Register successfully',
        access_token: accessToken
    })
}