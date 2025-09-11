import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Telainicio from './components/Telainicio';
import Navbar from "./components/Navbar";
import QuemSomos from "./components/Quemsomos";
import NossasSolucoes from "./components/NossasSolucoes";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade";
import Produtos from "./components/Produtos";
import Servicos from "./components/Servicos";
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Telainicio />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/nossas-solucoes" element={<NossasSolucoes />} />
          <Route path="/nossas-solucoes/produtos" element={<Produtos />} />
          <Route path="/nossas-solucoes/servicos" element={<Servicos />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;