import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

    return (
      
       

                <nav className="navbar"> 
                    <div className="navbar-container">
                        <Link to='/' className="navbar-logo">
                             <i className="fas fa-shopping-cart"> </i> 
                             <strong>Sulov</strong>
                        </Link>

                        <div className="menu-icon" onClick={handleClick}>
                         <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>

                        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                            <li className = "nav-item">
                             <Link to='/' className="nav-link" onclick={closeMobileMenu}>Home</Link>
                             </li>

                            <li className = "nav-item">
                             <Link to='/' className="nav-link" onclick={closeMobileMenu}>Services</Link>
                            </li>

                            <li className = "nav-item">
                             <Link to='/' className="nav-link" onclick={closeMobileMenu}>Products</Link>
                             </li>
                        </ul>

                    </div>
                </nav>

             
         
           
     
            
    )
}

export default Navbar

