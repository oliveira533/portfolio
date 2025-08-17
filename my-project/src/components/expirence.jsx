import React from 'react';

function Experience() {
  const experienceData = [
    {
      id: 1,
      position: "Desenvolvedor Backend Junior",
      company: "Compre Sua Peça",
      period: "Jan 2025 - Atual",
      projects: [
        {
          title: "Integrações com a VTEX usando NodeJS e microsserviços na AWS",
          responsibilities: [
            "Desenvolvimento de APIs para integração com a plataforma VTEX",
            "Implementação de microsserviços utilizando NodeJS",
            "Hospedagem e deploy dos serviços na AWS"
          ]
        },
        {
          title: "Hub de integrações orientado a eventos",
          responsibilities: [
            "Arquitetura de microsserviços orientada a eventos",
            "Desenvolvimento em Typescript (NestJS e Express)",
            "Serviços em Python (Flask) para integrações específicas",
            "Utilização de SQS e SNS para mensageria",
            "Containerização com Docker e deploy via ECR e App Runner",
            "Persistência de dados com DynamoDB"
          ]
        },
        {
          title: "Plataforma de gestão de leads",
          responsibilities: [
            "Desenvolvimento de backend em Typescript (Express)",
            "Integração com landing pages e MetaAds para captação de leads",
            "Armazenamento e consulta de dados no DynamoDB"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-tl from-gray-800 via-gray-900 to-blue-900 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Experiência Profissional
        </h2>
        
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl">
         
         {/* infos de experiencia */}
            {experienceData.map((experience) => (
              <div key={experience.id} className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                  {experience.position}
                </h3>
                <p className="text-green-400 text-sm sm:text-lg font-semibold mb-6">
                  {experience.company} | {experience.period}
                </p>
                
                <div className="space-y-6">
                  {experience.projects.map((project, projectIndex) => (
                    <div key={projectIndex}>
                      <h4 className="text-sm sm:text-lg font-semibold text-blue-400 mb-3">
                        {project.title}
                      </h4>
                      {/* listagem por topicos */}
                      <ul className="space-y-2 text-gray-300 ml-4">
                        {project.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2">
                            <span className="text-green-400 ">•</span>
                            <span className='text-[0.8rem] sm:text-sm'>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Experience;