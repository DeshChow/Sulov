// import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faAngleUp, faMapMarkedAlt, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import images01 from '../../../images/icon/06022019-12-removebg-preview.png'
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

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
                                    <h1 style={{color: '#00AB55'}}>Sulov</h1>
                                </div>
                            </Link>
                            <p className="footer-info-text">
                            We believe time is valuable to our fellow residents, and that they should not have to waste hours in traffic,brave bad weather and wait in line just to buy basic necessities like eggs! This is why Sulov delivers everything you need right at your door-step and at no additional cost.Stay tuned always.Keep Buying !!!!
                            </p>
                            <div className="footer-social-link">
                                <h3>Follow us</h3>
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="facebook">
                                            <FacebookIcon></FacebookIcon>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="twitter">
                                            <TwitterIcon></TwitterIcon>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="linkedin">
                                            <LinkedInIcon></LinkedInIcon>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler} className="instagram">
                                            <InstagramIcon></InstagramIcon>
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
                                        <HomeIcon></HomeIcon>
                                    </div>
                                    <div className="contact-info">
                                        <h3>Sylhet, Bangladesh</h3>
                                        <p>6/A,Al Hamra,Zindabazar</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="contact-us contact-us-last">
                                    <div className="contact-icon">
                                       <CallIcon></CallIcon>
                                    </div>
                                    <div className="contact-info">
                                        <h3>+880-1313918401</h3>
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
                                            <Link to="/" onClick={scrollHandler}>Our Customers</Link>
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
                                    We treat the customers with the care and love they deserve.
                                        </p>
                                    {/* <Form>
                                        <Form.Row>
                                            <Col className="dk-footer-form">
                                                <Form.Control type="email" placeholder="Email Address" />
                                                <button type="submit">
                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                </button>
                                            </Col>
                                        </Form.Row>
                                    </Form> */}
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
                            <span>Copyright © {new Date().getFullYear()}, All Rights Reserved Sulov</span>
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
                    <VerticalAlignTopIcon></VerticalAlignTopIcon>
                </Button>
            </div>
        </footer>
      
    );
};

export default Footer;