import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Row } from 'reactstrap'
import { loginUser } from './Service/UserService';
import { toast } from 'react-toastify';
import { isLoggedIn, login } from './Auth';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner'

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({ username: undefined, password: undefined });

    const [submitLoading, setSubmitLoading] = useState(false)

    useEffect(() => {
        if (isLoggedIn()) {
            navigate("/")
        }
    })


    const onFieldChange = (event, fieldName) => {
        const fieldValue = event.target.value
        setLoginData({ ...loginData, [fieldName]: fieldValue })
    }

    const handleLogin = (event) => {
        setSubmitLoading(true)
        event.preventDefault();
        loginUser(loginData).then(data => {
            login(data, () => {
                navigate("/dashboard")
            })
            toast.success("Login successful")
        }).catch(error => {
            const allErrors = error.response.data
            Object.values(allErrors).forEach(errorMessage => toast.error(errorMessage));
            setSubmitLoading(false)
        })
    }

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <Card className='shadow-sm mt-5'>
                        <CardHeader>
                            <h4>Login</h4>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleLogin}>
                                <div className='my-3'>
                                    <Label for='username'>Username</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                    <Input type='username' placeholder='johndoe@example.com' id='username' onChange={(event) => onFieldChange(event, 'username')} value={loginData.username || ''}></Input>
                                    {loginData.username === "" && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Username cannot be empty</span>}
                                </div>

                                <div className='my-3'>
                                    <Label for='password'>Password</Label><b><Label style={{ color: "Red" }}>*</Label></b>
                                    <Input type='password' id='password' onChange={(event) => onFieldChange(event, 'password')} value={loginData.password || ''}></Input>
                                    {loginData.password === "" && <span style={{ color: "red", marginLeft: "0px", marginTop: "5px", fontSize: "12px" }} className='text-center'>Password cannot be empty</span>}
                                </div>
                                {submitLoading && <Spinner />}
                                {!submitLoading && <div className='my-3'>
                                    <Button color='success'>Login</Button>
                                </div>}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login