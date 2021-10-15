import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();

    return (
        <div>
            <h1>This is booking: {serviceId}</h1>
            <Link to="/home">
                <button>Back to home</button>
            </Link>
        </div>
    );
};

export default Booking;