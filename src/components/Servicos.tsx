import Footer from './Footer';

function Servicos() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Primeira seção conforme protótipo */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14 gap-10 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-6 leading-tight">
            Serviços de tecnologia e<br />
            infraestrutura para o seu<br />
            negócio
          </h1>
          <p className="text-base md:text-lg text-[#9B6B6B] mb-4 max-w-2xl">
            O <span className="font-bold text-[#E22E5B]">CCD</span> é uma empresa que oferece um portfólio sólido de serviços em tecnologia e consultoria em diversos segmentos estruturados para atender de forma estratégica às necessidades do seu negócio.
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

      <Footer />
    </div>
  );
}

export default Servicos;
