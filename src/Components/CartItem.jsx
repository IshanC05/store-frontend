import React, { useContext } from 'react'
import './CSS/cartitem.scss'
import { Link } from 'react-router-dom'
import CartContext from './Context/Cart/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function CartItem({ productId, productName, productDesc, imageName, productPrice, quantity }) {

    const { updateProductQuantity, deleteProductFromCart, formatPrice } = useContext(CartContext)

    const formattedProductPrice = productPrice ? formatPrice(productPrice) : formatPrice(0);

    const handleQuantityUpdate = (value) => {
        const itemRequest = { productId, "quantity": value }
        const message = "Product Quantity updated"
        updateProductQuantity(itemRequest, message)
    }

    const handleDelete = () => {
        // console.log('Delete called for productId ' + productId)
        deleteProductFromCart(productId)
    }

    return (
        <>
            <div className="card mb-3 container-fluid border-0"
                style={{ maxWidth: "600px" }}
            >
                <div className="row g-0">
                    <div className="col-md-4" style={{ maxHeight: "290px" }}>
                        <img src={imageName} className="img-fluid rounded img-max-height" style={{ height: "100%", width: "100%", objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title" style={{ display: "inline-block" }}>
                                    <Link className='link-dark' to={"/product/" + productId}>
                                        {productName}
                                    </Link>
                                </h5>
                                <Link to="/cart" className='text-decoration-none pe-auto'>
                                    <span className=''>
                                        <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000", }} onClick={handleDelete} />
                                    </span>
                                </Link>
                            </div>
                            <p className="card-text">{productDesc}</p>
                            <div className="d-flex justify-content-between">
                                <span className="card-text">{formattedProductPrice}</span>
                                <div style={{ padding: "2px" }}>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleQuantityUpdate(+1)}>+</button>
                                    <span style={{ margin: "0px 15px" }}>{quantity}</span>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleQuantityUpdate(-1)} disabled={quantity === 1}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CartItem