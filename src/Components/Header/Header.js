import React from 'react'
import Navbar from '../Navbar/Navbar'
import pic4 from '../../images/bg.png';
import pic5 from '../../images/3255317-removebg-preview.png';
// import pic6 from '../../images/wave-haikei15.svg';
import pic6 from '../../images/test3.svg';
import pic7 from '../../images/On line store1.png';
import blob from '../../images/blob-haikei.svg';

import './Header.css';
import { useHistory } from 'react-router-dom';


export const Header = () => {

    const history = useHistory();

    const routeChange = (str) =>
    {
        history.push(str)
    }
    return (
       <div className='container-fluid full-preview'>


              <div className="headerNav header-container">  

                <a className="logo-container">
                        <i className="fas fa-shopping-cart fa-lg"> </i>
                        <h4 className="logo">Sulov</h4>
                </a>
                <nav className='navItem '>
                    <ul className="navLinks">
                        <li><a className="navLink" href="#">Home</a></li>
                        <li><a className="navLink" href="#">Home</a></li>
                        <li><a className="navLink" href="#">Home</a></li>
                        <li><a className="navLink" href="#">Products</a></li>
                        <li><a className="navLink" href="#">Services</a></li>
                        <li> <i className="fas fa-shopping-cart cart"> </i></li>
                        <li onClick = {()=>routeChange('/login')} style={{color : "white"}}> Sing IN</li>
                    </ul>
                </nav>
            
            </div> 


            <main>
                <section className="presentation">
                    <div className="introduction">
                        <div className="intro-text">
                        <h1><span className="text1">Choice </span>is yours</h1>
                        <h1><span className="text2">Quality </span>is ours <span className="text3">. . .</span></h1>
                            {/* <p>Wecome to sulov.Hope you will enjoy your shopping.We will try to deliver more than your expectation.See you again</p> */}
                            
                            </div>

                            <br></br>
{/* 
                            <div className="input-group search-style">
                                <div className="form-outline form-style">
                                   <input type="search" id="form1" className="form-control" placeholder="search"/>
                                   <label className="form-label" for="form1">Search</label>
                                </div>
                                <button type="button" className="btn btn-style" style={{height: '100%',background: '#00ab55'}}>
                                   <i className="fas fa-search"></i>
                                </button>
                            </div> */}

                            <div className='box'>
                                <form>
                                    <input type="search" name="" placeholder="Type your search" >
                                    </input>
                                    <button type="button" className="btn btn-style" style={{height: '100%',background: '#00ab55'}}>
                                       <i className="fas fa-search"></i>
                                    </button>
                                </form>

                            </div>
                            <br></br>
                         <div className="cta">
                            <button className="cta-submit">Button one</button>
                            <button className="cta-submitMore">Button Two</button>
                        </div> 
                    </div>
                    <div className="cover">
                        <img  src={pic7} alt="banner-img1"></img>
                    </div>
                </section>
            </main>
            <img src={pic6} className="back-img" alt="bg-img"></img>
       </div>
         
    )
}
