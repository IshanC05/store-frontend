import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import CartItem from './CartItem'
import CartContext from './Context/Cart/CartContext'

function Cart() {

    const { cart, getCartDetails, loading, cartTotal, formatPrice } = useContext(CartContext)

    const formattedCartTotal = cartTotal ? formatPrice(cartTotal) : formatPrice(0)

    useEffect(() => {
        getCartDetails()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                loading &&
                <div>Loading...</div>
            }
            {
                !loading && <div className='container my-2 mx-auto' style={{ maxWidth: "610px" }}>
                    <ListGroup>
                        {
                            cart && cart.cartItem.map((cartItem, index) => (
                                <ListGroupItem className="border-0" key={index}>
                                    <CartItem productId={cartItem.product.productId} productName={cartItem.product.productName} productDesc={cartItem.product.productDesc} imageName={cartItem.product.imageName} productPrice={cartItem.product.productPrice} quantity={cartItem.quantity} />
                                </ListGroupItem>
                            ))
                        }
                        {
                            cart && cart.cartItem && cart.cartItem.length !== 0 && <div className="my-2" style={{ maxWidth: "600px" }}>
                                <ListGroupItem>
                                    <span ><b>Total: </b>{formattedCartTotal}</span>
                                </ListGroupItem>
                            </div>
                        }

                    </ListGroup>
                    {cart && cart.cartItem && cart.cartItem.length !== 0 && <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">Checkout</button>
                    </div>}
                </div>
            }
            {
                cart && cart.cartItem && cart.cartItem.length === 0 && <div className='container text-center'>
                    <h1>Cart is empty</h1>
                </div>
            }
        </>
    )
}

export default Cart