import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Form, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import { loadProductByProductId, updateExistingProductById } from './Service/ProductService'
import { toast } from 'react-toastify'

function ProductUpdate() {

    const { productId } = useParams()

    const navigate = useNavigate()

    const [product, setProduct] = useState({ productName: undefined, productPrice: undefined, productDesc: undefined, stock: false, productQuantity: undefined, live: false, imageName: undefined })

    const onFieldChange = (event, fieldName) => {
        const fieldValue = event.target.value
        setProduct({ ...product, [fieldName]: fieldValue })
    }

    const handleToggle = (event, fieldName) => {
        const oldValue = product[fieldName]
        setProduct({ ...product, [fieldName]: !oldValue })
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setProduct({ productName: '', productPrice: '', productDesc: '', stock: true, productQuantity: '', live: true, imageName: '' })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateExistingProductById(productId, product).then(response => {
            console.log(response);
            toast.success("Product Updated successfully")
            navigate("/admin")
        }).catch(error => {
            console.log(error)
        })

    }

    const getProductDataById = (productId) => {
        loadProductByProductId(productId).then(response => {
            delete response.category;
            setProduct(response)
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (productId !== "0")
            getProductDataById(productId)
    }, [])



    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Card className='shadow-sm mt-5'>
                            <CardHeader>
                                <h4>Add / Update a product</h4>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <div className='my-3'>
                                        <Label for='product-name'>Product Title</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                        <Input type='text' placeholder='iPhone 15' id='product-name' onChange={(event) => onFieldChange(event, 'productName')} value={product.productName || ''}></Input>
                                        {product.productName === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Title cannot be empty</span>}
                                    </div>

                                    <div className='my-3'>
                                        <Label for='price'>Product Price</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                        <Input type='number' placeholder='72000' id='price' onChange={(event) => onFieldChange(event, 'productPrice')} value={product.productPrice || ''} ></Input>
                                        {product.productPrice === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Price cannot be empty</span>}
                                    </div>

                                    <div className='my-3'>
                                        <Label for='description'>Product Description</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                        <Input type='textarea' placeholder='Something about the product...' id='description' onChange={(event) => onFieldChange(event, 'productDesc')} value={product.productDesc || ''} ></Input>
                                        {product.productDesc === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Description cannot be empty</span>}
                                    </div>

                                    <div className="form-check form-switch form-check-inline form-check-reverse">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckLive"
                                            checked={product.live}
                                            onChange={(event) => handleToggle(event, 'live')}
                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckLive">is Live?</label>
                                    </div>
                                    <div className="form-check form-switch form-check-inline form-check-reverse">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckStock"
                                            checked={product.stock}
                                            onChange={(event) => handleToggle(event, 'stock')}
                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckStock">in Stock?</label>
                                    </div>


                                    <div className='my-3'>
                                        <Label for='product-qty'>Product Quantity</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                        <Input type='number' placeholder='2000' id='product-qty' onChange={(event) => onFieldChange(event, 'productQuantity')} value={product.productQuantity || ''}></Input>
                                        {product.productQuantity === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Quantity cannot be empty</span>}
                                    </div>

                                    <div className='my-3'>
                                        <Label for='img-name'>Image URL</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                        <Input type='text' placeholder='https://example.com?random-image.jpg' id='img-name' onChange={(event) => onFieldChange(event, 'imageName')} value={product.imageName || ''}></Input>
                                        {product.imageName === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Image url cannot be empty</span>}
                                    </div>

                                    {/* {submitLoading && <Spinner />} */}
                                    {/* {!submitLoading &&  */}
                                    <div className='my-3'>
                                        <Button color='success'>Update</Button>
                                        <Button color='warning' className='mx-3' onClick={resetHandler}>Reset</Button>
                                    </div>
                                    {/* } */}
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container></div>
    )
}

export default ProductUpdate