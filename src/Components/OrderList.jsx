import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = ({ orders, onClick }) => {
    return (
        <>
            {orders.length !== 0 ? (
                <div className="col-lg-6">
                    <h1>Orders</h1>
                    <div className="list-group">
                        {orders && orders.map((order, index) => (
                            <Link
                                to="#"
                                className="list-group-item list-group-item-action"
                                key={index}
                                onClick={() => onClick(order)}
                            >
                                {"Order " +
                                    // order.orderId
                                    (index + 1)
                                }
                            </Link>
                        ))}
                    </div>
                </div>
            )
                : <div className='container'>
                    <h1>No Orders to display</h1>
                </div>
            }
        </>
    );
};

export default OrderList;
