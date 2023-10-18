import { http } from "./Axios-config"

export const loadProduct = async () => {
    const res = await http.get(`/product/view`);
    return res.data;
}