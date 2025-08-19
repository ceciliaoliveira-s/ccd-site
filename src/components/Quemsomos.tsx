import Footer from './Footer';

function QuemSomos() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Primeira section conforme protótipo */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-12 gap-8 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-6 leading-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
            Produtos de tecnologia e<br />plataforma de telessaúde
          </h1>
          <p className="text-base md:text-lg text-[#9B6B6B] max-w-xl">
            O <span className="font-bold text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que tem o propósito de integrar ferramentas tecnológicas e de telessaúde ao mercado, criando soluções de alta performance, com amplas camadas de segurança, suporte e escalabilidade que transformam o negócio e a estrutura das empresas parceiras.
          </p>
        </div>

      </section>
      {/* Seção Missão */}
      <section className="w-full py-12 flex flex-col items-center bg-[#FFF9F5]">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-6">Missão</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full flex flex-col md:flex-row items-start gap-6">
          {/* Ícone Missão */}
          <div className="flex-shrink-0 flex flex-col items-start justify-start -mt-2 md:-mt-3">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" strokeWidth="4"/><path d="M24 14v10l7 7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-lg text-[#9B6B6B]">Nossa missão é cuidar e atender os nossos clientes de maneira ágil e acessível com o objetivo de gerar valor ao seu negócio e de construir um relacionamento estratégico em atendimento e suporte de maneira eficiente.</p>
            <p className="text-lg text-[#9B6B6B]">Nosso produto de telessaúde e o portfólio de serviços e suporte são ofertados com este compromisso e eficiência.</p>
            <div className="flex justify-end mt-2">
              <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-3 px-8 rounded-lg shadow transition">Quero Contratar</button>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Valores */}
      <section className="w-full py-12 flex flex-col items-center bg-[#FFF9F5]">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-6">Valores</h2>
        <p className="text-base text-[#9B6B6B] max-w-2xl text-center mb-10">O Centro de Cuidado Digital possui valores sólidos para ofertar e atender nossos parceiros de forma dedicada e ágil, prezando qualidade e eficiência nos serviços e produtos que atuamos.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
          {/* Valor 1 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 12m-9,0a9,9 0 1,0 18,0a9,9 0 1,0 -18,0" strokeWidth="2"/><path d="M12 8v4l3 3" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="font-semibold text-[#A35E57]">Cliente no centro</span>
          </div>
          {/* Valor 2 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 8l-2 4h4l-2 4" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="font-semibold text-[#A35E57]">Excelência no atendimento</span>
          </div>
          {/* Valor 3 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2"/><path d="M16 8l-8 8" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="font-semibold text-[#A35E57]">Acessibilidade de forma escalável</span>
          </div>
          {/* Valor 4 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 17v.01" strokeWidth="2"/><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2"/><path d="M8 12h8" strokeWidth="2"/></svg>
            <span className="font-semibold text-[#A35E57]">Responsabilidade e privacidade com as informações dos nossos parceiros</span>
          </div>
          {/* Valor 5 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 17v.01" strokeWidth="2"/><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2"/><path d="M8 12h8" strokeWidth="2"/></svg>
            <span className="font-semibold text-[#A35E57]">Confiabilidade e transparência</span>
          </div>
          {/* Valor 6 */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-10 h-10 text-[#E22E5B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2"/><path d="M8 16l8-8" strokeWidth="2"/></svg>
            <span className="font-semibold text-[#A35E57]">Pilares em tecnologia e segurança</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default QuemSomos;
