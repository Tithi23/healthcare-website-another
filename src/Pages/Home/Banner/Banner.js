import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
    return (
        <>
            <Carousel variant="dark" className="d-flex">
                <Carousel.Item variant="dark">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="">
                        <h3 className="text-uppercase fs-2 fw-bold text-light">Modern Medical PowerPoint Template</h3>
                        <p className="fst-italic fw-bold text-wrap text-light">Now let's take a look at some of our best medical and healthcare PowerPoint templates for 2021. Find them on Envato Elements and GraphicRiver</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-uppercase fs-2 fw-bold text-dark"> Fresh Medical and Healthcare PowerPoint Template </h3>
                        <p className="fst-italic fw-bold text-wrap text-dark">This healthcare and medical PowerPoint template comes with a sample stock photo related to the medical industry. Easily customize the images and customize the colors to your liking. If you've spent time looking for free healthcare PowerPoint templates, your search might stop here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-uppercase fs-2 fw-bold text-dark">PowerPoint Planning Template With Artificial Intelligence</h3>
                        <p className="fst-italic fw-bold text-wrap text-dark">Premium medical PowerPoint templates come with more customization options. You'll find many of those options don't come in healthcare PPT templates for free download. Plus, they usually have a wide range of slides to choose from..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;