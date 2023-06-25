import { publicRequest } from "../axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/api/users/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure());
    }
}