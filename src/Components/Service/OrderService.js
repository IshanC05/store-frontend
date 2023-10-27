import axios from "axios";
import { getToken } from "../Auth";

const baseURL = `${process.env.REACT_APP_BASE_URL}`

export const getOrdersByUser = async () => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.get(`${baseURL}/order/find`, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        return response.data.content
    } catch (error) {
        console.log(error)
    }
};