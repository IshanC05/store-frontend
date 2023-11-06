import React from 'react';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import { Link } from 'react-router-dom';

function Home() {

    const style = { textDecoration: "none" }

    return (
        <div className='container my-3'>
            <div>
                <CarouselComponent />
            </div>
            <div className="my-3">
                <hr />
                <h3 className='text-center'>Shop by category</h3>
                <hr />
                <div className='my-3' style={{ marginBottom: "15px" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/store/1" style={style}>
                                <CardComponent
                                    title="Electronics"
                                    imageSrc="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    description="Browse our electronics collection."
                                />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/store/all" style={style}>
                                <CardComponent
                                    title="Clothing"
                                    imageSrc="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    description="Explore our latest clothing styles."
                                />
                            </Link>
                        </div>
                        <div className="col-md-4" style={style}>
                            <CardComponent
                                title="Furniture"
                                imageSrc="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                description="Find the perfect furniture for your home."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;