import servicosIcon from '../assets/Servicos icon.png';
import platsaude from '../assets/Platsaude.png';
import Footer from '../components/Footer';
import capatelainicio4 from '../assets/capatelainicio4.png';
import logomediquo from '../assets/logomediquo.png';  
import logoparlacom from  '../assets/logoparlacom.png';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const parceirosLogos = [logomediquo, logoparlacom, logomediquo, logomediquo, logoparlacom, logomediquo];

function Telainicio() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; 

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + parceirosLogos.length) % parceirosLogos.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % parceirosLogos.length);
  };

  // Gera os logos visíveis com rotação circular
  const visibleLogos = Array.from({ length: visibleCount }).map((_, idx) => {
    const logoIndex = (startIndex + idx) % parceirosLogos.length;
    return (
      <motion.img
        key={logoIndex}
        src={parceirosLogos[logoIndex]}
        alt={`Parceiro-${logoIndex}`}
        className="h-12 md:h-16 object-contain cursor-pointer"
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0,0,0,0.15)" }}
      />
    );
  });

  return (
    <div className="flex flex-col gap-16 w-full">
      {/* Primeira seção: texto à esquerda, imagem à direita */}
      <section className="flex flex-col md:flex-row items-center w-full py-10 px-4 bg-white">
        {/* LADO ESQUERDO: Título, subtítulo e botão */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#E22E5B] leading-tight mb-4 md:mb-8 text-left" style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}>
            Tecnologia e telessaúde
            integrados gerando valor
            estratégico de negócio.
          </h1>
          <p className="text-base md:text-lg text-[#9B6B6B] mb-6 md:mb-16 text-left" style={{ fontFamily: "'Open Sans', 'Montserrat', 'Poppins', sans-serif" }}>
            Proporcionamos soluções em tecnologia e plataforma de telessaúde com recursos escaláveis, seguros e acessíveis, que impulsionam o crescimento das empresas parceiras.
          </p>
          <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition">
            Quero Contratar
          </button>
        </div>
        {/* LADO DIREITO: imagem responsiva */}
        <div className="flex justify-center mt-10 md:mt-0 w-full md:w-auto">
          <img
            src={capatelainicio4}
            alt="Tecnologia e Telessaúde"
            className="w-full max-w-[320px] md:max-w-[650px] h-auto"
          />
        </div>
      </section>

      {/* Seção Nossas Soluções*/}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-10">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <h1
            className="text-2xl md:text-4xl font-bold text-left text-[#E22E5B] mb-4 md:mb-6"
            style={{ fontFamily: "'Open Sans', 'Montserrat', 'Poppins', sans-serif" }}
          >
            Nossas soluções
          </h1>
          <p className="text-[#9B6B6B] mb-4 md:mb-16 text-lg md:text-lg text-left">
            Disponibilizamos um portfólio de serviços de tecnologia e produto de telessaúde para empresas, operadoras de saúde e governo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
            {/* Card Plataforma de Telessaúde */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center text-center max-w-xs w-full mx-auto"
            >
              <motion.img
                src={platsaude}
                alt="Plataforma de Telessaúde"
                className="h-10 w-10 mb-3"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h2
                className="text-lg font-bold text-[#E22E5B] mb-2"
                style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
              >
                Plataforma de <br /> Telessaúde
              </h2>
              <p
                className="text-sm text-[#9B6B6B] mb-4"
                style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
              >
                Plataforma de telessaúde integral em parceria com a <b>Mediquo,</b>{" "}
                disponível de forma mobile para os sistemas Android e iOS.
                <br />
                <br />
                Possui um corpo clínico abrangente de especialidades para titulares e
                dependentes, com profissionais regulados pelo <b>CFM</b> (Conselho
                Federal de Medicina).
              </p>
              <a href="/nossas-solucoes/produtos">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2 px-6 rounded-lg shadow transition text-sm">
                  Saiba mais
                </button>
              </a>
            </motion.div>

            {/* Card Serviços */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F8EFEA] rounded-2xl shadow-lg p-5 flex flex-col items-center text-center max-w-xs w-full mx-auto"
            >
              <motion.img
                src={servicosIcon}
                alt="Serviços"
                className="h-10 w-10 mb-3"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h2
                className="text-lg font-bold text-[#E22E5B] mb-4"
                style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
              >
                Serviços
              </h2>
              <ul
                className="text-[#9B6B6B] text-left mb-10 list-disc list-inside space-y-4 text-sm"
                style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
              >
                <li>Terceirização de TI</li>
                <li>Identidade visual e branding</li>
                <li>Desenvolvimento de sites e plataformas</li>
                <li>
                  Infraestrutura de câmeras <b>(CFTV)</b>
                </li>
                <li>Infraestrutura de redes</li>
                <li>Análise de dados</li>
              </ul>
              <a href="/nossas-solucoes/servicos">
                <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2  px-6 rounded-lg shadow transition text-sm">
                  Saiba mais
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Seção Parceiros */}
      <section className="w-full py-10 bg-white overflow-hidden">
        <div className="w-full px-0 md:px-1">
          {/* Título com fade-in */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#E22E5B] mb-8 md:mb-14 text-left px-4 md:px-8"
            style={{
              fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'",
            }}
          >
            Parceiros
          </motion.h2>

          <div className="relative flex items-center w-full overflow-hidden">
            {/* Seta esquerda */}
            <motion.span
              whileHover={{ scale: 1.2, x: -3 }}
              className="absolute left-2 z-10 text-[#E22E5B] text-2xl md:text-3xl cursor-pointer select-none"
              onClick={handlePrev}
            >
              &#60;
            </motion.span>

            {/* Carrossel controlado */}
            <div className="flex gap-12 md:gap-16 px-16 transition-all duration-300">
              {visibleLogos}
            </div>

            {/* Seta direita */}
            <motion.span
              whileHover={{ scale: 1.2, x: 3 }}
              className="absolute right-2 z-10 text-[#E22E5B] text-2xl md:text-3xl cursor-pointer select-none"
              onClick={handleNext}
            >
              &#62;
            </motion.span>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-10">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#E22E5B] mb-4 md:mb-8 text-left"
            style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
          >
            Contato
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#9B6B6B] mb-4 md:mb-8 text-lg md:text-xl text-left"
          >
            Entre em contato conosco através do formulário abaixo ou diretamente pelo número comercial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] rounded-xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8"
          >
            {/* Formulário */}
            <form
              className="flex-1 flex flex-col gap-4"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <span className="text-[#E22E5B] font-bold text-base md:text-lg mb-3">
                Preencha o formulário abaixo
              </span>
              <input
                required
                type="text"
                name="nome"
                placeholder="Nome"
                className="border-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E22E5B] text-[#222]"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="E-mail"
                className="border-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E22E5B] text-[#222]"
              />
              <input
                required
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="border-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E22E5B] text-[#222]"
              />
              <input
                required
                type="text"
                name="empresa"
                placeholder="Nome da Empresa"
                className="border-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E22E5B] text-[#222]"
              />
              <textarea
                required
                name="necessidade"
                placeholder="Descreva a necessidade"
                className="border-2 rounded px-3 py-2 min-h-[96px] focus:outline-none focus:ring-2 focus:ring-[#E22E5B] text-[#222]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#E22E5B] hover:bg-[#db6d89] text-white font-bold py-2 px-8 rounded-lg shadow mt-2 w-32"
              >
                Enviar
              </motion.button>
            </form>

            {/* Espaço para imagem vetorial */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 flex items-center justify-center"
            >
              <img
                src="/contato-ilustracao.svg"
                alt="Pessoa atendendo via computador e smartphone, com ícones de chat, telefone e e-mail"
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Telainicio;