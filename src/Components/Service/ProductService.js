import axios from "axios";
import { getToken } from "../Auth";
import { http } from "./Axios-config"

const baseURL = `${process.env.REACT_APP_BASE_URL}`

export const loadProduct = async () => {
    const response = await http.get(`/product/view`);
    return response.data;
}

export const loadProductByProductId = async (productId) => {
    const response = await http.get(`/product/view/${productId}`);
    return response.data;
}

export const updateExistingProductById = async (productId, productDetails) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.put(`${baseURL}/product/update/${productId}`, productDetails, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addNewProduct = async (categoryId, productDetails) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.post(`${baseURL}/product/create/${categoryId}`, productDetails, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}