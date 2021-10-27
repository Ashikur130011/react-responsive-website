import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { _id, Name, price, description, img } = service;
    
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <div className="description">
                <h2>{Name}</h2>
                <h5>Price: {price}$</h5>
                <p className="px-5">{description}</p>
                <Link to={`/booking/${_id}`}>
                    <button className="btn-warning">Book </button>
                </Link>
            </div>

        </div>
    );
};

export default Service;