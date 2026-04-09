import { useState } from 'react'
import Navabar from './Components/Navbar'
import './assets/style.css'
import Accueil from './Components/Accuiel'
import Apropos from './Components/Apropos'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Candidature from './Components/Candidature'
import Realisation from './Components/Realisation'
import Services from './Components/Services'
import ServiceDetails from './Components/ServiceDetails'
import Postes from './Postes'

function App() {
  const [count, setCount] = useState(0)

  return (<div className=''>
    <Navabar/>
        <Postes/>
    <Footer/>
  </div>)
}

export default App
