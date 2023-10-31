import React, { useEffect, useState } from 'react'
import { getOrdersByUser } from './Service/OrderService'
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";

function Orders() {

    const [orders, setOrders] = useState(null)

    useEffect(() => {
        getOrdersByUser().then(content => {
            // console.log(content)
            setOrders(content)
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
            {orders && <div className='row'>
                <OrderList orders={orders} onClick={handleOrderClick} />
                {selectedOrder && <OrderDetails order={selectedOrder} />}
            </div>}
            {!orders && <h1>No Orders to display</h1>}
        </div>
    );
}

export default Orders