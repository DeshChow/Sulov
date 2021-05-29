import React from 'react'
import Navbar from '../Navbar/Navbar'
import pic4 from '../../images/bg.png';
import pic5 from '../../images/3255317-removebg-preview.png';
import './Header.css';


export const Header = () => {
    return (
       <div className='container-fluid'>


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
                    </ul>
                </nav>
            
            </div> 


            <main>
                <section className="presentation">
                    <div className="introduction">
                        <div className="intro-text">
                            <h1>Choice is Yours,Quatlity is Ours</h1>
                            <p>Wecome to sulov.Hope you will enjoy your shopping.We will try to deliver more than your expectation.See you again</p>
                        </div>
                        <div className="cta">
                            <button className="cta-submit">Add To Cart</button>
                        </div>
                    </div>
                    <div className="cover">
                        <img src={pic5} alt="banner-img1"></img>
                    </div>
                </section>
                <img src={pic4} className="back-img" alt="bg-img"></img>
            </main>
 
       </div>
         
    )
}
