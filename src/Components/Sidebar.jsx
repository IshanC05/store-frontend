import React, { useEffect, useState } from 'react'
import './CSS/sidebar.scss'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadCategory } from './Service/CategoryService'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [category, setCategory] = useState(null)

    useEffect(() => {
        loadCategory().then(res => {
            setCategory(res)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Categories</span>
            </div>
            <hr />
            <div className="center"></div>
            <div className="title">
                <ListGroup className='category'>
                    <ListGroupItem action tag={Link} to={'/store/all'}>All</ListGroupItem>
                    {
                        category && category.map((each, index) => (
                            <ListGroupItem action tag={Link} to={'/store/' + each.categoryId} key={index}>{each.title}</ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default Sidebar