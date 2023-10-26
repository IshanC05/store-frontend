import React, { useState } from 'react'
import CartContext from './CartContext'
import axios from "axios";
import { getToken } from '../../Auth';
import { toast } from 'react-toastify';

function CartContextProvider({ children }) {

    const baseURL = `${process.env.REACT_APP_BASE_URL}`

    const [cart, setCart] = useState({})
    const [loading, setLoading] = useState(true)
    const [cartTotal, setCartTotal] = useState(0.0)

    const getCartDetails = async () => {
        const jwtToken = getToken();
        const token = "Bearer " + jwtToken;
        axios.get('/cart/user', {
            baseURL: baseURL,
            headers: {
                "Authorization": token
            }
        }).then(response => {
            setCart(response.data)
            setLoading(false)
            calculateCartTotal(response.data)
        }).catch(error => console.log(error))
    }

    const resetCart = () => {
        setCart(null)
        setLoading(true)
        setCartTotal(0.0)
    }

    const calculateCartTotal = (cartData) => {
        let cartTotal = 0.0
        for (const cartItem of cartData.cartItem) {
            cartTotal += cartItem.totalPrice;
        }
        setCartTotal(cartTotal)
    }

    const updateProductQuantity = async (itemRequest, message) => {
        try {
            const jwtToken = getToken();
            const token = "Bearer " + jwtToken;
            // eslint-disable-next-line
            const response = await axios.post(`${baseURL}/cart/`, itemRequest, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            });
            // console.log(response);
            toast.success(message)
            getCartDetails()
        } catch (error) {
            console.error(error);
        }
    }

    const deleteProductFromCart = async (productId) => {
        try {
            const jwtToken = getToken();
            const token = "Bearer " + jwtToken;
            // eslint-disable-next-line
            const response = await axios.delete(`${baseURL}/cart/${productId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            });
            toast.error("Product deleted from cart")
            getCartDetails()
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CartContext.Provider value={{ cart, setCart, getCartDetails, loading, resetCart, cartTotal, updateProductQuantity, deleteProductFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider