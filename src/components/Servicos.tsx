import Footer from './Footer';
import devsiteicon from '../assets/devsiteicon.png';
import infracftvicon from '../assets/infracftvicon.png';
import infraderedesicon from '../assets/infraderedesicon.png';
import anlsdadosicon from '../assets/anlsdadosicon.png';
import brandingicon from '../assets/brandingicon.png';

function Servicos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Primeira seção conforme protótipo */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-15 gap-10 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] text-left mb-6 leading-tight" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}> 
            Serviços de tecnologia e infraestrutura para o seu negócio.
          </h1>
          <p className="text-base md:text-lg text-left text-[#A35E57] mb-4 max-w-2xl">
            O <span className="font-bold text-left text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que oferece um portfólio sólido de serviços em tecnologia e consultoria em diversos segmentos estruturados para atender de forma estratégica às necessidades do seu negócio.
          </p>
          <p className="text-base md:text-lg text-[#E22E5B] md-12 font-semibold mb-12">
            Saiba mais sobre os nossos serviços abaixo:
          </p>
          <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl mb-4 font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition">
            Quero Contratar
          </button>
        </div>
      </section>

      {/* Nova seção: Soluções por segmentos */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl text-left font-bold text-[#E95470] mb-4" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>
              Soluções por segmentos
            </h2>
            <p className="text-base text-left text-[#A35E57] max-w-4xl">
              Ofertamos tecnologia assertiva para impulsionar o negócio dos nossos parceiros em diversos segmentos.
            </p>
          </div>

          {/* Grid de cards de soluções */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1: Outsourcing de TI */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                {/* <div className="w-14 h-14 mb-4 flex items-center justify-center mx-auto">
                  <img src={outsourcingicon} alt="Outsourcing de TI" className="w-12 h-12 object-contain" />
                </div> */}
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Outsourcing de TI
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  *Descrever solução*
                </p>
              </div>
            </div>

            {/* Card 2: Identidade visual & branding */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-14 h-14 mb-4 flex items-center justify-center mx-auto">
                  <img src={brandingicon} alt="Identidade visual & branding" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Identidade visual & branding
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Crie uma marca única com design e estratégia alinhados ao propósito de sua empresa.
                </p>
              </div>
            </div>

            {/* Card 3: Desenvolvimento de Sites e plataformas */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-14 h-14 mb-4 flex items-center justify-center mx-auto">
                  <img src={devsiteicon} alt="Desenvolvimento de Sites e plataformas" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Desenvolvimento de sites <br /> e plataformas
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Sites e plataformas responsivas e seguras alinhados ao seu modelo de negócio e identidade visual.
                </p>
              </div>
            </div>

            {/* Card 4: Infraestrutura de câmeras (CFTV) */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-14 h-14 mb-4 flex items-center justify-center mx-auto">
                  <img src={infracftvicon} alt="Infraestrutura de câmeras (CFTV)" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Infraestrutura de câmeras <br /> (CFTV)
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Centrais de monitoramento de ambientes internos e/ou externos, instalação de redes CFTV e configuração de DVR's utilizando sistemas da intelbras local e/ou em nuvem.
                </p>
                <div className="flex justify-center">
                </div>
              </div>
            </div>

            {/* Card 5: Infraestrutura de redes */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-14 h-14 mb-4 flex items-center justify-center mx-auto">
                  <img src={infraderedesicon} alt="Infraestrutura de redes" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Infraestrutura de redes
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Planejamento e implantação de projetos de redes de computadores, contendo estruturas como: Cabeamento, switches, roteadores, firewalls e protocolos na camada de enlace e de rede.
                </p>
              </div>
            </div>

            {/* Card 6: Análise de dados */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-14 h-14 mb-4 flex items-center justify-center mx-auto">
                  <img src={anlsdadosicon} alt="Análise de dados" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Análise de dados
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Transforme informações em decisões estratégicas com dashboards e relatórios inteligentes para definições assertivas junto ao seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Servicos;
