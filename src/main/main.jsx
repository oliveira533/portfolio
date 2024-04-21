import React from 'react';
import './main.css';

function MainPage(){
    return(
        <main className='main'>
            <img className='main-img' src="#" alt="" />
            <div className='main-container'>
                <div className='main-contianer-line'></div>
                <label className='main-container-text'>Principais projetos</label>
                <div className='main-contianer-line'></div>
            </div>
            <div className='main-projects'>
                <div className='main-projects-item'>
                    <img className='main-projects-item-img' src="#" alt="" />
                    <label className='main-project-title'><a href='https://github.com/oliveira533/help_elder'><b>Help Elder</b></a></label><br/>
                    <label className='main-project-desc'>Mobile App</label>
                </div>

                <div className='main-projects-item main-projects-item-margin-2'>
                    <img className='main-projects-item-img' src="#" alt="" />
                    <label className='main-project-title'><a href='https://github.com/oliveira533/Edu-Inspiration'><b>Edu Inspiration</b></a></label><br/>
                    <label className='main-project-desc'>Web App</label>
                </div>
            </div>
        </main>
    );
}

export default MainPage;