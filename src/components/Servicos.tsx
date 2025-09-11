import Footer from './Footer';
import devsiteicon from '../assets/devsiteicon.png';
import infracftvicon from '../assets/infracftvicon.png';
import infraderedesicon from '../assets/infraderedesicon.png';
import anlsdadosicon from '../assets/anlsdadosicon.png';
import brandingicon from '../assets/brandingicon.png';
import capaservicos3 from '../assets/capaservicos3.png';
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } }
};

function Servicos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
  {/* Primeira seção */}
  <section className="w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-17 gap-10 bg-white relative">
    
    {/* Texto */}
    <div className="flex-1 flex flex-col items-start justify-center z-10">
      
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] text-left mb-6 leading-tight"
        style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
      >
        Serviços de tecnologia e infraestrutura para o seu negócio.
      </motion.h1>

      {/* Parágrafo 1 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-base md:text-lg text-left text-[#A35E57] mb-4 max-w-2xl"
      >
        O <span className="font-bold text-left text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que oferece um portfólio sólido com serviços de tecnologia em diversos segmentos para atender de forma estratégica às necessidades do seu negócio.
      </motion.p>

      {/* Parágrafo 2 */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-base md:text-lg text-[#E22E5B] md-12 font-semibold mb-12"
      >
        Saiba mais sobre os nossos serviços abaixo:
      </motion.p>

      {/* Botão */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(226,46,91,0.4)" }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, repeatDelay: 5, duration: 1.5 }}
        className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl mb-4 font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition"
      >
        Quero Contratar
      </motion.button>
    </div>

    {/* Imagem */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      animate={{ y: [0, -10, 0] }}
      viewport={{ once: true }}
      className="flex-1 flex justify-end relative"
    >
      <img
        src={capaservicos3}
        alt="Tecnologia e Telessaúde"
        className="w-full max-w-[950px] md:max-w-[950px] h-auto md:mr-[-80px] z-0"
        style={{ objectFit: "contain" }}
      />
    </motion.div>
  </section>

      {/* Nova seção: Soluções por segmentos */}
     <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-2/3 pl-0 md:pl-16">
            <h2
              className="text-3xl font-bold text-[#E95470] mb-5 text-left"
              style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
            >
              Soluções por segmentos
            </h2>
            <p
              className="text-base text-[#A35E57] max-w-3xl text-left"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Ofertamos tecnologia assertiva para impulsionar o negócio dos nossos
              parceiros em diversos segmentos.
            </p>
          </div>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Card 1: Outsourcing de TI */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(226,46,91,0.25)"
            }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center min-w-[300px] max-w-[340px] mx-auto"
            style={{ boxShadow: "0 8px 24px 0 #E954701A" }}
          >
            <img
              src={brandingicon}
              alt="Outsourcing de TI"
              className="w-10 h-10 mb-6"
            />
            <h3
              className="text-base font-bold text-[#A35E57] text-center mb-4"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Outsourcing de TI
            </h3>
            <p
              className="text-xs text-[#A35E57] text-center"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Crie uma marca única com design e estratégia alinhados ao propósito
              de sua empresa.
            </p>
          </motion.div>

          {/* Card 2: Identidade visual & branding */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(226,46,91,0.25)"
            }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center min-w-[300px] max-w-[340px] mx-auto"
            style={{ boxShadow: "0 8px 24px 0 #E954701A" }}
          >
            <img
              src={brandingicon}
              alt="Identidade visual & branding"
              className="w-10 h-10 mb-6"
            />
            <h3
              className="text-base font-bold text-[#A35E57] text-center mb-4"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Identidade visual <br /> & branding
            </h3>
            <p
              className="text-xs text-[#A35E57] text-center"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Crie uma marca única com design e estratégia alinhados ao propósito
              de sua empresa.
            </p>
          </motion.div>

          {/* Card 3: Desenvolvimento de Sites e plataformas */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(226,46,91,0.25)"
            }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center min-w-[300px] max-w-[340px] mx-auto"
            style={{ boxShadow: "0 8px 24px 0 #E954701A" }}
          >
            <img
              src={devsiteicon}
              alt="Desenvolvimento de Sites e plataformas"
              className="w-10 h-10 mb-5"
            />
            <h3
              className="text-base font-bold text-[#A35E57] text-center mb-4"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Desenvolvimento de <br /> sites e plataformas
            </h3>
            <p
              className="text-xs text-[#A35E57] text-center"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Sites e plataformas responsivas e seguras alinhados ao seu modelo
              de negócio e identidade visual.
            </p>
          </motion.div>

          {/* Card 4: Infraestrutura de câmeras (CFTV) */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(226,46,91,0.25)"
            }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center min-w-[300px] max-w-[340px] mx-auto"
            style={{ boxShadow: "0 8px 24px 0 #E954701A" }}
          >
            <img
              src={infracftvicon}
              alt="Infraestrutura de câmeras (CFTV)"
              className="w-10 h-10 mb-4"
            />
            <h3
              className="text-base font-bold text-[#A35E57] text-center mb-2"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Infraestrutura de câmeras <br /> (CFTV)
            </h3>
            <p
              className="text-xs text-[#A35E57] text-center"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Centrais de monitoramento de ambientes internos e/ou externos,
              instalação de redes CFTV e configuração de DVR's utilizando sistemas
              da intelbras local e/ou em nuvem.
            </p>
          </motion.div>

          {/* Card 5: Infraestrutura de redes */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(226,46,91,0.25)"
            }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center min-w-[300px] max-w-[340px] mx-auto"
            style={{ boxShadow: "0 8px 24px 0 #E954701A" }}
          >
            <img
              src={infraderedesicon}
              alt="Infraestrutura de redes"
              className="w-10 h-10 mb-4"
            />
            <h3
              className="text-base font-bold text-[#A35E57] text-center mb-2"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Infraestrutura de redes
            </h3>
            <p
              className="text-xs text-[#A35E57] text-center"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Planejamento e implantação de projetos de redes de computadores,
              contendo estruturas como: Cabeamento, switches, roteadores, firewalls
              e protocolos na camada de enlace e de rede.
            </p>
          </motion.div>

          {/* Card 6: Análise de dados */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(226,46,91,0.25)"
            }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center min-w-[300px] max-w-[340px] mx-auto"
            style={{ boxShadow: "0 8px 24px 0 #E954701A" }}
          >
            <img
              src={anlsdadosicon}
              alt="Análise de dados"
              className="w-10 h-10 mb-4"
            />
            <h3
              className="text-base font-bold text-[#A35E57] text-center mb-2"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Análise de dados
            </h3>
            <p
              className="text-xs text-[#A35E57] text-center"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              Transforme informações em decisões estratégicas com dashboards e
              relatórios inteligentes para definições assertivas junto ao seu
              negócio.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

      <Footer />
    </div>
  );
}

export default Servicos;
