import { useState } from 'react'
import './App.css'

// components:
import Header from './components/Header.jsx'
import SectionHome from './components/SectionHome.jsx'
import SectionCards from './components/SectionCards.jsx'
import SectionPlanos from './components/SectionPlanos.jsx'


import Footer from './components/Footer.jsx'

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
