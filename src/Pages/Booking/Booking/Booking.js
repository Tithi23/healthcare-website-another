import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Booking = () => {
    const { serviceId, serviceName, serviceDescription } = useParams();

    return (
        <div className="service">
            <h2>This is booking: {serviceId}</h2>
            <h5>This is servicename: {serviceName}</h5>
            <h2>This is servicedescription: {serviceDescription}</h2>

        </div>
    );
};

export default Booking;