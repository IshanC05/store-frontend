import React from 'react'
import Sidebar from './Sidebar'
import './CSS/store.scss'
import Product from './Product'


function Store() {
    return (
        <div className='store'>
            <Sidebar></Sidebar>
            <div className="storeContainer">
                <Product />
            </div>
        </div>

    )
}

export default Store