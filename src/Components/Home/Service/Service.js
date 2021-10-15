import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { id, name, price, description, img } = service;
    
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <div className="description">
                <h2>{name}</h2>
                <h5>Price: {price}$</h5>
                <p className="px-5">{description}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn-warning">Book {name.toLowerCase()}</button>
                </Link>
            </div>

        </div>
    );
};

export default Service;