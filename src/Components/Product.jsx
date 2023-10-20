import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loadProductByProductId } from './Service/ProductService'

function Product() {

    const { productId } = useParams()

    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate("/store/all")
    }

    useEffect(() => {
        getProductDataById(productId)
        // eslint-disable-next-line
    }, [])

    const getProductDataById = (productId) => {
        loadProductByProductId(productId).then(response => {
            console.log(response);
            setProductData(response)
            setLoading(false)
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            {!loading &&
                <div className="container my-5">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={productData.imageName} style={{ maxHeight: "450px", objectFit: "contain" }} /></div>
                                    </div>
                                </div>
                                <div className="details col-md-6 provide-margin-left">
                                    <h3 className="product-title my-5 text-start provide-margin-left">{productData.productName}</h3>
                                    <p className="product-description text-wrap provide-margin-left">{productData.productDesc}</p>
                                    <h4 className="price provide-margin-left">Price: <span>₹ {productData.productPrice}</span></h4>
                                    <div className="action my-5">
                                        <button className="add-to-cart btn btn-default mx-2" type="button">add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Product