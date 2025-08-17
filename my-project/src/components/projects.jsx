import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects(){
    const projects = [
        {
          title: "Edu Inspiration",
          description: "Este é um projeto desenvolvido durante o Hackathon do CPS sob a ODS 8 (Objetivo de desenvolvimento sustentável), subtópico 3 da ONU, com o objetivo de criar uma plataforma que diminui um grande problema que todos os estudantes passem em seu último ano letivo, a falta de ideias para desenvolver seu TCC.",
          link: "https://eduinspiration.vercel.app",
          tech: ["React", "Next", "Firebase"]
        },
        {
          title: "Help Elder",
          description: "Este projeto foi criado por um grupo de alunos da Etec Jaraguá, como TCC do curso análise e desenvolvimento de sistemas. O objetivo do projeto é conectar casas de repouso com as pessoas que cuidam do idoso, para que possam ter uma melhor comunicação e cuidado com o idoso.",
          link: "https://github.com/oliveira533/help_elder",
          tech: ["Dart", "Flutter", "Firebase"]
        }
      ];
    
      return (
        <section id="projects" className="  bg-gradient-to-bl from-gray-800 via-gray-900 to-blue-900 py-20">
          
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 
            bg-clip-text text-transparent">
              Projetos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
            {/* cards de projeto */}
              {projects.map((project, index) => (
                <div key={index} 
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 
                transition-all duration-300 transform hover:-translate-y-2 shadow-xl">

                  <div className="space-y-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-white">{project.title}</h3>
                    
                    <p className="text-gray-300  text-[0.8rem] sm:text-sm *:leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* linguagens e ferramentas dos projetos */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 transition-all duration-300 
                        transform hover:-translate-y-2 shadow-xl bg-green-600/20 text-green-400 
                        rounded-full text-[0.8rem] sm:text-sm border border-green-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* botao que leva ao projeto */}
                    <button 
                      onClick={() => window.open(project.link, '_blank')}
                      className="inline-flex items-center gap-2 bg-gradient-to-r
                       from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700
                        text-white px-6 py-3 rounded-lg transition-all duration-300 
                        transform hover:scale-105"
                    >
                      {project.link.includes('github') ? (
                        <FaGithub className='text-xl' />
                      ) : (
                          <FiExternalLink />
                      )}
                      <span className='text-[0.8rem] sm:text-sm'>View Project</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );}

export default Projects;