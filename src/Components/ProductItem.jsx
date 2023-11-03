import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from 'reactstrap'
import './CSS/productpage.scss'
import { getRole, isLoggedIn } from './Auth';
import CartContext from './Context/Cart/CartContext';
import Spinner from './Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function ProductItem({ product }) {

    const navigate = useNavigate();
    const { updateProductQuantity, formatPrice } = useContext(CartContext)

    const { productId, imageName, productName, productPrice, productDesc } = product
    const formattedProductPrice = productPrice ? formatPrice(productPrice) : formatPrice(0)

    const [spinnerLoading, setSpinnerLoading] = useState(false)

    const handleView = () => {
        navigate("/product/" + productId)
    }

    const handleAddToCart = () => {
        setSpinnerLoading(true)
        if (!isLoggedIn()) {
            navigate("/login")
        }
        const itemRequest = { productId: productId, quantity: 1 }
        const message = "Product added to the Cart"
        updateProductQuantity(itemRequest, message)
        setTimeout(() => setSpinnerLoading(false), 1000)
    }

    const handleEdit = () => {
        navigate("/edit/" + productId)
    }

    return (
        <div className='my-3'>
            <div className="card" >
                <img src={imageName} className="card-img-top" alt="..." style={{ maxHeight: '250px', objectFit: 'cover' }} />
                <div className="card-body cardBody-maxHeight">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{productName}</h5>
                        <span className='text-right'>
                            <Badge color='success' pill style={{ marginLeft: '5px' }}>{formattedProductPrice}</Badge>
                        </span>
                    </div>
                    <p className="card-text">{productDesc}</p>
                    {spinnerLoading && <Spinner />}
                    {!spinnerLoading && <div className='d-flex justify-content-between'>
                        <Button color='info' size='xl' className='m-2' onClick={handleView}>View</Button >
                        {getRole() === 'ROLE_ADMIN' && <Button color='info' size='xl' className='m-2' onClick={handleEdit}>
                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000", }} />
                        </Button >}
                        <Button color='primary' size='sm' className='m-2' onClick={handleAddToCart}>Add to cart</Button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ProductItem