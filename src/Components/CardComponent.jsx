import React from 'react';

function CardComponent({ title, imageSrc, description }) {
    return (
        <div className="card">
            <img src={imageSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default CardComponent;
