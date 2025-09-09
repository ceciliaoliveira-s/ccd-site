import Footer from './Footer';
import clientenocentroicon from '../assets/clientenocentro icon.png';
import acessibilidadeicon from '../assets/acessibilidade icon.png';
import capaquemsomos from '../assets/capaquemsomos.png';
import alvomissao from '../assets/alvomissao.png';
import estrelavalores from '../assets/estrelavalores.png';
import Securityicon from '../assets/Security icon.png';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from "framer-motion";



function QuemSomos() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Primeira section conforme protótipo */}
      <section className="flex flex-col md:flex-row items-start w-full pl-1 py-15 px-0 bg-white">
        
        {/* Texto à esquerda */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2x1">
          
          {/* Título animado */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-12 leading-tight text-left"
            style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
          >
            Produtos de tecnologia e
            <br />plataforma de telessaúde
          </motion.h1>

          {/* Parágrafo animado */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#9B6B6B] max-w-xl text-left mb-16"
          >
            O <span className="font-bold text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que tem o propósito de integrar ferramentas tecnológicas e de telessaúde ao mercado, criando soluções de alta performance com amplas camadas de segurança, suporte e escalabilidade que transformam o negócio das empresas parceiras.
          </motion.p>

          {/* Botão animado */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(226,46,91,0.35)" }}
            whileTap={{ scale: 0.97 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl mb-16 font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition"
          >
            Quero Contratar
          </motion.button>
        </div>

        {/* Imagem animada à direita */}
        <motion.div
          className="flex-1 flex justify-center items-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={capaquemsomos}
            alt="Produtos de tecnologia e plataforma de telessaúde"
            className="w-full max-w-[550px] h-auto"
            whileHover={{ rotate: 1.5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </section>

   <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Título */}
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold text-[#E22E5B] mb-12 text-left relative inline-block w-full md:-ml-2"
      style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
    >
      Missão
      {/* Linha gradiente abaixo do título */}
      <motion.span
        className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-[#E22E5B] to-[#db6d89] rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-start gap-6 bg-white"
    >
      {/* Ícone */}
      <div className="flex-shrink-0 flex items-start justify-start -mt-2 md:mt-0">
        <img
          src={alvomissao}
          alt="missão"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Texto com animação stagger */}
      <motion.div
        className="flex-1 flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.p
          className="text-lg text-left text-[#A35E57]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
        >
          Nossa missão é cuidar e atender os nossos parceiros de maneira ágil e
          com qualidade, promovendo geração de valor ao seu negócio e construindo
          um relacionamento de confiança e excelência. Estamos sempre alinhados
          às melhores práticas de mercado e com produtos e tecnologia de ponta
          pra gerar valor estratégico aos nossos parceiros.
        </motion.p>

        <motion.p
          className="text-lg text-left text-[#A35E57]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
        >
          Agregado a nossa <b className="text-[#E22E5B]">missão,</b> impulsionamos
          a plataforma de telessaúde{" "}
          <b className="text-[#E22E5B]">Mediquo</b> com pronto atendimento 24h e
          múltiplas especialidades com a finalidade de cuidarmos dos nossos
          parceiros e dependentes.
        </motion.p>

        <motion.p
          className="text-lg text-left text-[#A35E57]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
        >
          E por fim, demais serviços que disponibilizamos, estão alinhados a
          nossa missão de gerar valor e crescimento ao mercado de maneira séria e
          responsável.
        </motion.p>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Seção Valores – full bleed */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-16">
  <div className="max-w-6xl mx-auto px-6 flex flex-col">
    
    {/* Título */}
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold text-left text-[#E22E5B] mb-6 md:-ml-2"
      style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
    >
      Valores
    </motion.h2>

    {/* Parágrafo */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-xl text-[#9B6B6B] text-left mb-20"
    >
      O Centro de Cuidado Digital possui valores sólidos para ofertar e atender nossos parceiros de forma dedicada e ágil, prezando qualidade e eficiência nos serviços e produtos que ofertamos.
    </motion.p>

    {/* Grid de valores */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-20 gap-x-0 md:gap-x-8 lg:gap-x-16 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {[
        { icon: <img src={clientenocentroicon} alt="Cliente no centro" className="w-14 h-14 object-contain" />, text: "Cliente no centro" },
        { icon: <img src={estrelavalores} alt="Excelência no atendimento" className="w-14 h-14 object-contain" />, text: <>Excelência no <br /> atendimento</> },
        { icon: <img src={acessibilidadeicon} alt="Acessibilidade" className="w-14 h-14 object-contain" />, text: <>Acessibilidade<br />de forma escalável</> },
        { icon: <img src={Securityicon} alt="Responsabilidade e privacidade" className="w-14 h-14 object-contain" />, text: <>Conformidade com a Lei Geral de Proteção de Dados</> },
        { icon: <CheckCircle className="w-14 h-14 text-[#E22E5B]" />, text: <>Confiabilidade e <br /> transparência</> },
        { icon: <ShieldCheck className="w-14 h-14 text-[#E22E5B]" />, text: <>Pilares em tecnologia e <br /> segurança</> },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center gap-4 px-2"
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            {item.icon}
          </div>
          <span className="font-bold text-lg text-[#A35E57]">{item.text}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default QuemSomos;

