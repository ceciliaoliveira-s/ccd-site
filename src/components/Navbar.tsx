import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo navbar.png';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center space-x-2 font-bold text-xl text-[#E22E5B]">
          <img src={logo} alt="Logo" className="h-22 w-22 object-contain" />
          <span>Centro de Cuidado Digital</span>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-[#E22E5B] hover:text-[#db6d89]">Início</Link>
          </li>
          <li>
            <Link to="/quem-somos" className="text-[#E22E5B] hover:text-[#db6d89]">Quem somos</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <span className="cursor-pointer text-[#E22E5B] hover:text-[#db6d89] select-none">
              Nossas soluções
            </span>
            {showDropdown && (
              <ul
                className="absolute left-5 mt-2 w-48 bg-white border rounded shadow-lg"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <li>
                  <Link to="/nossas-solucoes/produtos" className="block px-4 py-2 text-[#E22E5B] hover:text-[#db6d89]">Produtos</Link>
                </li>
                <li>
                  <Link to="/nossas-solucoes/servicos" className="block px-4 py-2 text-[#E22E5B] hover:text-[#db6d89]">Serviços</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/politica-de-privacidade" className="text-[#E22E5B] hover:text-[#db6d89]">Política de privacidade</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}