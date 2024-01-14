import { user_service } from "../Service/userService"

export const registerController = async(res,req,next) => {
    const accessToken = await user_service.register(req.body);
    return res.json({
        message: 'Register successfully',
        access_token: accessToken
    })
}