import axios from "axios";

const BASE_URL = "http://localhost:8080"

export const createUser = async (userData) => {
    return axios.post(`${BASE_URL}/auth/create`, userData)
}

export const login = async (userData) => {
    return axios.post(`${BASE_URL}/auth/login`, userData)
}