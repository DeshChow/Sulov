import React from 'react';
import './ContactUS.css';
import leftimg from '../../../images/undraw_Profile_data_re_v81r.svg';

const ContactUS = () => {
    return (
        <div className="main-content">
            {/* <div className="top-right-divider">
            </div> */}
            <div>
            <p className="contact-para">We Are Here</p>
            <h2 className="contact-title">Contact Us</h2>
            </div>
            <div className="child-content">
                <div className="inner-content">
                    <div className="left-corner"></div>
                    <div className="right-top-corner"></div>
                    <div className="right-bottom-corner"></div>
                    <div className="container left-side">
                        <img src={leftimg}></img>
                    </div>
                    <div className="container right-side contactForm">
                        <h2>Send Your Message</h2>
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" required></input>
                                    <span>First Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" required></input>
                                    <span>Last Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" required></input>
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" required></input>
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea required></textarea>
                                    <span>Write your message here</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="send"></input>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUS;