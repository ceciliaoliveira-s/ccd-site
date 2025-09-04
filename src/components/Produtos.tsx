import Footer from './Footer';
import capaproduto4 from '../assets/capaproduto4.png';
import cashbackicon from '../assets/cashbackicon.png';
import clinicogeralicon from '../assets/clinicogeralicon.png'; 
import dermatologistaicon from '../assets/dermatologistaicon.png';
import ginecologistaicon from '../assets/ginecologistaicon.png';
import psicologoicon from '../assets/psicologoicon.png';
import pediatriaicon from '../assets/pediatriaicon.png';
import appicon from '../assets/appicon.png';
import infinitoicon from '../assets/infinitoicon.png';
import vintequatrohrsicon from '../assets/24hrsicon.png';
import nullicon from '../assets/nullicon.png';
import familyicon from '../assets/familyicon.png';
import aceitacaoicon from '../assets/aceitacaoicon.png';
import {motion} from 'framer-motion';

function Produtos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Seção Plataforma de Telessaúde */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 gap-10 bg-white">
  <div className="flex-1 flex flex-col items-start justify-center">

    {/* Título animado */}
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-8 leading-tight text-left"
      style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
    >
      Plataforma de telessaúde <br /> para cuidado integral
    </motion.h1>

    {/* Parágrafo 1 */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-base text-left text-[#9B6B6B] mb-4"
    >
      Somos parceiros da <span className="font-bold text-[#E22E5B]">Mediquo</span>, uma empresa com mais de <b>15 anos</b> no
      mercado <br /> brasileiro e europeu com amplo impacto e democratização do acesso à saúde <br /> através da plataforma de telessaúde.
    </motion.p>

    {/* Parágrafo 2 */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-base md:text-base text-[#9B6B6B] mb-4"
    >
      Sua disponibilização ocorre de forma mobile para os sistemas <b> Android e IOS.</b>
    </motion.p>

    {/* Destaque */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="text-base md:text-lg text-[#E22E5B] font-semibold mt-2 mb-12"
    >
      Saiba mais sobre a plataforma de telessaúde abaixo.
    </motion.p>

    {/* Botão animado */}
    <motion.button
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#ff4c73",
        boxShadow: "0px 6px 20px rgba(226,46,91,0.3)",
      }}
      className="bg-[#E22E5B] text-white text-base md:text-xl mb-4 font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition"
    >
      Quero Contratar
    </motion.button>
  </div>

  {/* LADO DIREITO: imagem responsiva com animação */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center mt-10 md:mt-0 w-full md:w-auto"
  >
    <img
      src={capaproduto4}
      alt="Tecnologia e Telessaúde"
      className="w-full max-w-[500px] md:max-w-[360px] h-auto drop-shadow-lg rounded-lg"
    />
  </motion.div>
</section>
      {/* Seção Especialidades Disponíveis */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-14">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mb-12 max-w-10xl">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Clínico Geral 24h */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl">
                  <img src={clinicogeralicon} alt="Clínico Geral 24h" className="w-24 h-24 object-contain" />
                </div>
                <span className="font-bold text-[#A35E57]">Pronto Atendimento 24h</span>
              </div>
              
              {/* Dermatologista */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={dermatologistaicon} alt="Dermatologista" className="w-24 h-24 object-contain" />
                </div>
                <span className="font-bold text-[#A35E57]">Dermatologista</span>
              </div>
              
              {/* Nutricionista */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border border-[#E95470] rounded-xl">
                  {/* Substitua pelo ícone de nutricionista se houver */}
                  <svg className="w-6 h-6 text-[#fff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Nutricionista</span>
              </div>
              
              {/* Treinador físico */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center border border-[#E95470] rounded-xl">
                  {/* Substitua pelo ícone de treinador físico se houver */}
                </div>
                <span className="font-bold text-[#A35E57]">Treinador físico</span>
              </div>
            </div>
            
            {/* Coluna Direita */}
            <div className="space-y-4">
              {/* Ginecologista */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={ginecologistaicon} alt="Ginecologista" className="w-24 h-24 object-contain" />
                </div>
                <span className="font-bold text-[#A35E57]">Ginecologista</span>
              </div>
              
              {/* Psicólogo */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={psicologoicon} alt="Psicólogo" className="w-24 h-24 object-contain" />
                </div>
                <span className="font-bold text-[#A35E57]">Psicólogo</span>
              </div>
              
              {/* Pediatra */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={pediatriaicon} alt="Pediatra" className="w-24 h-24 object-contain" />
                </div>
                <span className="font-bold text-[#A35E57]">Pediatra</span>
              </div>
              
              {/* Médico Veterinário */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border border-[#E95470] rounded-xl">
                  {/* Substitua pelo ícone de veterinário se houver */}
                  <svg className="w-6 h-6 text-[#fff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25zm9.32-6c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25h9.32zM4.34 5h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"/>
                  </svg>
                </div>
                <span className="font-bold text-[#A35E57]">Médicos Veterinários</span>
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
              <img
                src={cashbackicon}
                alt="Cashback"
                className="w-12 h-12 object-contain"
              />
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
          <div className="flex flex-col items-center">
            <img src={appicon} alt="100% seguro" className="w-12 h-12 object-contain mb-6" />
            <span className="font-bold text-[#A35E57] mb-20">100% Seguro</span>
          </div>

          {/* Benefício 2 - Acesso ilimitado */}
          <div className="flex flex-col items-center">
            <img src={infinitoicon} alt="Acesso ilimitado" className="w-12 h-12 object-contain mb-2" />
            <span className="font-bold text-[#A35E57]">Acesso ilimitado</span>
          </div>

          {/* Benefício 3 - Atendimento 24h */}
          <div className="flex flex-col items-center">
            <img src={vintequatrohrsicon} alt="Atendimento 24h" className="w-12 h-12 object-contain mb-2" />
            <span className="font-bold text-[#A35E57]">Atendimento 24h</span>
          </div>

          {/* Benefício 4 - 90% de resolução de casos */}
          <div className="flex flex-col items-center text-center gap-3">
            <img src={aceitacaoicon} alt="90% de resolução de casos" className="w-12 h-12 object-contain mb-2" />
            <span className="font-semibold text-[#9B6B6B]">90% de resolução de casos</span>
          </div>

          {/* Benefício 5 - Inclusão de dependentes */}
          <div className="flex flex-col items-center text-center gap-3">
            <img src={familyicon} alt="Inclusão de dependentes" className="w-12 h-12 object-contain mb-2" />
            <span className="font-semibold text-[#9B6B6B]">Inclusão de dependentes</span>
          </div>

          {/* Benefício 6 - Sem custos adicionais */}
              <div className="flex flex-col items-center">
                <img src={nullicon} alt="Sem custos adicionais" className="w-12 h-12 object-contain mb-2" />
                <span className="font-bold text-[#A35E57]">Sem custos adicionais</span>
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
