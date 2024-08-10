import React from 'react';
import './expirence.css';

function Expirence(){
    return(
        <>
            <main id='experience' className='experience'>
                <div className='card-experience'>
                    <h1>Work Experience</h1>
                    <div className='card'>
                        <h2 className='card-tile'>Junior Developer</h2>
                        <label className='card-sub'>Colégio Marcondes | Fev 2024</label>
                        <ul className='card-list'>
                            <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                            <li>Maintained clean code and good architecture in an MVC framework.</li>
                            <li>I employed Git version control in a distributed development regime, scheduling releases and maintaining project versions accordingly.</li>
                            <li>Created optimized queries in MySQL.</li>
                            <li>Created optimized queries in MySQL.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Expirence;