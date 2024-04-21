import React from 'react';
import './about.css';

function AboutPage(){
    return(
        <div className='about'>
            <div className='about-container'>
                <div className='about-container-text'>
                    <h1 className='about-container-text-title'>Sobre mim.</h1>
                    <h2 className='about-container-text-sub'>Sou um desenvolvedor apaixonado por tecnologia.</h2>
                    <p className='about-container-text-para'>
                        Eu sou uma pessoa interessada em desvendar os enigmas das abstrações mais complexas, estou sempre em busca de 
                        desafios que estimulem meu potencial técnico ao máximo e me obriguem a pensar de maneira criativa.
                        </p>
                </div>
                <div className='about-container-img'>
                    <img src="#" alt=""/>
                </div>
            </div>
            <div className='about-skills'>
                <h2 className='about-skills-title'>SKILLS</h2>
                <table className='about-skills-table'>
                    <td className='about-skills-table-col border-first'>
                        <label className='about-skills-table-head'>Linguagens</label>
                        <tr className='about-skills-table-row'>Java</tr>
                        <tr className='about-skills-table-row'>JavaScript</tr>
                        <tr className='about-skills-table-row'>C#</tr>
                        <tr className='about-skills-table-row'>Dart</tr>
                        <tr className='about-skills-table-row'>Python</tr>
                        <tr className='about-skills-table-row'>PHP</tr>
                        <tr className='about-skills-table-row'>HTML</tr>
                        <tr className='about-skills-table-row'>CSS</tr>
                    </td>
                    <td className='about-skills-table-col'>
                        <label className='about-skills-table-head'>Frameworks</label>
                        <tr className='about-skills-table-row'>NodeJS</tr>
                        <tr className='about-skills-table-row'>Spring Boot</tr>
                        <tr className='about-skills-table-row'>.NET</tr>
                        <tr className='about-skills-table-row'>Flutter</tr>
                        <tr className='about-skills-table-row'>Laravel</tr>
                        <tr className='about-skills-table-row'>ReactJS</tr>
                        <tr className='about-skills-table-row'>TailwindCSS</tr>
                        <tr className='about-skills-table-row'>Bootstrap</tr>
                    </td>
                    <td className='about-skills-table-col'>
                        <label className='about-skills-table-head'>Linguagens</label>
                        <tr className='about-skills-table-row'>Java</tr>
                        <tr className='about-skills-table-row'>JavaScript</tr>
                        <tr className='about-skills-table-row'>C#</tr>
                        <tr className='about-skills-table-row'>Dart</tr>
                        <tr className='about-skills-table-row'>Python</tr>
                        <tr className='about-skills-table-row'>PHP</tr>
                        <tr className='about-skills-table-row'>HTML</tr>
                        <tr className='about-skills-table-row'>CSS</tr>
                    </td>
                    <td className='about-skills-table-col'>
                        <label className='about-skills-table-head'>Linguagens</label>
                        <tr className='about-skills-table-row'>Java</tr>
                        <tr className='about-skills-table-row'>JavaScript</tr>
                        <tr className='about-skills-table-row'>C#</tr>
                        <tr className='about-skills-table-row'>Dart</tr>
                        <tr className='about-skills-table-row'>Python</tr>
                        <tr className='about-skills-table-row'>PHP</tr>
                        <tr className='about-skills-table-row'>HTML</tr>
                        <tr className='about-skills-table-row'>CSS</tr>
                    </td>
                </table>
            </div>
        </div>
    );
}

export default AboutPage;