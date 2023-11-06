import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

function CarouselComponent() {
    const productLinks = [
        {
            title: 'iPhone 13',
            link: '/product/2',
            imageSrc: 'https://images.unsplash.com/photo-1647503380147-e075b24f4cbe?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070',
        },
        {
            title: 'Samsung LED',
            link: '/product/3',
            imageSrc: 'https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070',
        }
    ];

    const carouselItems = productLinks.map((product, index) => ({
        altText: product.title,
        caption: product.title,
        key: index + 1,
        src: product.imageSrc,
    }));
    return (
        <div>
            <h3 className='text-center'>Featured Products</h3>
            <hr />
            <div className='container my-3 d-flex justify-content-center'>
                <UncontrolledCarousel interval={4000} items={carouselItems} style={{ maxHeight: "600px", maxWidth: "800px" }} />
            </div>
        </div>
    )
}

export default CarouselComponent