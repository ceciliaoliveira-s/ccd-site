import LogoRodape from '../assets/Logo rodape.png';

function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#FFFFF] mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-[#E22E5B] text-sm">
        {/* Logo e social */}
        <div className="flex flex-col items-start gap-3 min-w-[200px]">
          <img src={LogoRodape} alt="Centro de Cuidado Digital" className="h-20 mb-3" />
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="WhatsApp"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 13.06a6.5 6.5 0 10-2.72 2.72l2.85.71a1 1 0 001.21-1.21l-.71-2.85z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17" cy="7" r="1.5" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M8 11v5M8 8v.01M12 11v5m0-5a2 2 0 114 0v5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </div>
        {/* Atendimento e endereço */}
        <div className="flex flex-col items-start gap-2 min-w-[220px]">
          <span className="font-bold text-base mb-1">Horário de atendimento:</span>
          <span className="mb-2">Segunda a sexta 8h - 18h</span>
          <span className="font-bold text-base mt-2 mb-1">Endereço:</span>
          <span>Av. Mascarenhas de Moraes, 1776</span>
          <span>CEP: 51170-000</span>
        </div>
        {/* Produtos e Serviços */}
        <div className="flex flex-col items-start gap-2 min-w-[180px]">
          <span className="font-bold text-base mb-1">Produtos e Serviços:</span>
          <a href="/nossas-solucoes/produtos" className="hover:underline">Plataforma de telessaúde</a>
          <a href="/nossas-solucoes/servicos" className="hover:underline">Serviços</a>
          <a href="#" className="hover:underline">Suporte</a>
        </div>
        {/* Institucional */}
        <div className="flex flex-col items-start gap-2 min-w-[180px]">
          <span className="font-bold text-base mb-1">Institucional:</span>
          <a href="/quem-somos" className="hover:underline">Quem somos</a>
          <a href="/nossas-solucoes" className="hover:underline">Nossas soluções</a>
          <a href="/politica-privacidade" className="hover:underline">Política de privacidade</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-4 flex flex-col md:flex-row md:justify-between items-start md:items-center text-xs text-[#E22E5B]">
        <span className="font-bold">© Centro de Cuidado Digital – Todos os direitos reservados.</span>
        <span className="mt-1 md:mt-0">10.232.123/0001-10</span>
      </div>
    </footer>
  );
}

export default Footer;
