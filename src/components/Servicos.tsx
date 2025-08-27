import Footer from './Footer';

function Servicos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Primeira seção conforme protótipo */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-25 gap-10 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] text-left mb-6 leading-tight">
            Serviços de tecnologia e infraestrutura para o seu negócio.
          </h1>
          <p className="text-base md:text-lg text-left text-[#A35E57] mb-4 max-w-2xl">
            O <span className="font-bold text-left text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que oferece um portfólio sólido de serviços em tecnologia e consultoria em diversos segmentos estruturados para atender de forma estratégica às necessidades do seu negócio.
          </p>
          <p className="text-base md:text-lg text-[#E22E5B] font-semibold">
            Saiba mais sobre os nossos serviços abaixo:
          </p>
        </div>
        
        {/* Ícone de nuvem e servidor */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Padrão de fundo pontilhado sutil */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, #9B6B6B 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Ícone de nuvem e servidor */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Nuvem */}
              <div className="w-24 h-16 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-12 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
              </div>
              
              {/* Stack de servidores */}
              <div className="flex flex-col gap-2">
                {/* Servidor 1 */}
                <div className="w-32 h-8 bg-blue-600 rounded flex items-center justify-between px-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-blue-300 rounded"></div>
                    <div className="w-1 h-4 bg-blue-300 rounded"></div>
                  </div>
                </div>
                
                {/* Servidor 2 */}
                <div className="w-32 h-8 bg-blue-600 rounded flex items-center justify-between px-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-blue-300 rounded"></div>
                    <div className="w-1 h-4 bg-blue-300 rounded"></div>
                  </div>
                </div>
                
                {/* Servidor 3 */}
                <div className="w-32 h-8 bg-blue-600 rounded flex items-center justify-between px-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-blue-300 rounded"></div>
                    <div className="w-1 h-4 bg-blue-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção: Soluções por segmentos */}
      <section className="w-full px-6 md:px-16 py-14 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl text-left font-bold text-[#E95470] mb-4">
              Soluções por segmentos
            </h2>
            <p className="text-base text-left text-[#A35E57] max-w-4xl">
              Ofertamos tecnologia assertiva para impulsionar o negócio dos nossos parceiros em diversos segmentos.
            </p>
          </div>

          {/* Grid de cards de soluções */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card 1: Outsourcing de TI */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                  {/* Ícone de outsourcing - engrenagem */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E95470]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#A35E57] mb-3 text-center">
                  Outsourcing de TI
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Descrever solução
                </p>
              </div>
            </div>

            {/* Card 2: Identidade visual & branding */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 mb-2 flex font-bold items-center justify-center">
                  {/* Ícone de identidade visual - formas coloridas */}
                  <div className="relative w-10 h-10">
                    <div className="absolute top-0 left-0 w-6 h-6 bg-purple-400 rounded-full opacity-80"></div>
                    <div className="absolute top-2 right-0 w-5 h-5 bg-orange-400 rounded-full opacity-80"></div>
                    <div className="absolute bottom-0 left-2 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#A35E57] mb-3 text-center">
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
                <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                  {/* Ícone de desenvolvimento */}
                  <div className="relative">
                    <div className="w-8 h-6 bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-600">
                      &lt;/&gt;
                    </div>
                  </div>
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Desenvolvimento de sites e plataformas
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Sites e plataformas responsivas e seguras alinhados ao seu modelo de negócio e identidade visual.
                </p>
              </div>
            </div>

            {/* Card 4: Infraestrutura de câmeras (CFTV) */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                  {/* Ícone de câmera CFTV */}
                  <div className="relative">
                    <div className="w-8 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-3 bg-gray-600 rounded"></div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-800 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl text-[#A35E57] font-bold mb-3 text-center">
                  Infraestrutura de câmeras (CFTV)
                </h3>
                <p className="text-[#A35E57] mb-6 text-center">
                  Centrais de monitoramento de ambientes internos e/ou externos, instalação de redes CFTV e configuração de DVR's utilizando sistemas da intelbras local e/ou em nuvem.
                </p>
              </div>
            </div>

            {/* Card 5: Infraestrutura de redes */}
            <div className="bg-#F8EFEA rounded-lg shadow-md p-10 flex flex-col h-full">
              <div className="flex-1">
                <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                  {/* Ícone de rede/cloud */}
                  <div className="relative">
                    <div className="w-8 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                      <div className="flex flex-col gap-0.5">
                        <div className="w-4 h-0.5 bg-white rounded"></div>
                        <div className="w-4 h-0.5 bg-white rounded"></div>
                        <div className="w-4 h-0.5 bg-white rounded"></div>
                      </div>
                    </div>
                  </div>
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
                <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                  {/* Ícone de gráfico de linha */}
                  <div className="relative w-8 h-6">
                    <svg className="w-full h-full" viewBox="0 0 32 24" fill="none">
                      <path d="M2 20 L8 16 L14 18 L20 12 L26 14 L30 8" stroke="#E95470" strokeWidth="2" fill="none"/>
                      <path d="M2 20 L8 16 L14 18 L20 12 L26 14 L30 8 L30 20 L2 20 Z" fill="#E95470" fillOpacity="0.1"/>
                    </svg>
                  </div>
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
