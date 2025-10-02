import Footer from './Footer';
import devsiteicon from '../assets/devsiteicon.png';
import infracftvicon from '../assets/infracftvicon.png';
import infraderedesicon from '../assets/infraderedesicon.png';
import anlsdadosicon2 from '../assets/anlsdadosicon2.png';
import brandingicon from '../assets/brandingicon.png';
import capaservicos3 from '../assets/capaservicos3.png';
import imgdados from '../assets/imgdados.png';
import { motion } from "framer-motion";



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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] text-left mb-6 leading-tight"
            style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}
          >
            Serviços de tecnologia e infraestrutura para o seu negócio.
          </motion.h1>

          {/* Parágrafo 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base md:text-lg text-left text-[#A35E57] mb-4 max-w-2xl"
          >
            O <span className="font-bold text-left text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que oferece um portfólio sólido com serviços de tecnologia em diversos segmentos para atender de forma estratégica às necessidades do seu negócio.
          </motion.p>

          {/* Parágrafo 2 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg text-[#E22E5B] md-12 font-semibold mb-12"
          >
            Saiba mais sobre os nossos serviços abaixo:
          </motion.p>

          {/* Botão */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(226,46,91,0.4)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 5, duration: 1.5 }}
            className="inline-flex"
          >
            <a
              href="https://wa.me/5581991945061?text=Olá! Gostaria de mais informações sobre os serviços de tecnologia."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl font-bold py-3 px-8 md:px-11 rounded-lg transition flex items-center justify-center"
              style={{ textDecoration: 'none', color: '#fff', boxShadow: 'none', marginBottom: 0 }}
            >
              <span style={{ color: '#fff', width: '100%' }}>Quero Contratar</span>
            </a>
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
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


      {/* Nova seção: Soluções por segmentos (layout fiel ao protótipo) */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Header da seção */}
          <div className="w-full md:w-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#E22E5B] mb-8 text-left"  style={{ fontFamily: "'Open Sans', 'Montserrat','Poppins', 'bold'" }}>
              Soluções por segmentos
            </h2>
            <p className="text-base md:text-lg text-[#A35E57] mb-10 md:mb-14 text-left leading-relaxed w-full" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif", color: '#A35E57' }}>
              Oferecemos soluções tecnológicas assertivas e personalizadas, desenvolvidas para impulsionar o crescimento e a eficiência dos negócios dos nossos parceiros. Atuamos em diversos segmentos, com foco em inovação, performance e resultados reais.
            </p>
          </div>

          {/* Grid 2x2 + 1 grande (ajustado para o protótipo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card 1: Identidade visual & branding */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="bg-[#F8EFEA] rounded-2xl shadow-lg p-8 flex flex-col items-center min-h-[240px] max-w-full"
            >
              <img src={brandingicon} alt="Identidade visual & branding" className="w-14 h-14 mb-4" />
              <span className="text-lg md:text-xl font-bold text-[#E22E5B] mb-6 text-center" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Identidade visual & branding
              </span>
              <p className="text-sm text-[#A35E57] text-center mt-2" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Criamos identidades visuais únicas e estratégicas que fortalecem a presença da sua empresa no mercado. Do logotipo às cores, da tipografia ao tom de escrita, cada detalhe é pensado para transmitir os valores do seu negócio e conectar o seu público.
              </p>
            </motion.div>

            {/* Card 2: Desenvolvimento de sites e plataformas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#F8EFEA] rounded-2xl shadow-lg p-8 flex flex-col items-center min-h-[240px] max-w-full"
            >
              <img src={devsiteicon} alt="Desenvolvimento de sites e plataformas" className="w-14 h-14 mb-4" />
              <span className="text-lg md:text-xl font-bold text-[#E22E5B] mb-6 text-center" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Desenvolvimento de sites e plataformas
              </span>
              <p className="text-sm text-[#A35E57] text-align mt-2" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Criamos sites e plataformas modernas, rápidas e responsivas, que valorizam a identidade da sua marca e oferecem excelente experiência para os seus clientes. Do institucional ao e-commerce, entregamos soluções de qualidade e robustas.
              </p>
            </motion.div>

            {/* Card 3: Infraestrutura de câmeras (CFTV) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#F8EFEA] rounded-2xl shadow-lg p-8 flex flex-col items-center min-h-[240px] max-w-full"
            >
              <img src={infracftvicon} alt="Infraestrutura de câmeras (CFTV)" className="w-14 h-14 mb-4" />
              <span className="text-lg md:text-xl font-bold text-[#E22E5B] mb-2 text-center" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Infraestrutura de câmeras <span className="block md:inline"> <br />(CFTV)</span>
              </span>
              <p className="text-sm text-[#A35E57] text-justified mt-2" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Implementamos centrais de monitoramento para ambientes internos e externos, com instalação completa de redes de CFTV e configuração de DVRs. Trabalhamos com sistemas locais e/ou em nuvem, garantindo segurança, confiabilidade e acesso às imagens em tempo real.
              </p>
            </motion.div>

            {/* Card 4: Infraestrutura de redes */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#F8EFEA] rounded-2xl shadow-lg p-8 flex flex-col items-center min-h-[240px] max-w-full"
            >
              <img src={infraderedesicon} alt="Infraestrutura de redes" className="w-14 h-14 mb-4" />
              <span className="text-lg md:text-xl font-bold text-[#E22E5B] mb-7 text-center" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Infraestrutura de redes
              </span>
              <p className="text-sm text-[#A35E57] text-justified mt-2" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Planejamento e implantação de projetos de redes de computadores, incluindo cabeamento estruturado, configuração de switches, roteadores e firewalls. Atuamos também na definição e aplicação de protocolos nas camadas de enlace e de rede, garantindo desempenho, segurança e escalabilidade para o seu ambiente.
              </p>
            </motion.div>
          </div>

          {/* Card grande: Análise e inteligência de dados (layout fiel ao protótipo) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#F8EFEA] rounded-2xl shadow-lg px-8 py-12 flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-0 max-w-full"
            style={{boxShadow: '0 8px 32px 0 #E954701A'}}
          >
            {/* Bloco texto */}
            <div className="flex flex-col justify-center md:justify-start flex-1 md:pl-4 md:pr-8 py-2 md:py-0">
              <div className="flex items-center mb-12">
                <img src={anlsdadosicon2} alt="Ícone análise de dados" className="w-8 h-8 mr-4" />
                <span className="text-2xl md:text-2xl font-extrabold text-[#E22E5B] text-left" style={{ fontFamily: "'Montserrat', 'Poppins', 'Open Sans', sans-serif" }}>
                  Análise e inteligência de dados
                </span>
              </div>
              <p className="text-base text-[#A35E57] mb-12 text-left" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Transforme dados em insights valiosos! Criamos dashboards e relatórios inteligentes que traduzem informações em decisões estratégicas, ajudando sua empresa a agir com mais precisão, agilidade e segurança.
              </p>
              <p className="text-base text-[#A35E57] text-left" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>
                Nossa solução em análise de dados permite consolidar informações de diferentes fontes em dashboards interativos e relatórios avançados. Aplicamos metodologias de Business Intelligence (BI) e Data Analytics para transformar dados brutos em insights estratégicos, garantindo maior precisão na tomada de decisões, identificação de oportunidades e mitigação de riscos. Tudo isso com segurança, escalabilidade e tecnologia de ponta.
              </p>
            </div>
            {/* Imagem à direita */}
            <div className="flex-shrink-0 flex items-end md:items-end justify-center md:justify-end w-full md:w-[340px] mt-6 md:mt-0">
              <img src={imgdados} alt="Ilustração análise de dados" className="w-[260px] md:w-[300px] h-auto object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Servicos;
