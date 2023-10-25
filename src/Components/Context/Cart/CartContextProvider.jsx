import React, { useState } from 'react'
import CartContext from './CartContext'
import axios from "axios";
import { getToken } from '../../Auth';

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

    const updateProductQuantity = async (itemRequest) => {
        try {
            const jwtToken = getToken();
            const token = "Bearer " + jwtToken;
            const response = await axios.post(`${baseURL}/cart/`, itemRequest, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            getCartDetails()
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CartContext.Provider value={{ cart, setCart, getCartDetails, loading, resetCart, cartTotal, updateProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider