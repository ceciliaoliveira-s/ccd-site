
import logo from '../assets/Logo navbar.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-22">
        <div className="flex items-center space-x-2 font-bold text-xl text-[#E22E5B]">
          <img src={logo} alt="Logo" className="h-21 w-21 object-contain" />
          <span>Centro de Cuidado Digital</span>
        </div>
        <ul className="flex space-x-10 font-semibold text-base">
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
      </div>
    </nav>
  );
}