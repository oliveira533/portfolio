import React from 'react';
import ReactDOM from 'react-dom/client';
import './nav.css';
import linkedin from "../img/linkedin.png"
import github from "../img/github.png";

function Nav(){
    return(
        <nav className='nav'>
            <p className='nav-text'>Gustavo de Oliveira</p>
            <ul className='nav-list'>
                <li className='nav-list-item'><a href="#">Sobre</a></li>
                <li className='nav-list-item'><a href="#">Experiência</a></li>
                <li className='nav-list-item'><a href="#">Contato</a></li>
            </ul>
            <a className='nav-link nav-first-link' href="https://www.linkedin.com/in/gustavo-oliveira-desenvolvedor-junior/" target="_blank" rel="noopener noreferrer"><img className='nav-img' src={linkedin} alt="" /></a>
            <a className='nav-link nav-last-link' href="https://github.com/oliveira533" target="_blank" rel="noopener noreferrer"><img className='nav-img' src={github} alt="" /></a>
        </nav>
    );
}

export default Nav;