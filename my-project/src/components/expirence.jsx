import React from 'react';

function Experience() {
  const experienceData = [
    {
      id: 1,
      position: "Desenvolvedor Júnior",
      company: "R&B Rastreabilidade Brasil",
      period: "Mar 2026 - Atual",
      projects: [
        {
          title: "Portal Global de Impressão da Beontag (Golang e MySQL)",
          responsibilities: [
            "Desenvolvi novas funcionalidades para geração de EPCs, impressão de etiquetas RFID/NFC e gestão de múltiplas empresas, sites de origem e sites de impressão.",
            "Atuei na sustentação e evolução da plataforma, implementando correções, otimizações e novas funcionalidades que aumentaram a estabilidade, confiabilidade e desempenho.",
            "Desenvolvi integrações entre o Portal Global de Impressão e serviços internos, garantindo a comunicação entre geração de EPCs, gerenciamento de pedidos e fluxo de impressão.",
            "Otimizei consultas MySQL e operações críticas do backend, reduzindo o tempo de resposta e melhorando a escalabilidade e a manutenibilidade dos serviços."
          ]
        },
        {
          title: "Motor proprietário de consultas SQL",
          responsibilities: [
            "Realizei a manutenção e evolução do motor proprietário de consultas SQL da empresa, aprimorando a geração dinâmica de consultas e aumentando a flexibilidade e performance no acesso aos dados."
          ]
        },
        {
          title: "PimaTag e agente de impressão RFID/NFC",
          responsibilities: [
            "Desenvolvi o backend do PimaTag, aplicação para configuração e gerenciamento de tags NFC da Pimaco, implementando APIs e regras de negócio integradas ao ecossistema da plataforma.",
            "Implementei suporte ao leitor UR4 no agente de impressão e leitura, ampliando a compatibilidade com novos dispositivos RFID/NFC."
          ]
        }
      ]
    },
    {
      id: 2,
      position: "Desenvolvedor Júnior",
      company: "Compre Sua Peça",
      period: "Out 2025 - Mar 2026",
      projects: [
        {
          title: "Hub de integrações com marketplaces e ERPs",
          responsibilities: [
            "Desenvolvi diversos microsserviços utilizando Python, Node e serviços AWS, aumentando em 70% a confiabilidade dos dados trocados entre plataformas.",
            "Reestruturei a base de dados do hub de integração com transportadoras, simplificando a manutenção e aumentando significativamente a confiabilidade e estabilidade desse serviço crítico."
          ]
        },
        {
          title: "Clients de integração Shopify, VTEX e MetalSystem",
          responsibilities: [
            "Migrei os clients de integração com a Shopify de uso interno para Go, resultando em um aumento de 10x na velocidade de atualização e criação de produtos.",
            "Desenvolvi clients de integração com a VTEX para uso interno, reduzindo significativamente a complexidade do código das integrações diretas com a plataforma.",
            "Desenvolvi integração com a plataforma de dropshipping da MetalSystem, mantendo alta qualidade de código e escalabilidade.",
            "Atuei na manutenção de integração legado com a Shopify, aplicando os principais padrões de desenvolvimento do mercado."
          ]
        },
        {
          title: "Plataforma de CRM integrada à Meta Ads",
          responsibilities: [
            "Contribuí para a construção do backend responsável pela automação da captação e formatação de leads, resultando em dados mais limpos e prontos para uso em tempo real."
          ]
        }
      ]
    },
    {
      id: 3,
      position: "Desenvolvedor Assistente",
      company: "Compre Sua Peça",
      period: "Jan 2025 - Set 2025",
      projects: [
        {
          title: "Pipelines serverless e integrações VTEX",
          responsibilities: [
            "Projetei pipelines e integrações serverless com AWS Lambda, SQS e DynamoDB para operações de alto volume, melhorando a escalabilidade e reduzindo falhas de processamento em 50%.",
            "Realizei integrações complexas com a plataforma VTEX, aplicando arquitetura orientada a eventos e boas práticas REST."
          ]
        },
        {
          title: "Biblioteca C++/Python para mapeamento de payloads",
          responsibilities: [
            "Desenvolvi uma biblioteca em C++ integrada ao Python para mapeamento dinâmico de payloads JSON, reduzindo a complexidade e simplificando a codebase de um microsserviço crítico.",
            "Implementei algoritmos de normalização e padronização de payloads, garantindo consistência nas informações enviadas via Meta e reduzindo erros de integração."
          ]
        },
        {
          title: "Automação e Web Scraping",
          responsibilities: [
            "Criei scripts de automação e Web Scraping, eliminando tarefas manuais recorrentes e aumentando a produtividade da equipe em cerca de 80%."
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
        
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl space-y-10">
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
