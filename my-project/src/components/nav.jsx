import React, { useState } from 'react';
import { IoIosCodeWorking } from "react-icons/io";
import "./nav.css"

function Navbar(){
    return(
        <>
            <nav>
                <ul className='nav-bar-ul'>
                    <li className='nav-bar-name'><h3><label>Gustavo Oliveira</label></h3></li>
                    <li>Contact</li>
                    <li><a href='https://www.linkedin.com/in/gustavo-oliveira-desenvolvedor-junior/'>LinkedIn</a></li>
                    <li>Projects</li>
                    <li className='nav-bar-last'>Experience</li>
                </ul>
            </nav>
        </> 
    )
};

export default Navbar;