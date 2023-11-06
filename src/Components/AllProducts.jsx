import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AllProducts() {

    const navigate = useNavigate()

    useEffect(() => {
        if (getRole() !== 'ROLE_ADMIN') {
            navigate("*")
        }
    }, [])


    return (
        <div>
        </div>
    )
}

export default AllProducts