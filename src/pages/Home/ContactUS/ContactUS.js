import React from 'react';
import './ContactUS.css';
import leftimg from '../../../images/undraw_Profile_data_re_v81r.svg';
import lleftimg from '../../../images/blogging.svg';
import { contactAction } from './../../../redux/actions/contactActions';
import { useDispatch } from 'react-redux';

const ContactUS = () => {

    const [info, setInfo] = React.useState({});

    const [success,setSuccess] = React.useState(false);

    const dispatch = useDispatch();

    const handleSubmit =(e)=>
    {
        e.preventDefault();

        dispatch(contactAction(info,setSuccess))


        console.log(info)

    }

    
    const onChangeStatus=(e)=>
    {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);




      
    }



    return (
        <div className="main-content">
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
                        <img src={lleftimg} alt=''></img>
                    </div>
                    <div className="container right-side contactForm">
                        <h2>Send Your Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" required onChange={onChangeStatus}
                                    name='first_name'></input>
                                    <span>First Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" required onChange={onChangeStatus}
                                     name='last_name'></input>
                                    <span>Last Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" required onChange={onChangeStatus}
                                    
                                    name='email'></input>
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="number" required onChange={onChangeStatus}
                                    name = "mobile"></input>
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea required onChange={onChangeStatus}
                                  name = 'text'
                                    ></textarea>
                                    <span>Write your message here</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="send"></input>
                                </div>

                            </div>

                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUS;