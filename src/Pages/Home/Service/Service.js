import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
    // const {service} = props;
    const { name, description, id, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}/${name}/${description}`}>
                <button className="btn btn-warning" to='/register'>Serial {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;