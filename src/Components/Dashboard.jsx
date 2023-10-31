import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserDetails } from './Auth';
import Orders from './Orders';

function Dashboard() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (localStorage.getItem('data')) {
            const data = getLoggedInUserDetails();
            setUserData(data)
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='container my-2'>
                <h1>Hi {userData.name}</h1>
                <hr />
                <div className='container'>
                    <Orders />
                </div>
            </div>
        </>
    )
}

export default Dashboard