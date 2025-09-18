import Footer from './Footer';
import pranchetaicon from '../assets/pranchetaicon.png';
import capaproduto4 from '../assets/capaproduto4.png';
import cashbackicon from '../assets/cashbackicon.png';
import clinicogeralicon2 from '../assets/clinicogeralicon2.png'; 
import dermatologistaicon from '../assets/dermatologistaicon.png';
import ginecologistaicon2 from '../assets/ginecologistaicon2.png';
import psicologoicon2 from '../assets/psicologoicon2.png';
import treinadorfisicoicon3 from '../assets/treinadorfisicoicon3.png';
import nutricionistaicon from '../assets/nutricionistaicon.png';
import pediatriaicon2 from '../assets/pediatriaicon2.png';
import medicoveterinarioicon3 from '../assets/medicoveterinarioicon3.png';
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-8 leading-tight text-left"
            style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
          >
            Plataforma de telessaúde <br /> para cuidado integral
          </motion.h1>

          {/* Parágrafo 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base text-left text-[#9B6B6B] mb-4"
          >
            Somos parceiros da <span className="font-bold text-[#E22E5B]">Mediquo</span>, uma empresa com mais de <b>15 anos</b> no
            mercado <br /> brasileiro e europeu com amplo impacto e democratização do acesso à saúde <br /> através da plataforma de telessaúde.
          </motion.p>

          {/* Parágrafo 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-base text-[#9B6B6B] mb-4"
          >
            Sua disponibilização ocorre de forma mobile para os sistemas <b> Android e IOS.</b>
          </motion.p>

          {/* Destaque */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg text-[#E22E5B] font-semibold mt-2 mb-12"
          >
            Saiba mais sobre a plataforma de telessaúde abaixo.
          </motion.p>

          {/* Botão animado */}
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
          animate={{ opacity: 1, x: 0 }}
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
          <div className="text-left md:w-3/3 md:ml-[4.333%] mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-[#E95470] mb-10" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>
              Especialidades disponíveis
            </h2>
            <p className="text-base text-left text-[#A35E57] max-w-6xl mb-16">
              A <span className="font-bold text-[#E95470]">Mediquo</span> oferece uma solução completa de telemedicina, reunindo múltiplas especialidades médicas em um só lugar, sendo o único aplicativo do segmento que inclui profissionais de educação física, proporcionando cuidado realmente integral e alinhado ao bem-estar físico e mental.
            </p>
          </div>

          {/* Lista de especialidades em duas colunas */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 mb-12 max-w-10xl">
            {/* Coluna Esquerda */}
            <div className="space-y-6 ml-16 md:ml-19">
              {/* Clínico Geral 24h */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={clinicogeralicon2} alt="Clínico Geral 24h" className="w-22 h-22 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Pronto Atendimento 24h</span>
                  <p className="text-[#A35E57] text-base">Especialistas em medicina clínica geral disponíveis <br /> durante as <b>24h por dia, nos sete dias da semana.</b> </p>
                </div>
              </div>
              
              {/* Dermatologista */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={dermatologistaicon} alt="Dermatologista" className="w-28 h-28 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Dermatologistas</span>
                  <p className="text-[#A35E57] text-base">Especialistas médicos em dermatologia para cuidar <br /> da saúde da pele de forma personalizada.</p>
                </div>
              </div>
              
              {/* Nutricionista */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={nutricionistaicon} alt="Nutricionista" className="w-28 h-28 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Nutricionistas</span>
                  <p className="text-[#A35E57] text-base">Acompanhamento personalizado por nutricionistas <br /> para alcançar qualquer objetivo em saúde.</p>
                </div>
              </div>
              
              {/* Treinador físico */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={treinadorfisicoicon3} alt="Treinador físico" className="w-36 h-36 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Treinadores físicos</span>
                  <p className="text-[#A35E57] text-base">Treinadores físicos à disposição para cuidado integral <br /> da saúde do corpo e promoção do bem-estar.</p>
                </div>
              </div>
            </div>
            
            {/* Coluna Direita */}
            <div className="space-y-6 ml-8 ">
              {/* Ginecologista */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={ginecologistaicon2} alt="Ginecologista" className="w-28 h-28 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Ginecologistas</span>
                  <p className="text-[#A35E57] text-base">Profissionais da saúde selecionados pelo MediQuo <br /> para cuidar da saúde feminina.</p>
                </div>
              </div>
              
              {/* Psicólogo */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={psicologoicon2} alt="Psicólogo" className="w-28 h-28 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Psicólogos</span>
                  <p className="text-[#A35E57] text-base">Psicólogos com formação nos variados campos da psicologia <br /> para um atendimento amplo de saúde mental.</p>
                </div>
              </div>
              
              {/* Pediatra */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={pediatriaicon2} alt="Pediatra" className="w-28 h-28 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Pediatras</span>
                  <p className="text-[#A35E57] text-base">Consultas com especialistas em pediatria para dependentes <br /> menores de idade sem custo adicional.</p>
                </div>
              </div>
              
              {/* Médico Veterinário */}
              <div className="flex items-center gap-6">
                <div className="w-21 h-28 flex items-center justify-center border border-[#E95470] rounded-xl">
                  <img src={medicoveterinarioicon3} alt="Médico Veterinário" className="w-28 h-28 object-contain" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-[#E95470] text-xl">Médicos Veterinários</span>
                  <p className="text-[#A35E57] text-base">Atendimento com especialistas em medicina veterinária para <br /> que cães e gatos também tenham a saúde em dia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Informações importantes */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#F8EFEA] rounded-lg shadow-md p-8 border border-[#E95470]">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl text-left font-bold text-[#E95470] mb-6">Informações importantes!</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#E95470] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-[#A35E57]">
                        A <span className="font-bold text-[#E95470]">Mediquo</span> possui um corpo clínico próprio regulamentado via <span className="font-bold text-[#E95470]">CFM</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#E95470] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-[#A35E57]">São profissionais com no mínimo 5 anos de experiência no mercado.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#E95470] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-[#A35E57]">
                        A plataforma tem como propósito reduzir o <span className="font-bold text-[#E95470]">absenteísmo</span> e possui um crivo criterioso para fornecer <span className="font-bold text-[#E95470]">atestado médico</span>.
                      </span>
                    </li>
                  </ul>
                </div>
                <img src={pranchetaicon} alt="Prancheta" className="w-40 h-20 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-6 md:px-16 bg-[#FFFFFF] flex flex-col items-start">
        <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-16" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>Programa de cashback e benefícios exclusivos</h2>
        <div className="bg-white border border-[#E22E5B] rounded-2xl shadow-lg p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Ícone do cashback */}
            <div className="flex-shrink-0">
              <img
                src={cashbackicon}
                alt="Cashback"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <p className="text-2xl text-left text-[#9B6B6B] mb-6">
                  <span className="font-bold text-[#E22E5B] mt-4 block">Cashback exclusivo para empresas</span>
                </p>
                <p className="text-lg text-left text-[#9B6B6B]">
                  Ofereça telemedicina de qualidade aos seus colaboradores, e a cada familiar que também obtiver uma licença, recupere parte do valor por meio do nosso <b><span style={{color: '#E22E5B'}}>programa de cashback para licenças contratadas</span></b>.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-left text-[#E22E5B] mb-8">Como funciona o nosso programa de Cashback?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#E22E5B] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg mb-3 text-[#9B6B6B]">Contrate o nosso plano corporativo de telemedicina.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#E22E5B] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg mb-3 text-[#9B6B6B]">Ative as licenças contratadas junto aos colaboradores da empresa.</span>
                  </li>
                  <li className="flex items-start text-left gap-2">
                    <span className="w-2 h-2 bg-[#E22E5B] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-lg mb-4 text-[#9B6B6B]"> Para cada licença adquirida por um familiar de um colaborador <span className="font-bold text-[#E95470]">já ativo,</span> <br /> a empresa recebe cashback creditado diretamente em sua conta.</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-end mt-2">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-3 px-4 rounded-lg shadow transition">Consulte nossas condições</button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-20">
          {/* Benefício 1 - 100% seguro */}
          <div className="flex flex-col items-center">
            <img src={appicon} alt="100% seguro" className="w-13 h-13 object-contain mb-8" />
            <span className="font-bold text-[#A35E57] mb-20">100% Seguro</span>
          </div>

          {/* Benefício 2 - Acesso ilimitado */}
          <div className="flex flex-col items-center">
            <img src={infinitoicon} alt="Acesso ilimitado" className="w-16 h-16 object-contain mb-7" />
            <span className="font-bold text-[#A35E57]">Acesso ilimitado</span>
          </div>

          {/* Benefício 3 - Atendimento 24h */}
          <div className="flex flex-col items-center">
            <img src={vintequatrohrsicon} alt="Atendimento 24h" className="w-14 h-14 object-contain mb-8" />
            <span className="font-bold text-[#A35E57]">Atendimento 24h</span>
          </div>

          {/* Benefício 4 - 90% de resolução de casos */}
          <div className="flex flex-col items-center text-center gap-3">
            <img src={aceitacaoicon} alt="90% de resolução de casos" className="w-13 h-13 object-contain mb-7" />
            <span className="font-bold text-[#9B6B6B]">90% de resolução de casos</span>
          </div>

          {/* Benefício 5 - Inclusão de dependentes */}
          <div className="flex flex-col items-center text-center gap-3">
            <img src={familyicon} alt="Inclusão de dependentes" className="w-13 h-13 object-contain mb-7" />
            <span className="font-bold text-[#9B6B6B]">Inclusão de dependentes</span>
          </div>

          {/* Benefício 6 - Sem custos adicionais */}
              <div className="flex flex-col items-center">
                <img src={nullicon} alt="Sem custos adicionais" className="w-13 h-13 object-contain mb-10" />
                <span className="font-bold text-[#A35E57]">Sem custos adicionais</span>
            </div>
        </div>
      </section>

      {/* Seção Benefícios por Segmento */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-14">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="w-full md:w-1/3 md:ml-[8.333%]">
            <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-6 text-left" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>
              Benefícios por segmento
            </h2>
          </div>
          <p className="text-base text-[#9B6B6B]  md:w-3/3 md:ml-[8.333%]  w-full text-left mb-12">
            A plataforma <span className="font-bold text-[#E95470]">Mediquo</span> é um aplicativo de telemedicina e telessaúde que alcança diversos segmentos corporativos e público/privado, proporcionando acesso  <br /> rápido, prático e seguro a múltiplos profissionais de saúde em todo o <b>Brasil e na Europa.</b> Abaixo, mais detalhes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl mx-auto justify-items-center">
            {/* Card Para Empresas */}
            <div className="bg-[#FFF9F5] rounded-xl p-6 border border-[#9B6B6B] w-full max-w-xs">
              <h3 className="text-xl font-bold text-[#E22E5B] mb-7 text-center">Para empresas</h3>
              <ul className="space-y-4">
                <li className="flex items-start  text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Promoção da saúde corporativa e individual.</span>
                </li>
                <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Maior engajamento de talentos.</span>
                </li>
                <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Redução de rotatividade dos colaboradores.</span>
                </li>
                 <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Inclusão de dependentes e possibilidade de adesão para familiares.</span>
                </li>
              </ul>
            </div>

            {/* Card Governo */}
            <div className="bg-[#FFF9F5] rounded-xl p-6 border border-[#9B6B6B] w-full max-w-xs">
              <h3 className="text-xl font-bold text-[#E22E5B] mb-6 text-center">Governo</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Ampliação em cobertura e assistência médica em estados e municípios.</span>
                </li>
                <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Redução de filas de atendimento em postos de saúde e plataformas de agendamento do <b>SUS.</b>  </span>
                </li>
                <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Enxugamento de despesas.</span>
                </li>
                <li className="flex items-start text-left gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Acessibilidade e inclusão social.</span>
                </li>
              </ul>
            </div>

            {/* Card Operadoras de Saúde */}
            <div className="bg-[#FFF9F5] rounded-xl p-6 border border-[#9B6B6B] w-full max-w-xs">
              <h3 className="text-xl font-bold text-[#E22E5B] mb-6 text-center">Telecom</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B]">Fidelização de clientes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B] text-left  "> Benefício de saúde corporativa.  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B] text-left"> Inclusão de dependentes e possibilidade de adesão para familiares. </span>
                </li>
                 <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#A35E57] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#9B6B6B] text-left">Atribuição de valor, com o diferencial frente à concorrência ao integrar saúde digital com conectividade.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>






      <Footer />
    </div>
  );
}

export default Produtos;
