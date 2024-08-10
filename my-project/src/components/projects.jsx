import React from 'react';
import './projects.css'

function Projects(){
    return(
        <>
            <main id='projects' className='projects'>
                <div className='card-projects'>
                    <h1>Projects</h1>
                    <div className='card-links'>
                        <div className='project'>
                            <h3>Edu Inspiration</h3>
                            <p>Este é um projeto desenvolvido durante o Hackathon do CPS sob a ODS 8 (Objetivo de desenvolvimento sustentável), subtópico 3 da ONU, com o objetivo de criar uma plataforma que diminui um grande problema que todos os estudantes passam em seu ultimo ano letivo, a falta de ideias para desenvolver seu TCC.</p>
                            <button onClick={() => window.location.href = 'https://eduinspiration.vercel.app'}>View Project</button>
                        </div>
                        <div className='project'>
                            <h3>Help Elder</h3>
                            <p>Este projeto foi criado por um grupo de alunoss da Etec Jaraguá, como TCC do curso análise e desenvolvimento de sistemas. O objetivo do projeto é conectar casas de repouso com as pessoas que cuidam do idoso, para que possam ter uma melhor comunicação e cuidado com o idoso.</p>
                            <button onClick={() => window.location.href = 'https://github.com/oliveira533/help_elder'}>View Project</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Projects;