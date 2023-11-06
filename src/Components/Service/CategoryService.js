import axios from "axios";
import { http } from "./Axios-config";
import { getToken } from "../Auth";

const baseURL = `${process.env.REACT_APP_BASE_URL}`

export const loadCategory = async () => {
    return http.get('/category/viewAll').then(response => response.data);
}

export const loadProductByCategory = async (categoryId) => {
    return http.get(`/product/category/${categoryId}`).then(response => response.data)
}

export const getCategoryByCategoryId = async (categoryId) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.get(`${baseURL}/category/view/${categoryId}`, {
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

export const createCategory = async (categoryDetails) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.post(`${baseURL}/category/create`, categoryDetails, {
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

export const updateCategory = async (categoryDetails, categoryId) => {
    try {
        const jwtToken = getToken()
        const token = "Bearer " + jwtToken;
        const response = await axios.put(`${baseURL}/category/update/${categoryId}`, categoryDetails, {
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