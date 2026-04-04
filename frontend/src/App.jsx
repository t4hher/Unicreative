import { useState } from 'react'
import Navabar from './Components/Navbar'
import './assets/style.css'
import Accueil from './Components/Accuiel'
import Apropos from './Components/Apropos'
import Login from './Components/Login'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (<div className=''>
    <Navabar/>
        <Apropos/>
    <Footer/>
  </div>)
}

export default App
