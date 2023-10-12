import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Container } from 'reactstrap'

function Product() {
    return (
        // <div>
        //     <Row>
        //         <Col>
        //             <Card>
        //                 <CardBody>
        //                     <h5>Product Name</h5>
        //                     <span>1</span>
        //                     <CardText>
        //                         <b>CategoryName: 1</b>
        //                     </CardText>
        //                     <CardText>
        //                         <span>
        //                             price
        //                         </span>
        //                     </CardText>
        //                     <Container style={{ display: 'flex', textAlign: 'center' }}>
        //                         <Button color='info' size='sm' className='m-2'>View</Button>
        //                         <Button color='primary' size='sm' className='m-2'>Buy</Button>
        //                     </Container>
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //     </Row>
        // </div>

        <Card style={{ width: '18rem', margin: '13px' }}>
            <img alt="Card"
                src="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            // "https://picsum.photos/300/200" 
            />
            <CardBody>
                <CardTitle tag="h5">
                    Card Title
                </CardTitle>
                <CardText>
                    This is some text within a card body.
                </CardText>
            </CardBody>
            <Container style={{ display: 'flex', textAlign: 'center' }}>
                <Button color='info' size='sm' className='m-2'>View</Button>
                <Button color='primary' size='sm' className='m-2'>Add to cart</Button>
            </Container>
        </Card>

    )
}

export default Product