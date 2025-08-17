import { useState } from "react";
import logo from '../assets/Logo navbar.png';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center space-x-2 font-bold text-xl text-[#E22E5B]">
          <img src={logo} alt="Logo" className="h-22 w-22 object-contain" />
          <span>Centro de Cuidado Digital</span>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#inicio" className="text-[#E22E5B] hover:text-[#db6d89]">Início</a>
          </li>
          <li>
            <a href="#quem-somos" className="text-[#E22E5B] hover:text-[#db6d89]">Quem somos</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer text-[#E22E5B] hover:text-[#db6d89] select-none">
              Nossas soluções
            </span>
            {showDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <li>
                  <a href="#produtos" className="block px-4 py-2 text-[#E22E5B] hover:text-[#db6d89]">Produtos</a>
                </li>
                <li>
                  <a href="#servicos" className="block px-4 py-2 text-[#E22E5B] hover:text-[#db6d89]">Serviços</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#privacidade" className="text-[#E22E5B] hover:text-[#db6d89]">Política de privacidade</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}