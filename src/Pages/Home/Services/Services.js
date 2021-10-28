import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import services1 from '../../../images/services/services1.png'
import services2 from '../../../images/services/services2.png'
import services3 from '../../../images/services/services3.png'
import services4 from '../../../images/services/services4.png'
import services5 from '../../../images/services/services5.jpg'
import services6 from '../../../images/services/services6.png'


const services = [
    {
        id: 1,
        name: "CHILDREN'S HEALTH CARE",
        description: "The  premier pediatric about children's health - it’s about caring for the entire family every step of the way.  Our innovative programs set national standards for pediatric primary care.Check back often, as our integrative programs continue to expand as we identify more areas that can help care for your child every step of the way.",
        img: services1
    },
    {
        id: 2,
        name: "EYE SPECIALISTS",
        description: "We strive to provide high level of international standards of care for your eyes at an affordable price. Our multi specialty eye Centre provides a full range of services ranging from simple procedures to complex surgeries.",
        img: services2
    },
    {
        id: 3,
        name: "NEUROLOGIST",
        description: "Doctors need to focus on research, treatments and patients, special those who work with brain concussions, so in Slidesgo we have prepared a modern, useful and pragmatic presentation that you as a doctor can use to share the results of your research or the guidelines of a new treatment in a clear, visual and comprehensible way. The theme is about brain concussion, which, as you might already know, is a traumatic brain injury that usually affects the brain function. Download the design and prepare the treatment that will improve the life of those affected by brain concussions!.",
        img: services3
    },
    {
        id: 4,
        name: "HEART SPECIALISTS",
        description: "Cardiovascular diseases comprehend different cardiopathies. Some of them may lead to heart attacks, strokes or chest pain. Your patients can benefit from your knowledge on them and prevent some of these illnesses with a simple template like this one! This theme is based on a disease structure. The design is pretty simple: you’ll see monochrome backgrounds in light blue with some medical patterns. We have added hand-drawn medical illustrations and icons. Their style is cool and fresh, so you can present your info in a very understandable way. About the titles, they are in consonance with the hand-written design of the slides.",
        img: services4
    },
    {
        id: 5,
        name: "DENTAIL PUBLIC HEALTH CARE SERVICES",
        description: "An emergency dentist is a general dentist or dental specialist you don’t need an appointment to see. Emergency dentists provide 24-hour dentistry, and can handle most dental emergencies and are open on Saturdays and Sundays . That’s what you want because if you happen to have a broken tooth, a lost tooth filling, a missing dental crown, or you need toothache remedies, you don’t want to have to wait 12 or 16 hours before you can get dental treatment.",
        img: services5
    },
    {
        id: 6,
        name: "EMERGENCY SERVICES",
        description: "Effective emergency service management requires agencies from many different services to work closely together and to have open lines of communication. Most services do, or should, have procedures and liaisons in place to ensure this, although absence of these can be severely detrimental to good working. There can sometimes be tension between services for a number of other reasons, including professional versus voluntary crew members, or simply based on area or division",
        img: services6
    }
]



const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;