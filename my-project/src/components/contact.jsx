import React, { useState } from 'react';
import "./contact.css";

import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

function Contact(){
    return(
        <>
            <main className='contact-main'>
                <h1>Gustavo de Oliveira</h1>
                <label><MdMailOutline className='icon'/>go609127@gmail.com</label>
                <label><LuPhone className='icon'/>+55 (11) 94060-7969</label>
            </main>
        </>
    );
};

export default Contact;