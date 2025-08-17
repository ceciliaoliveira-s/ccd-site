import { useState } from 'react'
import reactLogo from './assets/Logo navbar.png'
import './App.css'
import Navbar from "./components/Navbar"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar /> 
<main className="flex flex-col items-start max-w-4xl mt-2 px-4 ml-1">        
  <h1 className="text-5xl font-extrabold text-[#E22E5B] leading-tight mb-6 text-left" style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}>
  Tecnologia e telessaúde<br />
  integrados promovendo<br />
  impacto de negócio.
</h1>
<p className="text-lg text-[#9B6B6B] mb-10 max-w-2xl text-left" style={{ fontFamily: "'Open Sans', 'Montserrat', 'Poppins', sans-serif" }}>
  Soluções em serviços de tecnologia e plataformas de telessaúde com recurso escalável, seguro e acessível proporcionando crescimento de negócio aos nossos parceiros.
</p>
        <button className="bg-[#E22E5B] hover:bg-[#db6d89] text-white text-lg font-bold py-3 px-10 rounded-lg shadow-md transition">
          Quero Contratar
        </button>
      </main>
    </>
  )
}

export default App