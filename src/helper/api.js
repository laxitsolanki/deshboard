import axios from "axios";
import { constant } from "../pages/constant";
import { toast } from "react-toastify";

export const api = async (path, data) => {
    try {
        let response = await axios.post(constant.baseUrl + path, data, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        });
        if (response.headers['x-auth-token'] && response.headers['x-auth-token'] !== null) {
            localStorage.setItem('token', response.headers['x-auth-token']);
        }

        if (response && response.status === 200) {
            toast.success(response.data.message);
        }
        return response;
    } catch (error) {
        if (error && error.response) {
            if (error && error.response && error.response.status === 400) {
                if (error.response.data.message) {
                    toast.error(error.response.data.message)
                }
            }
        }
    }
}