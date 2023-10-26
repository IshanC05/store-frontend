import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from 'reactstrap'
import './CSS/productpage.scss'
import { isLoggedIn } from './Auth';
import CartContext from './Context/Cart/CartContext';


function ProductItem({ product }) {

    const navigate = useNavigate();
    const { updateProductQuantity } = useContext(CartContext)

    const { productId, imageName, productName, productPrice, productDesc } = product

    const handleView = () => {
        navigate("/product/" + productId)
    }

    const handleAddToCart = () => {
        if (!isLoggedIn()) {
            navigate("/login")
        }
        const itemRequest = { productId: productId, quantity: 1 }
        const message = "Product added to the Cart"
        updateProductQuantity(itemRequest, message)
    }

    return (
        <div className='my-3'>
            <div className="card" >
                <img src={imageName} className="card-img-top" alt="..." style={{ maxHeight: '250px', objectFit: 'cover' }} />
                <div className="card-body cardBody-maxHeight">
                    <h5 className="card-title">{productName} <span className='text-right'><b>₹</b><Badge color='success' pill style={{ marginLeft: '5px' }}>{productPrice}</Badge></span></h5>
                    <p className="card-text">{productDesc}</p>
                    <div className='d-flex justify-content-between'>
                        <Button color='info' size='xl' className='m-2' onClick={handleView}>View</Button >
                        <Button color='primary' size='sm' className='m-2' onClick={handleAddToCart}>Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductItem