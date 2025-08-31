import Footer from './Footer';
import clientenocentroicon from '../assets/clientenocentro icon.png';
import acessibilidadeicon from '../assets/acessibilidade icon.png';
import capaquemsomos from '../assets/capaquemsomos.png';
import alvomissao from '../assets/alvomissao.png';
import estrelavalores from '../assets/estrelavalores.png';
import Securityicon from '../assets/Security icon.png';
import { CheckCircle, ShieldCheck } from 'lucide-react';



function QuemSomos() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Primeira section conforme protótipo */}
      <section className="flex flex-col md:flex-row items-start w-full pl-1 py-15 px-0 bg-white">
        <div className="flex-1 flex flex-col items-start justify-center max-w-2x1">
          <h1 
            className="text-4xl md:text-5xl font-extrabold text-[#E22E5B] mb-12 leading-tight text-left" 
            style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}
          >
            Produtos de tecnologia e<br />plataforma de telessaúde
          </h1>
          <p className="text-base md:text-lg text-[#9B6B6B] max-w-xl text-left mb-16">
            O <span className="font-bold text-[#E22E5B]">Centro de Cuidado Digital</span> é uma empresa que tem o propósito de integrar ferramentas tecnológicas e de telessaúde ao mercado, criando soluções de alta performance com amplas camadas de segurança, suporte e escalabilidade que transformam o negócio das empresas parceiras.
          </p>
          <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-base md:text-xl  mb-16 font-bold py-3 px-8 md:px-11 rounded-lg shadow-md transition">
            Quero Contratar
          </button>

        </div>
        {/* Imagem conforme protótipo */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img
            src={capaquemsomos}
            alt="Produtos de tecnologia e plataforma de telessaúde"
            className="w-full max-w-[550px] h-auto"
          />
        </div>
      </section>

{/* Seção Missão – full bleed */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-[#E22E5B] mb-12 text-left" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>
      Missão
    </h2>

    <div className="rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-start gap-4 bg-white">
      {/* Ícone */}
      <div className="flex-shrink-0 flex items-start justify-start -mt-2 md:mt-0">
        <img src={alvomissao} alt="missão" className="w-22 h-22 object-contain" />
      </div>

      {/* Texto */}
             <div className="flex-1 flex flex-col gap-8">
         <p className="text-xl text-left text-[#A35E57]">
           Nossa missão é cuidar e atender os nossos parceiros de maneira ágil e com qualidade, promovendo geração de valor
           ao seu negócio e construindo um relacionamento de confiança e excelência. Estamos sempre alinhados as melhores práticas de mercado e com produtos e tecnologia de ponta pra gerar valor estratégico aos nossos parceiros.
         </p>
         <p className="text-xl text-left text-[#A35E57]">
           Agregado a nossa <b>missão,</b>  impulsionamos a plataforma de telessaúde <b>Mediquo</b>  com pronto atendimento 24h e multiplas especialidades com a finalidade de cuidarmos dos nossos parceiros e dependentes.
          
         </p>
         <p className="text-xl text-left text-[#A35E57]">
           E por fim, demais serviços que disponibilizamos, estão alinhados a nossa missão de gerar valor e crescimento ao mercado de maneira séria e responsável.
         </p>

        <div className="flex justify-end mt-0">
        </div>
      </div>
    </div>
  </div>
</section>

{/* Seção Valores – full bleed */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#F8EFEA] py-8">
  <div className="max-w-6xl mx-auto px-6 flex flex-col">
    <h2 className="text-4xl font-extrabold text-left text-[#E22E5B] mb-12" style={{fontFamily:  "'Open Sans', 'Montserrat','Poppins', 'bold'"}}>
      Valores
    </h2>

         <p className="text-xl text-[#9B6B6B] text-left mb-20">
       O Centro de Cuidado Digital possui valores sólidos para ofertar e atender nossos parceiros de forma dedicada e ágil, prezando qualidade e eficiência nos serviços e produtos que ofertamos.
     </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-48  gap-y-24 max-w-6xl mx-auto">
       {/* Valor 1 */}
       <div className="flex flex-col items-center text-center gap-10">
         <img src={clientenocentroicon} alt="Cliente no centro" className="w-16 h-16 object-contain" />
         <span className="font-bold text-lg text-[#A35E57]">Cliente no centro</span>
       </div>

       {/* Valor 2 */}
       <div className="flex flex-col items-center text-center gap-10">
         <img src={estrelavalores} alt="Excelência no atendimento" className="w-16 h-16object-contain" />
         <span className="font-bold text-lg text-[#A35E57]">
           Excelência no <br /> atendimento
         </span>
       </div>

       {/* Valor 3 */}
       <div className="flex flex-col items-center text-center gap-10">
          <img src={acessibilidadeicon} alt="Acessibilidade" className="w-16 h-16 object-contain" />
         <span className="font-bold text-lg text-[#A35E57]">
           Acessibilidade de forma escalável
         </span>
       </div>

       {/* Valor 4 */}
       <div className="flex flex-col items-center text-center gap-10">
           <img src={Securityicon} alt="Acessibilidade" className="w-16 h-16 object-contain" />
         <span className="font-bold text-lg text-[#A35E57] mb-20">
           Responsabilidade e <br /> privacidade
         </span>
       </div>

       {/* Valor 5 */}
       <div className="flex flex-col items-center text-center gap-10">
         <CheckCircle className="w-16 h-16 text-[#E22E5B]" />
         <span className="font-bold text-lg text-[#A35E57]">
           Confiabilidade e <br /> transparência
         </span>
       </div>

       {/* Valor 6 */}
       <div className="flex flex-col items-center text-center gap-10">
         <ShieldCheck className="w-16 h-16 text-[#E22E5B]" />
         <span className="font-bold text-lg text-[#A35E57]">
           Pilares em tecnologia <br /> e segurança
         </span>
       </div>
     </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default QuemSomos;

