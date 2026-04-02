import { useState } from 'react'
import Navabar from './Components/Navbar'
import './assets/style.css'
import Accueil from './Components/Accuiel'

function App() {
  const [count, setCount] = useState(0)

  return (<div className=''>
    <Navabar/>
    <Accueil/>
  </div>)
}

export default App
