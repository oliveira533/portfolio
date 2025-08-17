import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineFullscreenExit } from "react-icons/ai";

function Navbar() {
  const menuItems = [
    { id: "contact", label: "Contact" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-green-500/20 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <div className="text-sm sm:text-lg whitespace-nowrap font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Gustavo de Oliveira
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors text-sm duration-300 text-gray-300 hover:text-green-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col text-xl text-gray-300 hover:text-green-400 justify-center items-center w-8 h-8 space-y-1"
            aria-label="Menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <AiOutlineFullscreenExit
                className={`absolute transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-75"
                }`}
              />
              <IoIosMenu
                className={`absolute transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </div>
          </button>

          {isOpen && (
            <div className="absolute top-12 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg min-w-40 md:hidden">
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-green-400 hover:bg-gray-700 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
