import axios from "axios";
import { getToken } from "../Auth";

const baseURL = `${process.env.REACT_APP_BASE_URL}`
const token = "Bearer " + getToken();

export const getCartDetails = async () => {
    return axios.get('/cart/user', {
        baseURL: baseURL,
        headers: {
            "Authorization": token
        }
    }).then(response => response.data)
}