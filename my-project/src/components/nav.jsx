import React from 'react';
import "./nav.css"

function Navbar(){
    return(
        <>
            <nav>
                <ul className='nav-bar-ul'>
                    <li className='nav-bar-name'><h4><label>Gustavo Oliveira</label></h4></li>
                    <li>Contact</li>
                    <li><a href='https://www.linkedin.com/in/gustavo-oliveira-desenvolvedor-junior/'>LinkedIn</a></li>
                    <li>Projects</li>
                    <li className='nav-bar-last'>Experience</li>
                </ul>
            </nav>
        </> 
    )
}

export default Navbar;