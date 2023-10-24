import React from 'react'
import './CSS/cartitem.scss'

function CartItem({ productName, productDesc, imageName, productPrice }) {

    return (
        <>
            {/* border-0 */}
            <div className="card mb-3 container-fluid"
                style={{ maxWidth: "600px" }}
            >
                <div className="row g-0">
                    <div className="col-md-4" style={{ maxHeight: "290px" }}>
                        <img src={imageName} className="img-fluid rounded-start img-max-height" style={{ height: "100%", width: "100%", objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productName}</h5>
                            <p className="card-text">{productDesc}</p>
                            <span className="card-text">₹ {productPrice}</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CartItem