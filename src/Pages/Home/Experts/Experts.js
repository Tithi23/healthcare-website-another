import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Image } from 'react-bootstrap';

import doctors1 from '../../../images/doctors/doctor1.png'
import doctors2 from '../../../images/doctors/doctor2.png'
import doctors3 from '../../../images/doctors/doctor3.png'
import doctors4 from '../../../images/doctors/doctor4.png'
import doctors5 from '../../../images/doctors/doctor5.png'
import doctors6 from '../../../images/doctors/doctor6.png'

import Expert from '../Expert/Expert';
import './Experts.css';

const experts = [
    {
        img: doctors1,
        name: 'Dr.Pullen',
        expertize: '-Cardiologists-'
    },
    {
        img: doctors2,
        name: 'Dr.John Anderson',
        expertize: '-Dermatologists-'
    },
    {
        img: doctors3,
        name: 'Dr.Zakaria Smith',
        expertize: '-Neurologist-'
    },
    {
        img: doctors4,
        name: 'Dr.Sakib Anderson',
        expertize: '-Radiogist-'
    },
    {
        img: doctors5,
        name: 'Dr.Andrew Smith',
        expertize: '-Proctologists-'
    },
    {
        img: doctors6,
        name: 'Dr. Samkoff',
        expertize: '-Gastroenterologists-'
    },
]

const Experts = () => {
    return (
        <div className="container font-family: cursive">
            <h2 className="text-primary mt-5 mb-5" >Our Experts</h2>
            <div className=" row row-cols-1 row-cols-md-3 g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;