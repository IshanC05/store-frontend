import React from 'react'
import './CSS/sidebar.scss'
import { ListGroup, ListGroupItem } from 'reactstrap'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Categories</span>
            </div>
            <hr />
            <div className="center"></div>
            <div className="title">
                <ListGroup className='category'>
                    <ListGroupItem>All</ListGroupItem>
                    <ListGroupItem>Phones</ListGroupItem>
                </ListGroup>
            </div>
        </div>
    )
}

export default Sidebar