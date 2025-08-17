import React from "react";
import profile from "../assets/profile.jpg";
import { FiLinkedin } from "react-icons/fi";

function Linkedin() {
  return (
    <section
      id="linkedin"
      className="sm:min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-green-900
      flex items-center justify-center"
    >
      <div className="  mx-auto px-6 hover:scale-105 duration-200 ">

      <div className="p-[2px]  rounded-2xl ">

        {/* card pro linkedin */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            LinkedIn Profile
          </h2>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex-shrink-0">

              <div className="relative w-28 h-28 sm:w-48 sm:h-48 rounded-full p-[4px] hover:scale-105 duration-200" >

            { /* contorno animado ao redor da img */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-green-600 animate-spin"></div>

                <div className="relative  w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src={profile}
                    alt="profile picture"
                    className="w-24 h-24 sm:w-44 sm:h-44 rounded-full "
                  />
                </div>

              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <h3 className="text-md sm:text-2xl font-bold text-white mb-2">
                  Gustavo de Oliveira
                </h3>
                <p className="text-sm sm:text-lg text-green-400 font-semibold">
                  Backend Developer
                </p>
              </div>

              {/* botão pro linkedin */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gustavo-oliveira-desenvolvedor-junior/",
                    "_blank"
                  )
                }
                className="inline-flex items-center gap-3 bg-gradient-to-r
                 from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700
                  text-white px-8 py-3 rounded-lg transition-all
                  duration-300 transform hover:scale-105 shadow-lg"
              >
                <FiLinkedin className="text-xl" />
                <span className="font-semibold">View Profile</span>
              </button>

            </div>
          </div>
        </div>
        </div>

      </div>

    </section>
  );
}

export default Linkedin;
