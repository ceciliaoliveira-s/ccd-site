import servicosIcon from '../assets/Servicos icon.png';
import Footer from '../components/Footer';

function Telainicio() {
  return (
    <div className="flex flex-col gap-16 w-full">
      {/* Primeira seção: já implementada na Home */}
      <section className="flex flex-col items-start w-full pl-1">
        <h1 className="text-5xl font-extrabold text-[#E22E5B] leading-tight mb-6 text-left" style={{ fontFamily: "'Poppins', 'bold'" }}>
          Tecnologia e telessaúde<br />
          integrados promovendo<br />
          impacto de negócio.
        </h1>
        <p className="text-lg text-[#9B6B6B] mb-10 text-left" style={{ fontFamily: "'Open Sans', 'Montserrat', 'Poppins', sans-serif" }}>
          Soluções em serviços de tecnologia e plataformas de telessaúde com recurso escalável, <br/> seguro e acessível proporcionando crescimento de negócio aos nossos parceiros.
        </p>
        <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-lg font-bold py-3 px-10 rounded-lg shadow-md transition">
          Quero Contratar
        </button>
      </section>
      {/* Seção Nossas Soluções com título e cards lado a lado */}
      <section className="w-full" style={{ background: '#FFF9F5' }}>
        <div className="flex flex-row items-start w-full px-8 py-8 gap-8">
          {/* Texto lateral */}
          <div className="flex-1 max-w-md flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-[#E22E5B] mb-4">Nossas soluções</h1>
            <p className="text-base text-[#9B6B6B]">
              Disponibilizamos um portfólio de serviços de tecnologia e produtos de telessaúde para empresas, operadoras de saúde e governo com suporte integral e consultoria.
            </p>
          </div>
          {/* Cards lado a lado */}
          <div className="flex flex-row gap-8 flex-1 justify-start flex-nowrap">
            {/* Card Plataforma de Telessaúde */}
            <div className="bg-[#FFF6F6] rounded-xl shadow-lg p-8 w-80 flex flex-col items-center text-center">
              <span className="text-5xl mb-4">❤️</span>
              <h2 className="text-2xl font-bold text-[#E22E5B] mb-4">Plataforma de Telessaúde</h2>
              <p className="text-base text-[#9B6B6B] mb-4">
                Plataforma de telessaúde integral disponível de forma mobile para os sistemas Android e iOS.<br /><br />
                Possui um portfólio abrangente de especialidades para titulares e dependentes, com profissionais regulados pelo <b>CFM</b> (Conselho Federal de Medicina).
              </p>
              <a href="/nossas-solucoes/produtos">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2 px-6 rounded-lg shadow transition">Saiba mais</button>
              </a>
            </div>
            {/* Card Serviços */}
            <div className="bg-[#FFF6F6] rounded-xl shadow-lg p-8 w-80 flex flex-col items-center text-center">
              <img src={servicosIcon} alt="Serviços" className="h-16 w-16 mb-4" />
              <h2 className="text-2xl font-bold text-[#E22E5B] mb-7">Serviços</h2>
              <ul className="text-base text-[#9B6B6B] text-left mb-11 list-disc list-inside">
                <li>Outsourcing de TI</li>
                <li>Identidade visual e branding</li>
                <li>Desenvolvimento de sites e plataformas</li>
                <li>Infraestrutura de câmeras <b>(CFTV)</b></li>
                <li>Infraestrutura de redes</li>
                <li>Análise de dados</li>
              </ul>
              <a href="/nossas-solucoes/servicos">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2 px-6 rounded-lg shadow transition">Saiba mais</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Parceiros */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#E22E5B] mb-8">Parceiros</h2>
          <div className="flex items-center justify-center gap-12">
            {/* Seta esquerda */}
            <span className="text-[#E22E5B] text-3xl cursor-pointer select-none">&#60;</span>
            {/* Logos dos parceiros */}
            <img src="/parceiros/algar.png" alt="Algar" className="h-12 object-contain" />
            <img src="/parceiros/parlacom.png" alt="Parlacom" className="h-12 object-contain" />
            <img src="/parceiros/mediquo.png" alt="MediQuo" className="h-12 object-contain" />
            {/* Seta direita */}
            <span className="text-[#E22E5B] text-3xl cursor-pointer select-none">&#62;</span>
          </div>
        </div>
      </section>
      {/* Seção Contato */}
      <section className="w-full py-16 bg-[#FFF9F5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#E22E5B] mb-2">Contato</h2>
          <p className="text-[#9B6B6B] mb-8">Entre em contato conosco através do formulário abaixo ou diretamente pelo número comercial.</p>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
            {/* Formulário */}
            <form className="flex-1 flex flex-col gap-4" autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
              <span className="text-[#E22E5B] font-bold text-lg mb-2">Formulário</span>
              <input required type="text" name="nome" placeholder="Nome" className="border rounded px-3 py-2 focus:outline-[#E22E5B] text-[#222]" />
              <input required type="email" name="email" placeholder="E-mail" className="border rounded px-3 py-2 focus:outline-[#E22E5B] text-[#222]" />
              <input required type="tel" name="telefone" placeholder="Telefone" className="border rounded px-3 py-2 focus:outline-[#E22E5B] text-[#222]" />
              <input required type="text" name="empresa" placeholder="Nome da Empresa" className="border rounded px-3 py-2 focus:outline-[#E22E5B] text-[#222]" />
              <textarea required name="necessidade" placeholder="Descreva a necessidade" className="border rounded px-3 py-2 min-h-[96px] focus:outline-[#E22E5B] text-[#222]" />
              <button type="submit" className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2 px-8 rounded-lg shadow mt-2 w-32">Enviar</button>
            </form>
            {/* Contatos rápidos */}
            <div className="flex-1 flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-3 text-[#E22E5B]">
                <span className="text-xl">{/* WhatsApp ícone */} <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6 inline'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16.72 13.06a6.5 6.5 0 10-2.72 2.72l2.85.71a1 1 0 001.21-1.21l-.71-2.85z' /></svg></span>
                <span className="font-bold">(81)9-9999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-[#E22E5B]">
                <span className="text-xl">{/* Instagram ícone */} <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6 inline'><rect width='20' height='20' x='2' y='2' rx='5' /><circle cx='12' cy='12' r='5' /><circle cx='17' cy='7' r='1.5' /></svg></span>
                <span className="font-bold">@centrodecuidadodigital</span>
              </div>
              <div className="flex items-center gap-3 text-[#E22E5B]">
                <span className="text-xl">{/* LinkedIn ícone */} <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6 inline'><rect width='20' height='20' x='2' y='2' rx='5' /><path d='M8 11v5M8 8v.01M12 11v5m0-5a2 2 0 114 0v5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'/></svg></span>
                <span className="font-bold">www.linkedin/in/centrodecuidadodigital/</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Telainicio;