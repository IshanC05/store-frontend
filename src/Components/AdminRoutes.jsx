import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getRole, isLoggedIn } from './Auth'

function AdminRoutes() {

    if (isLoggedIn() && getRole() === 'ROLE_ADMIN') {
        return <Outlet />
    } else {
        return <Navigate to="*" />
    }

}

export default AdminRoutes