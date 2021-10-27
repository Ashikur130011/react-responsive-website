import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})

    useEffect( ()=> {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div>
            <h1>This is booking: {serviceId}</h1>
            <h2>service: {service.Name}</h2>
            <Link to="/home">
                <button>Back to home</button>
            </Link>
        </div>
    );
};

export default Booking;