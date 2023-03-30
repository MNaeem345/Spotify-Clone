import React from "react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import '../components/Navbar.css';
import logo from '../images/Spotify.png';


function Navbar(){
    return(
        
            <nav className="nav">
                <a href="#" className="spotify-button"><img src={logo} className='spotify-logo'/></a>
                <ul className="nav-bar">
                    <li><a ><CIcon icon={icon.cilHome} className='search-icon'/>Home</a></li>
                    <li><a href="#"><CIcon icon={icon.cilSearch} className='search-icon'/>Search</a></li>
                    <li><a href="#"><CIcon icon={icon.cilLibrary} className='search-icon'/>Your Library</a></li>
                    
                    
                </ul>
                
                

            </nav>
       
    )
}

export default Navbar;