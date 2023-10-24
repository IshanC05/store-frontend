import React, { useEffect, useState } from 'react'
import { getCartDetails } from './Service/CartService'
import { ListGroup, ListGroupItem } from 'reactstrap'
import CartItem from './CartItem'

function Cart() {

    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCartDetails()
        // eslint-disable-next-line
    }, [])

    const fetchCartDetails = () => {
        getCartDetails().then(cartData => {
            delete cartData.user
            setCart(cartData)
            setLoading(false)
            // console.log(cart)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            {
                loading &&
                <div>Loading...</div>
            }
            {
                !loading && <div className='container my-2'>
                    <ListGroup>
                        {
                            cart && cart.cartItem.map((each, index) => (
                                <ListGroupItem className="border-0" key={index}>
                                    <CartItem productName={each.product.productName} productDesc={each.product.productDesc} imageName={each.product.imageName} productPrice={each.product.productPrice} />
                                </ListGroupItem>
                            ))
                        }

                    </ListGroup>
                </div>
            }
        </>
    )
}

export default Cart