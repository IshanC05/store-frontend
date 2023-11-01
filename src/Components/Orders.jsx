import React, { useEffect, useState } from 'react'
import { getOrdersByUser } from './Service/OrderService'
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
import Spinner from './Spinner';

function Orders() {

    const [orders, setOrders] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getOrdersByUser().then(content => {
            // console.log(content)
            setOrders(content)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    return (
        <div className="container mt-5">
            {loading && <Spinner />}
            {orders && <div className='row'>
                <OrderList orders={orders} onClick={handleOrderClick} />
                {selectedOrder && <OrderDetails order={selectedOrder} />}
            </div>}
            {!loading && !orders && <h1>No Orders to display</h1>}
        </div>
    );
}

export default Orders