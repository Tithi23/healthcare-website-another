import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Service from '../Service/Service';


const Details = () => {
    const { name, description, id } = Service;
    const { serviceId, serviceName, serviceDescription } = useParams();

    return (
        <div className="details-container mb-5">
            <h2 className="text-primary mt-5 mb-5">Blog</h2>
            <div className="card">
                <div className="  card mb-2 fst-italic">
                    <h2>Using anthrax to fight cancer effectively.</h2>
                    <i className="text-danger">4pm-5pm</i>
                    <p>OFF DAY : FRIDAY</p>
                    <Link to={`/booking/${id}/${name}/${description}`}>
                        <button className="btn btn-warning" to='/register'>Serial {name.toLowerCase()}</button>
                    </Link>
                </div>
                <div className="card mb-2 fst-italic">
                    <h2>Brushing your teeth may keep your heart healthy.</h2>
                    <i className="text-danger">4pm-4:50pm</i>
                    <p>OFF DAY : SATURDAY</p>
                    <Link to={`/booking/${id}/${name}/${description}`}>
                        <button className="btn btn-warning" to='/register'>Serial {name.toLowerCase()}</button>
                    </Link>
                </div>
                <div className="card mb-2 fst-italic">
                    <h2>Doctor's Faliure to Diagnose a Medical Condition.</h2>
                    <i className="text-danger">6pm-8pm</i>
                    <p>OFF DAY : MONDAY</p>
                    <Link to={`/booking/${id}/${name}/${description}`}>
                        <button className="btn btn-warning" to='/register'>Serial {name.toLowerCase()}</button>
                    </Link>
                </div>
                <div className="card mb-2 fst-italic">
                    <h2>Researchers identify Brain Networks That Are Involve. </h2>
                    <i className="text-danger">1pm-2pm</i>
                    <p>OFF DAY : FRIDAY</p>
                    <Link to={`/booking/${id}/${name}/${description}`}>
                        <button className="btn btn-warning" to='/register'>Serial {name.toLowerCase()}</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Details;