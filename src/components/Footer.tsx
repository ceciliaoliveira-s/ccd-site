import LogoRodape from '../assets/Logo rodape.png';
import Wpp from '../assets/wpp.png'; 

function Footer() {
  return (
    <footer className="w-full bg-white pt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-[72px] text-[#E22E5B] text-base items-start">
        {/* Logo, nome e WhatsApp */}
        <div className="flex flex-col items-start gap-3 min-w-[250px]">
          <img src={LogoRodape} alt="Centro de Cuidado Digital" className="h-32 mb-1" />
          <div className="flex items-center gap-2 mt-2">
            <img src={Wpp} alt="WhatsApp" className="w-6 h-6" />
            <span className="font-bold text-[#E22E5B] text-base">(81)99194–5061</span>
          </div>
        </div>
        {/* Atendimento e endereço */}
        <div className="flex flex-col items-start gap-2 min-w-[220px]">
          <span className="font-bold text-base mb-3">Horário de atendimento:</span>
          <span className="mb-2 text-[#E22E5B]">Segunda a sexta 8h – 18h</span>
          <span className="font-bold text-base mt-2 mb-1">Endereço:</span>
          <span className=" text-left text-[#E22E5B]">Rua Dona Maria Cesar, nº 170 br sala 0203, cxpst 1196 – Recife/PE
          </span>
          <span className="text-[#E22E5B]">CEP: 50.030-140</span>
        </div>
        {/* Institucional */}
        <div className="flex flex-col items-start gap-2 min-w-[200px] md:ml-8">
          <span className="font-bold text-base mb-4">Institucional:</span>
          <a href="/quem-somos" className="text-[#FF6F61] font-normal mb-3 hover:underline hover:text-[#E22E5B] focus:text-[#E22E5B] active:text-[#E22E5B] visited:text-[#E22E5B]">Quem somos</a>
          <a href="/politica-de-privacidade" className="text-[#E22E5B] font-normal hover:underline hover:text-[#E22E5B] focus:text-[#E22E5B] active:text-[#E22E5B] visited:text-[#E22E5B]">Política de privacidade</a>
        </div>
        {/* Produtos e Serviços */}
        <div className="flex flex-col items-start gap-2 min-w-[250px]">
          <span className="font-bold text-base mb-4">Produtos e Serviços:</span>
          <a href="/plataforma-telessaude" className="text-[#E22E5B] font-normal mb-3 hover:underline hover:text-[#E22E5B] focus:text-[#E22E5B] active:text-[#E22E5B] visited:text-[#E22E5B]">Plataforma de telessaúde</a>
          <a
            href="/servicos"
            className="text-[#E22E5B] font-normal mb-3 hover:underline hover:text-[#E22E5B] focus:text-[#E22E5B] active:text-[#E22E5B] visited:text-[#E22E5B]"
          >
            Serviços
          </a>
        </div>
      </div>
      {/* Barra inferior */}
      <div className="w-full bg-[#FCFCFC] mt-8">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center text-xs text-[#E22E5B]">
          <span className="font-bold text-center w-full">
            © Centro de Cuidado Digital – Todos os direitos reservados    |   62.236.723/0001-41

          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
