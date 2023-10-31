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

export const placeOrder = async (orderRequest) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.post(`${baseURL}/order/`, orderRequest, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        return response.data.content
    } catch (error) {
        console.log(error)
    }
}

// Razorpay
export const createTransaction = async (amount) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.get(`${baseURL}/order/createTransaction/${amount}`, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
};