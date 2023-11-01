import React from 'react'
import loading from './assets/loading.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" style={{ maxHeight: "25px", maxWidth: "25px" }} />
        </div>
    )
}

export default Spinner