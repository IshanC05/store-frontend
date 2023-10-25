import React, { useContext } from 'react'
import './CSS/cartitem.scss'
import { Link } from 'react-router-dom'
import CartContext from './Context/Cart/CartContext'

function CartItem({ productId, productName, productDesc, imageName, productPrice, quantity }) {

    const { updateProductQuantity } = useContext(CartContext)

    const handleQuantityUpdate = (value) => {
        const itemRequest = { productId, "quantity": value }
        updateProductQuantity(itemRequest)
    }

    return (
        <>
            {/* border-0 */}
            <div className="card mb-3 container-fluid border-0"
                style={{ maxWidth: "600px" }}
            >
                <div className="row g-0">
                    <div className="col-md-4" style={{ maxHeight: "290px" }}>
                        <img src={imageName} className="img-fluid rounded img-max-height" style={{ height: "100%", width: "100%", objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link className='link-dark' to={"/product/" + productId}>
                                    {productName}
                                </Link>
                            </h5>
                            <p className="card-text">{productDesc}</p>
                            <div className="d-flex justify-content-between">
                                <span className="card-text">₹ {productPrice}</span>
                                <div style={{ padding: "2px" }}>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => handleQuantityUpdate(+1)}>+</button>
                                    <button type="button" className="btn btn-primary disabled btn-sm" style={{ margin: "0px 15px" }}>{quantity}</button>
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