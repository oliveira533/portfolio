import React from 'react';
import './linkedin.css';
import profile from '../assets/profile.jpg'

import { FiLinkedin } from "react-icons/fi";

function Linkedin(){
    return(
        <>
            <main id='linkedin' className='linkedin-main'>
                <h1>Linkedin</h1>
                <img src={profile} alt="profile picture" className='profile-picture'/>
                <label className='link-name'>Gustavo de Oliveira</label>
                <label className='link-title'>backend developer</label>
                <button onClick={() => window.location.href = 'https://www.linkedin.com/in/gustavo-oliveira-desenvolvedor-junior/'}><FiLinkedin className='icon'/>View Profile</button>
            </main>
        </>
    );
}

export default Linkedin;