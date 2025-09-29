
import logo from '../assets/Logo navbar.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-22">
        <div className="flex items-center space-x-2 font-bold text-lg text-[#E22E5B]">
          <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
          <span>Centro de Cuidado Digital</span>
        </div>
        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-10 font-semibold text-base">
          <li>
            <Link to="/tela-inicio" className="text-[#E22E5B] hover:text-[#db6d89]">Início</Link>
          </li>
          <li>
            <Link to="/quem-somos" className="text-[#E22E5B] hover:text-[#db6d89]">Quem Somos</Link>
          </li>
          <li>
            <Link to="/plataforma-telessaude" className="text-[#E22E5B] hover:text-[#db6d89]">Plataforma de Telessaúde</Link>
          </li>
          <li>
            <Link to="/servicos" className="text-[#E22E5B] hover:text-[#db6d89]">Serviços</Link>
          </li>
          <li>
            <Link to="/politica-de-privacidade" className="text-[#E22E5B] hover:text-[#db6d89]">Política de privacidade</Link>
          </li>
        </ul>
        {/* Botão menu mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none rounded-lg"
          style={{ background: '#222', backgroundColor: '#EEEEEE' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="block w-7 h-1 bg-[#E22E5B] rounded mb-1"></span>
          <span className="block w-7 h-1 bg-[#E22E5B] rounded mb-1"></span>
          <span className="block w-7 h-1 bg-[#E22E5B] rounded"></span>
        </button>
      </div>
      {/* Menu lateral mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#EEEEEE] bg-opacity-90 z-50 md:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-64 h-full shadow-lg flex flex-col py-8 px-6 animate-slide-in"
            style={{ background: '#EEEEEE' }}
            onClick={e => e.stopPropagation()}>
            <button
              className="self-end mb-8 text-3xl text-[#E22E5B] focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-6 font-semibold text-lg">
              <li>
                <Link to="/tela-inicio" className="text-[#E22E5B] hover:text-[#db6d89]" onClick={() => setMenuOpen(false)}>Início</Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-[#E22E5B] hover:text-[#db6d89]" onClick={() => setMenuOpen(false)}>Quem Somos</Link>
              </li>
              <li>
                <Link to="/plataforma-telessaude" className="text-[#E22E5B] hover:text-[#db6d89]" onClick={() => setMenuOpen(false)}>Plataforma de Telessaúde</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-[#E22E5B] hover:text-[#db6d89]" onClick={() => setMenuOpen(false)}>Serviços</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-[#E22E5B] hover:text-[#db6d89]" onClick={() => setMenuOpen(false)}>Política de privacidade</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}