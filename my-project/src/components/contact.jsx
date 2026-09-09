import React from "react";
import { MdMailOutline, MdOutlineApi } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMysql, SiPostgresql, SiNestjs, SiFlask, SiSelenium } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

function Contact() {
  const techIcons = [
    { Icon: FaPython, name: "Python" },
    { Icon: FaGolang, name: "Golang" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiNestjs, name: "NestJS" },
    { Icon: SiFlask, name: "Flask" },
    { Icon: TbBrandTypescript, name: "TypeScript" },
    { Icon: FaAws, name: "AWS" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: MdOutlineApi, name: "REST APIs" },
    { Icon: SiSelenium, name: "Selenium" },
  ];

  return (
    <section
      id="contact"
      className="min-h-max py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 flex 
      items-center justify-center  "
    >
      <div className="text-center space-y-8 px-6">
        {/* suas infoss */}
        <div className="space-y-4">
          <h1
            className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-400
             to-blue-600 
          bg-clip-text text-transparent"
          >
            Gustavo de Oliveira
          </h1>

          <div className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto space-y-4 leading-relaxed">
            <p>
              Sou Desenvolvedor Backend Júnior apaixonado por criar soluções digitais escaláveis e confiáveis. Minha trajetória tem sido marcada por experiências em integração de sistemas, desenvolvimento de microsserviços, automação de processos e arquitetura serverless na AWS, sempre com foco em gerar eficiência, dados bem estruturados e impacto real no negócio.
            </p>
            <p>
              Atualmente, faço parte do time de tecnologia da Compre Sua Peça, onde contribuo para o crescimento do ecossistema digital da empresa.
            </p>
            <p>
              As minhas experiências me permitiram alcançar resultados concretos, como a melhoria de 70% na qualidade dos dados de leads e ganhos expressivos de eficiência na operação da empresa.
            </p>
            <p>
              Sou movido por desafios técnicos e pela oportunidade de transformar necessidades de negócio em soluções digitais robustas, que impulsionam escalabilidade, eficiência e crescimento.
            </p>
          </div>
        </div>

        {/* contato  */}
        <div className="space-y-6">
          <div
            className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-400 
          transition-colors duration-300"
          >
            <MdMailOutline className="text-lg sm:text-2xl" />
            <a
              target="_blank"
              href="mailto:go609127@gmail.com"
              className="text-sm sm:text-lg"
            >
              go609127@gmail.com
            </a>
          </div>

          <div
            className="flex items-center justify-center space-x-3 text-gray-300 hover:text-green-400 
          transition-colors duration-300"
          >
            <LuPhone className="text-lg sm:text-2xl" />
            <a
              className="text-sm sm:text-lg"
              target="_blank"
              href="https://wa.me/555511940607?text=Ol%C3%A1!%20Estou%20vindo%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%F0%9F%A4%97%F0%9F%92%BB"
            >
              +55 (11) 94060-7969
            </a>
          </div>
        </div>

        {/* linguagens e ferramentas que voce usa */}
        <div className="pt-8">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-400 mb-6">
            Tecnologias
          </h3>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-4 max-w-2xl mx-auto">
            {techIcons.map(({ Icon, name }) => (
              <div
                key={name}
                className="group relative p-3 m-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                rounded-xl hover:border-green-500/50 transition-all duration-300 hover:scale-110 
                hover:rotate-3 animate-fadeInUp"
              >
                <Icon
                  className="text-[1.5rem] text-white group-hover:text-green-400 
                transition-colors duration-300"
                />

                <span
                  className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2
                  whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-green-400
                  opacity-0 shadow-lg border border-gray-700 transition-all duration-200
                  group-hover:opacity-100 group-hover:-translate-y-1"
                >
                  {name}
                </span>

                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-500/10 
                opacity-0 group-hover:opacity-100  transition-opacity duration-300"
                ></div>

                <div
                  className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 
                opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* linha de divisória animada  */}
        <div className="pt-8">
          <div
            className="w-80 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto 
          rounded-full animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
