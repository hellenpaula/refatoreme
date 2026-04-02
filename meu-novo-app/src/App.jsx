import { useState } from 'react'
import './App.css'

// components:
import Header from './components/Header/Header.jsx'
import SectionHome from './components/SectionHome/SectionHome.jsx'
import SectionCards from './components/SectionCards/SectionCards.jsx'
import SectionPlanos from './components/SectionCardsPlanos/SectionPlanos.jsx'


import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <main className="SectionContainer">
          <SectionHome />
          <SectionCards />
          <SectionPlanos />
      </main>

      <Footer />
    </div>
    
  )
}

export default App
