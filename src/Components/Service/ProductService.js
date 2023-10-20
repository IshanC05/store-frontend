import { http } from "./Axios-config"

export const loadProduct = async () => {
    const res = await http.get(`/product/view`);
    return res.data;
}

export const loadProductByProductId = async (productId) => {
    const res = await http.get(`/product/view/${productId}`);
    return res.data;
}