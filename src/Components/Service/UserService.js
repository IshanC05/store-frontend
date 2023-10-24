import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`

export const createUser = async (userData) => {
    return axios.post(`${BASE_URL}/auth/create`, userData).then(response => response.data)
}

export const loginUser = async (userData) => {
    return axios.post(`${BASE_URL}/auth/login`, userData).then(response => response.data)
}