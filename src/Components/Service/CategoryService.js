import { http } from "./Axios-config";

export const loadCategory = async () => {
    return http.get('/category/viewAll').then(response => response.data);
}

export const loadProductByCategory = async (categoryId) => {
    return http.get(`/product/category/${categoryId}`).then(response => response.data)
}