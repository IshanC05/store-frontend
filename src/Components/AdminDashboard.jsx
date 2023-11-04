import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {

    return (
        <div className='container my-2 '>
            <h1>Admin Dashboard</h1>
            <div className='container text-center' style={{ marginTop: "15px" }}>
                <div className="card text-bg-info mb-3 mx-auto" style={{ maxWidth: "16rem" }}>
                    <Link to="/admin-orders" style={{ textDecoration: "none", color: "black", padding: "25px" }} >
                        <div className="card-body">
                            <h3>Orders</h3>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-success mb-3 mx-auto" style={{ maxWidth: "16rem" }}>
                    <Link to={"/product-edit/" + "0"} style={{ textDecoration: "none", color: "black", padding: "25px" }}>
                        <div className="card-body">
                            <h3>Products</h3>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-warning mb-3 mx-auto" style={{ maxWidth: "16rem" }}>
                    <Link to={"/category-edit/" + "0"} style={{ textDecoration: "none", color: "black", padding: "25px" }}>
                        <div className="card-body">
                            <h3>Categories</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default AdminDashboard