import React, { useEffect, useState } from 'react'
import './CSS/sidebar.scss'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadCategory } from './Service/CategoryService'
import { Link } from 'react-router-dom'
import { getRole } from './Auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

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
                <span className='logo '>Categories</span>
            </div>
            <hr />
            <div className="center"></div>
            <div className="title">
                <ListGroup className='category'>
                    <ListGroupItem action tag={Link} to={'/store/all'}>All</ListGroupItem>
                    {
                        category && category.map((categoryItem, index) => (
                            <ListGroupItem action tag={Link} to={'/store/' + categoryItem.categoryId} key={index} className="list-item">
                                <div className="centered-title">
                                    {categoryItem.title}
                                </div>
                                {getRole() === 'ROLE_ADMIN' && (
                                    <span className="admin-icon">
                                        <Link to={"/category-edit/" + categoryItem.categoryId}>
                                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000", marginRight: "0px" }} />
                                        </Link>
                                    </span>
                                )}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default Sidebar