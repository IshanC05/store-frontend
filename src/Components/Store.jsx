import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './CSS/store.scss'
import Product from './Product'
import { loadProduct } from './Service/ProductService'
import { useParams } from 'react-router-dom'
import { loadProductByCategory } from './Service/CategoryService'


function Store() {

    const [productDetails, setProductDetails] = useState(null)
    const { categoryId } = useParams()

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [categoryId])


    const getProduct = () => {
        let ob = null;
        if (categoryId === "all") {
            ob = loadProduct();
        } else {
            ob = loadProductByCategory(categoryId);
        }
        ob.then(data => {
            setProductDetails(data)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='store'>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                    {(productDetails) && productDetails.content.map((each, index) => {
                        return <div className="col-md-4" key={index}>
                            <Product product={each} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Store