import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, Col, Container, Row, Form, Label, Input, Button } from 'reactstrap'
import { createCategory, getCategoryByCategoryId, updateCategory } from './Service/CategoryService'
import { useEffect } from 'react'

function CategoryUpdate() {

    const { categoryId } = useParams()

    const navigate = useNavigate()

    const [category, setCategory] = useState({ title: undefined })

    const onFieldChange = (event, fieldName) => {
        const fieldValue = event.target.value
        setCategory({ ...category, [fieldName]: fieldValue })
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const { title } = category
        if (title === '' || title === null || title === undefined) {
            toast.error('Invalid value for Category');
            return;
        }
        // console.log(category)
        updateCategory(category, categoryId).then(response => {
            // console.log(response)
            toast.success('Category updated successfully')
            navigate("/admin")
        }).catch(error => {
            console.log(error)
        })
    }

    const handleAdd = (event) => {
        event.preventDefault();
        const { title } = category
        if (title === '' || title === null || title === undefined) {
            toast.error('Invalid value for Category');
            return;
        }
        createCategory(category).then(response => {
            // console.log(response);
            toast.success('Category added successfully')
            navigate("/admin")
        }).catch(error => {
            console.log(error)
        })
    }

    const getCategoryDetails = () => {
        getCategoryByCategoryId(categoryId).then(response => {
            const { title } = response;
            setCategory({ title })
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (categoryId !== '0') {
            getCategoryDetails()
        }
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Card className='shadow-sm mt-5'>
                            <CardHeader>
                                <h4>{categoryId === '0' && <span>Add</span>}{categoryId !== '0' && <span>Update</span>} category</h4>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className='my-3'>
                                        <Label for='category-title'>Category</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                        <Input type='text' placeholder='Electronics' id='category-title' onChange={(event) => onFieldChange(event, 'title')} value={category.title || ''}></Input>
                                        {category.title === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Title cannot be empty</span>}
                                    </div>
                                    {/* {submitLoading && <Spinner />} */}
                                    {/* {!submitLoading &&  */}
                                    <div className='my-3'>
                                        {categoryId !== '0' && <Button color='success' onClick={handleUpdate}>Update</Button>}
                                        {categoryId === '0' && <Button color='success' onClick={handleAdd}> Add</Button>}
                                    </div>
                                    {/* } */}
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CategoryUpdate