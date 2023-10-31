import { http } from "./Axios-config"

export const loadProduct = async () => {
    const response = await http.get(`/product/view`);
    return response.data;
}

export const loadProductByProductId = async (productId) => {
    const response = await http.get(`/product/view/${productId}`);
    return response.data;
}