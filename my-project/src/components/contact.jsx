import React from "react";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { FaPython, FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

function Contact() {
  const techIcons = [
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: TbBrandTypescript, name: "TypeScript" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: FaPython, name: "Python" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaGolang, name: "Goalng" },
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

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Desenvolvedor backend com experiência em microsserviços, integrações de sistemas, arquitetura serverless.</p>
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
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-4 max-w-md mx-auto">
            {techIcons.map(({ Icon, name, delay }, index) => (
              <div
                key={name}
                className="group relative p-3 m-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                rounded-xl hover:border-green-500/50 transition-all duration-300 hover:scale-110 
                hover:rotate-3 animate-fadeInUp"
                title={name}
              >
                <Icon
                  className="text-[1.5rem] text-white group-hover:text-green-400 
                transition-colors duration-300"
                />

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
