import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, Label, Input, CardHeader, Button, Form } from 'reactstrap'
import { createUser } from './Service/UserService';
import { toast } from 'react-toastify';
import Spinner from './Spinner'

function Signup() {

    const [user, setUser] = useState({ name: undefined, email: undefined, password: undefined, phone: undefined, active: true, address: 'random' });

    const [submitLoading, setSubmitLoading] = useState(false)

    const onFieldChange = (event, fieldName) => {
        const fieldValue = event.target.value
        setUser({ ...user, [fieldName]: fieldValue })
    }

    const registerHandler = (event) => {
        setSubmitLoading(true)
        event.preventDefault();
        createUser(user).then(data => {
            toast.success("User added. Please use Login.");
            setUser({ name: undefined, email: undefined, password: undefined, phone: undefined, active: true, address: 'random' })
        }).catch(error => {
            const allErrors = error.response.data
            Object.values(allErrors).forEach(errorMessage => toast.error(errorMessage));
        })
        setTimeout(() => setSubmitLoading(false), 1000)
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setUser({ name: '', email: '', password: '', phone: '', address: 'random', active: true })
    }

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <Card className='shadow-sm mt-5'>
                        <CardHeader>
                            <h4>Signup</h4>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={registerHandler}>
                                <div className='my-3'>
                                    <Label for='name'>Name</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                    <Input type='text' placeholder='John Doe' id='name' onChange={(event) => onFieldChange(event, 'name')} value={user.name || ''} ></Input>
                                    {user.name === '' && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Name cannot be empty</span>}
                                </div>
                                <div className='my-3'>
                                    <Label for='email'>Email</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                    <Input type='email' placeholder='johndoe@example.com' id='email' onChange={(event) => onFieldChange(event, 'email')} value={user.email || ''}></Input>
                                    {user.email === "" && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Email cannot be empty</span>}
                                </div>

                                <div className='my-3'>
                                    <Label for='password'>Password</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                    <Input type='password' id='password' onChange={(event) => onFieldChange(event, 'password')} value={user.password || ''}></Input>
                                    {user.password === "" && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Password cannot be empty</span>}
                                </div>

                                <div className='my-3'>
                                    <Label for='phone'>Phone</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                    <Input type='tel' id='phone' placeholder='12345-67890' onChange={(event) => onFieldChange(event, 'phone')} value={user.phone || ''}></Input>
                                    {user.phone !== undefined && user.phone.length !== 10 && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Invalid Phone number</span>}
                                </div>
                                {submitLoading && <Spinner />}
                                {!submitLoading && <div className='my-3'>
                                    <Button color='success'>Signup</Button>
                                    <Button color='warning' className='mx-3' onClick={resetHandler}>Reset</Button>
                                </div>}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup