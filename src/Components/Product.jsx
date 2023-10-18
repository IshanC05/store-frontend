import React from 'react'
import { Badge, Button } from 'reactstrap'

function Product({ product }) {

    return (
        <div className='my-3'>
            <div className="card" >
                <img src={product.imageName} className="card-img-top" alt="..." style={{ maxHeight: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.productName} <span className='text-right'><b>₹</b><Badge color='success' pill style={{ marginLeft: '5px' }}>{product.productPrice}</Badge></span></h5>
                    <p className="card-text">{product.productDesc}</p>
                    <div className='d-flex justify-content-between'>
                        <Button color='info' size='xl' className='m-2'>View</Button>
                        <Button color='primary' size='sm' className='m-2'>Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product