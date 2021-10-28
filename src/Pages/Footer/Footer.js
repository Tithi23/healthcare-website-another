import React from 'react';
import { Container, Button } from 'react-bootstrap';
import logo from '../../images/footer/footer1.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <Container>
                <div className="footer-inside">

                    <div className="logo-slogan">
                        <img className='logo' src={logo} alt="" />
                        <h6 className="my-2">WHERE MASK SATY SAFE.</h6>
                        <p className="footer-p">The expectation that patients will become increasingly involved in making treatment decisions poses new challenges for doctors.Individualised risk information—that is, based on each patient's clinical characteristics—is available for only a few conditions, such as the Framingham equation for stroke or cardiovascular disease.w21 Even this information is probabilistic in nature and requires skilful communication.</p>
                    </div>


                    <div className="contact-section">
                        <div>
                            <p><i className="fas fa-map-marker-alt"></i> Fatullah 32 st-12/4 - Narayangonj</p>

                            <p><i className="fas fa-mobile"></i>Contact us : 087-23-400</p>
                            <p><i className="fas fa-mobile"></i>Emargency : 19234</p>

                            <p><i className="fas fa-envelope"></i> tithiratry@gmail.com</p>
                        </div>

                        <div >
                            <input className="sub-input" type="text" placeholder="Enter Your Email" />
                            <br />
                            <Button className="details-btn">Subscribe</Button>
                        </div>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Footer;