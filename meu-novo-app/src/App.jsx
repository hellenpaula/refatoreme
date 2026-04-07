import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components:
import Header from './components/Header/Header.jsx'

// import SectionHome from './components/principal/SectionHome/SectionHome.jsx'
import Home from './pages/home/Home.jsx'

// import SectionCards from './components/principal/SectionCards/SectionCards.jsx'
import Servico from './pages/servicos/Servicos.jsx'

// import SectionPlanos from './components/principal/SectionCardsPlanos/SectionPlanos.jsx'
import Plano from './pages/planos/Planos.jsx'


import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
      <Header />
      <Routes>
     
        <Route path='/home' element={<Home />}/>
        <Route path='/servicos' element={<Servico />}/>
        <Route path='/planos' element={<Plano />} />
        
        {/* estrutura anterior */}
          {/* <SectionHome />
          <SectionCards />
          <SectionPlanos /> */}
      
      </Routes>
      <Footer />
    </Router>
    </div>
    
  )
}

export default App
