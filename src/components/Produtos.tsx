import Footer from './Footer';
import capaproduto3 from '../assets/capaproduto3.png';

function Produtos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Seção Plataforma de Telessaúde */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-8 leading-tight text-left" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>Plataforma de telessaúde <br /> para cuidado integral <br />Mediquo</h1>
          <p className="text-base text-left text-[#9B6B6B] mb-4">
            Somos parceiros da <span className="font-bold text-[#E22E5B]">Mediquo</span>, uma empresa com mais de <b>15 anos</b> no
            mercado <br />  brasileiro e europeu com amplo impacto e democratização do acesso à saúde <br /> através da plataforma de telessaúde.
          </p>
          <p className="text-base md:text-base text-[#9B6B6B] mb-4">
            Sua disponibilização ocorre de forma mobile para os sistemas  <b> Android e IOS.</b>
          </p>
          <p className="text-base md:text-lg text-[#E22E5B] font-semibold mt-2 mb-12">Saiba mais sobre a plataforma de telessaúde abaixo.</p>
          <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl  mb-4 font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition">
            Quero Contratar
          </button>
        </div>
      
          {/* LADO DIREITO: imagem responsiva */}
        <div className="flex justify-center mt-10 md:mt-0 w-full md:w-auto">
          <img
            src={capaproduto3}
            alt="Tecnologia e Telessaúde"
            className="w-full max-w-[500px] md:max-w-[360px] h-auto"
          />
        </div>
      </section>
      {/* Seção Especialidades Disponíveis */}
      <section className="w-full py-14 px-6 md:px-16 bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-[#E95470] mb-10" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>
              Especialidades disponíveis
            </h2>
            <p className="text-base text-left text-[#A35E57] max-w-6xl mb-16">
              A <span className="font-bold text-[#A35E57]">Mediquo</span> oferece uma solução completa de telemedicina, reunindo múltiplas especialidades médicas em um só lugar. É o único app do segmento que inclui profissionais de educação física, promovendo um cuidado realmente integral e alinhado ao bem-estar físico e mental.
            </p>
          </div>

          {/* Lista de especialidades em duas colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12 max-w-6xl">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Clínico Geral 24h */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Clínico Geral 24h</span>
              </div>
              
              {/* Dermatologista */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Dermatologista</span>
              </div>
              
              {/* Nutricionista */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Nutricionista</span>
              </div>
              
              {/* Treinador físico */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Treinador físico</span>
              </div>
            </div>
            
            {/* Coluna Direita */}
            <div className="space-y-4">
              {/* Ginecologista */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Ginecologista</span>
              </div>
              
              {/* Psicólogo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Psicólogo</span>
              </div>
              
              {/* Pediatra */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Pediatra</span>
              </div>
              
              {/* Médico Veterinário */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E95470] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25zm9.32-6c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25h9.32zM4.34 5h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Médico Veterinário para cães e gatos</span>
              </div>
            </div>
          </div>

          {/* Card Informações importantes */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-400">
              <h3 className="text-xl text-left font-bold text-[#E95470] mb-4">Informações importantes!</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    A <span className="font-bold text-[#A35E57]">Mediquo</span> possui um corpo clínico próprio regulamentado via <span className="font-bold text-[#A35E57]">CFM</span>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">São profissionais com no mínimo 5 anos de experiÊncia no mercado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    A plataforma tem como propósito reduzir o <span className="font-bold text-[#A35E57]">absenteísmo</span> através de um crivo criterioso para fornecer <span className="font-bold text-[#A35E57]">atestado médico</span>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-6 md:px-16 bg-[#FFFFFF] flex flex-col items-start">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-20" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>Programa de cashback e benefícios exclusivos</h2>
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
              
              <div className="flex justify-start mt-2">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2 px-2 rounded-lg shadow transition">Consulte nossas condições</button>
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
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-10" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>Benefícios por segmento</h2>
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
            <h3 className="text-xl font-bold text-[#E22E5B] mb-6">Telecom</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Fidelização de clientes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B] text-left  "> Benefício de saúde corporativa  </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-[#9B6B6B]">Inclusão de dependentes </span>
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
