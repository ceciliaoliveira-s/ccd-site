import Footer from './Footer';

function Produtos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Seção Plataforma de Telessaúde */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14 gap-10 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-12 leading-tight">Plataforma de telessaúde</h1>
          <p className="text-base md:text-lg text-left text-[#9B6B6B] mb-2">
            Somos parceiros da <span className="font-bold text-[#E22E5B]">Mediquo</span>, uma empresa com mais de 15 anos no
            mercado brasileiro e europeu com amplo impacto e democratização do acesso à saúde através da plataforma de telessaúde.
          </p>
          <p className="text-base md:text-lg text-[#9B6B6B] mb-2">
            Sua disponibilização ocorre de forma mobile para os sistemas Android e IOS.
          </p>
          <p className="text-base md:text-lg text-[#E22E5B] font-semibold mt-2">Saiba mais sobre a nossa plataforma de telessaúde abaixo.</p>
        </div>
      </section>
      {/* Seção Especialidades Disponíveis */}
      <section className="w-full py-14 px-6 md:px-16 bg-[#FFF9F5] flex flex-col items-start">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-12">Especialidades disponíveis</h2>
        <p className="text-base text-lg text-[#9B6B6B] max-w-3xl mb-8">
          A <span className="font-bold text-[#E22E5B]">Mediquo</span> oferece uma solução completa de telemedicina, reunindo múltiplas especialidades médicas em um só lugar. É o único app do segmento que inclui profissionais de educação física, promovendo um cuidado realmente integral e alinhado ao bem-estar físico e mental.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 mb-8 w-full max-w-3xl">
          <span className="font-bold text-[#E22E5B]">Clínico Geral 24h</span>
          <span className="font-bold text-[#E22E5B]">Ginecologista</span>
          <span className="font-bold text-[#E22E5B]">Dermatologista</span>
          <span className="font-bold text-[#E22E5B]">Psicólogo</span>
          <span className="font-bold text-[#E22E5B]">Nutricionista</span>
          <span className="font-bold text-[#E22E5B]">Pediatra</span>
          <span className="font-bold text-[#E22E5B]">Treinador físico</span>
          <span className="font-bold text-[#E22E5B]">Médico Veterinário para cães e gatos</span>
        </div>
        <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-3 px-8 rounded-lg shadow transition">Quero Contratar</button>
      </section>
      <section className="w-full py-16 px-6 md:px-16 bg-[#FFFFFF] flex flex-col items-start">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-20">Programa de cashback e benefícios exclusivos</h2>
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Ícone do cashback */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 border-2 border-green-300 border-dashed rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">$</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <p className="text-lg text-left text-[#9B6B6B] mb-3">
                  <span className="font-bold text-[#9B6B6B]">Cashback exclusivo para empresas:</span> Invista no bem-estar da sua equipe e receba mais em troca.
                </p>
                <p className="text-lg text-left text-[#9B6B6B]">
                  Ofereça telemedicina de qualidade aos seus colaboradores e recupere parte do valor investido por meio do <span className="font-bold text-[#A35E57]">nosso programa de cashback para licenças contratadas</span>.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-bold text-left text-[#9B6B6B] mb-8">Como funciona o programa de Cashback?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-[#9B6B6B]">Contrate nosso plano corporativo de telemedicina.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-[#9B6B6B]">Ative as licenças contratadas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-[#9B6B6B]">Receba cashback proporcional a ativação das licenças direto na conta da empresa.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-end mt-6">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-3 px-3 rounded-lg shadow transition">Consulte nossas condições</button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-20">
          {/* Benefício 1 - 100% seguro */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-[#E22E5B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="font-semibold text-[#9B6B6B]">100% seguro</span>
          </div>

          {/* Benefício 2 - Acesso ilimitado */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-[#E22E5B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
            </div>
            <span className="font-semibold text-[#9B6B6B]">Acesso ilimitado</span>
          </div>

          {/* Benefício 3 - Atendimento 24h */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-[#E22E5B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <span className="font-semibold text-[#9B6B6B]">Atendimento 24h</span>
          </div>

          {/* Benefício 4 - 90% de resolução de casos */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-[#E22E5B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <span className="font-semibold text-[#9B6B6B]">90% de resolução de casos</span>
          </div>

          {/* Benefício 5 - Inclusão de dependentes */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-[#E22E5B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="font-semibold text-[#9B6B6B]">Inclusão de dependentes</span>
          </div>

          {/* Benefício 6 - Sem custos adicionais */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-[#E22E5B] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M15 9l-6 6"/>
                <path d="M9 9l6 6"/>
              </svg>
            </div>
            <span className="font-semibold text-[#9B6B6B]">Sem custos adicionais</span>
          </div>
        </div>
      </section>

      {/* Seção Benefícios por Segmento */}
      <section className="w-full py-16 px-6 md:px-16 bg-[#FFF9F5] flex flex-col items-start">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-10">Benefícios por segmento</h2>
        <p className="text-base text-[#9B6B6B] max-w-6xl text-left mb-16">
          A plataforma <b>Mediquo</b> é um app de telemedicina e telessaúde multiprofissional que utiliza a tecnologia para facilitar o acesso rápido, prático e seguro aos cuidados de saúde em todo o Brasil e na Europa, e que alcança diversos segmentos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
          {/* Card Para Empresas */}
          <div className="bg-[#FFF9F5] rounded-xl p-6 border border-[#9B6B6B]">
            <h3 className="text-xl font-bold text-[#E22E5B] mb-7">Para empresas</h3>
            <ul className="space-y-6">
              <li className="flex items-start  text-left gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Promoção da saúde corporativa e individual</span>
              </li>
              <li className="flex items-start text-left gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Mais engajamento de talentos</span>
              </li>
              <li className="flex items-start text-left gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Redução de rotatividade dos colaboradores</span>
              </li>
            </ul>
          </div>

          {/* Card Governo */}
          <div className="bg-[#FFF9F5] rounded-xl p-6 border border-[#9B6B6B]">
            <h3 className="text-xl font-bold text-[#E22E5B] mb-6">Governo</h3>
            <ul className="space-y-6">
              <li className="flex items-start text-left gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Ampliação na cobertura e assistência médica</span>
              </li>
              <li className="flex items-start text-left gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Redução de filas de atendimento em postos de saúde e plataformas de agendamento de consultas do <b>SUS</b>  </span>
              </li>
              <li className="flex items-start text-left gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Enxugamento de despesas</span>
              </li>
            </ul>
          </div>

          {/* Card Operadoras de Saúde */}
          <div className="bg-[#FFF9F5] rounded-xl p-6 border border-[#9B6B6B]">
            <h3 className="text-xl font-bold text-[#E22E5B] mb-6">Operadoras de saúde</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Fidelização de clientes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Extensão de cobertura</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Redução da sinistralidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Enxugamento de despesas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>






      <Footer />
    </div>
  );
}

export default Produtos;
