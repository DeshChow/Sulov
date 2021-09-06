// import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faAngleUp, faMapMarkedAlt, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import images01 from '../../../images/icon/06022019-12-removebg-preview.png'
import './Footer.css';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = () => {
        window.scrollTo(500, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);

    return (
       
    
        <footer id="dk-footer" className="dk-footer">
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="dk-footer-box-info">
                            <Link to="/" onClick={scrollHandler} className="footer-logo">
                                <div className="d-flex justify-content-center">
                                    {/* <img src={images01} alt="footer_logo" height="160" /> */}
                                    <h1>Sulov</h1>
                                </div>
                                <h3 className="text-center text-white mb-0">Inhale Care</h3>
                            </Link>
                            <p className="footer-info-text">
                            Put good health at the heart of your business and not just at the bottom line.Better Outcomes. Better Care. A Healthier You.
                                </p>
                            <div className="footer-social-link">
                                <h3>Follow us</h3>
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="facebook">
                                            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="twitter">
                                            {/* <FontAwesomeIcon icon={faTwitter} /> */}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="google-plus">
                                            {/* <FontAwesomeIcon icon={faGooglePlusG} /> */}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="linkedin">
                                            {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="instagram">
                                            {/* <FontAwesomeIcon icon={faInstagram} /> */}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={8}>
                        <Row>
                            <Col md={6}>
                                <div className="contact-us">
                                    <div className="contact-icon">
                                        {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                                    </div>
                                    <div className="contact-info">
                                        <h3>Sylhet, Bangladesh</h3>
                                        <p>Zindabazar,loc-1214</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="contact-us contact-us-last">
                                    <div className="contact-icon">
                                        {/* <FontAwesomeIcon icon={faPhoneVolume} /> */}
                                    </div>
                                    <div className="contact-info">
                                        <h3>+880-1910-820976</h3>
                                        <p>Give us a call</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6}>
                                <div className="footer-widget footer-left-widget">
                                    <div className="section-heading">
                                        <h3>Useful Links</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Our Doctors</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Our Products</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Subscribe</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <p>
                                    We treat the patients with the care and love they deserve.
                                        </p>
                                    <Form>
                                        <Form.Row>
                                            <Col className="dk-footer-form">
                                                <Form.Control type="email" placeholder="Email Address" />
                                                <button type="submit">
                                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                                </button>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <Container>
                    <Row>
                        <Col md={6} className="order-2 order-md-1">
                            <span>Copyright © {new Date().getFullYear()}, All Rights Reserved Inahle care</span>
                        </Col>
                        <Col md={6} className="order-1 order-md-2">
                            <div className="copyright-menu">
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="back-to-top">
                <Button variant="dark" onClick={scrollHandler} title="Back to Top" className={scrolled ? "d-block" : "d-none"}>
                    {/* <FontAwesomeIcon icon={faAngleUp} /> */}
                </Button>
            </div>
        </footer>
      
    );
};

export default Footer;