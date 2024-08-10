import React from 'react';
import "./nav.css"

function Navbar(){
    return(
        <>
            <nav>
                <ul className='nav-bar-ul'>
                    <li className='nav-bar-name'><h4><label>Gustavo Oliveira</label></h4></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='https://www.linkedin.com/in/gustavo-oliveira-desenvolvedor-junior/'>LinkedIn</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li className='nav-bar-last'><a href='#experience'>Experience</a></li>
                </ul>
            </nav>
        </> 
    )
}
export default Navbar;