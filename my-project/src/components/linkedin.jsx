import React, { useState } from 'react';
import './linkedin.css';
import profile from '../assets/profile.jpg'

import { FiLinkedin } from "react-icons/fi";

function Linkedin(){
    return(
        <>
            <main className='linkedin-main'>
                <h1>Linkedin</h1>
                <img src={profile} alt="profile picture" className='profile-picture'/>
                <label className='link-name'>Gustavo de Oliveira</label>
                <label className='link-title'>backend developer</label>
                <button><FiLinkedin /></button>
            </main>
        </>
    );
};

export default Linkedin;