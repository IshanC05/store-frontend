import axios from "axios";

const BASE_URL = "http://localhost:8080"

export const createUser = async (userData) => {
    return axios.post(`${BASE_URL}/auth/create`, userData).then(response => response.data)
}

export const loginUser = async (userData) => {
    return axios.post(`${BASE_URL}/auth/login`, userData).then(response => response.data)
}