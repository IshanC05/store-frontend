import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loadProductByProductId } from './Service/ProductService'
import CartContext from './Context/Cart/CartContext'
import { isLoggedIn } from './Auth'
import { Button } from 'reactstrap'
import Spinner from './Spinner'

function Product() {

    const { productId } = useParams()

    const navigate = useNavigate()

    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true);

    const [spinnerLoading, setSpinnerLoading] = useState(false)

    const { updateProductQuantity, formatPrice } = useContext(CartContext)

    const formattedProductPrice = (productData && productData.productPrice ? formatPrice(productData.productPrice) : formatPrice(0))

    useEffect(() => {
        getProductDataById(productId)
        // eslint-disable-next-line
    }, [])


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

    const getProductDataById = (productId) => {
        loadProductByProductId(productId).then(response => {
            setProductData(response)
            setLoading(false)
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            {loading && <Spinner />}
            {!loading &&
                <div className="container my-5">
                    <div className="card border-0">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={productData.imageName} style={{ maxHeight: "450px", objectFit: "contain" }} alt="product" /></div>
                                    </div>
                                </div>
                                <div className="details col-md-6 provide-margin-left">
                                    <h3 className="product-title my-5 text-start provide-margin-left">{productData.productName}</h3>
                                    <p className="product-description text-wrap provide-margin-left">{productData.productDesc}</p>
                                    <h4 className="price provide-margin-left">Price: <span>{formattedProductPrice}</span></h4>
                                    {spinnerLoading && <Spinner />}
                                    {!spinnerLoading && <div className="action my-5">
                                        <Button className="btn btn-default mx-2" type="button" variant="primary" onClick={handleAddToCart}>Add to cart </Button>
                                    </div>}
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