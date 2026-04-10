import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navabar from './Components/Navbar'
import './assets/style.css'
import Accueil from './Components/Accuiel'
import Apropos from './Components/Apropos'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Candidature from './Components/Candidature'
import Realisation from './Components/Realisation'
import Services from './Components/Services'
import Poste from './Components/Poste'
import WebDetails from './Components/ServiceDetails/WebDetails'
import DesignDetails from './Components/ServiceDetails/DesignDetails'
import PrintDetails from './Components/ServiceDetails/PrintDetails'
import AppDetails from './Components/ServiceDetails/AppDetails'
import D3dDetails from './Components/ServiceDetails/D3dDetails'
import EventDetails from './Components/ServiceDetails/EventDetails'
import Demande from './Components/Demande';
import Contact from './Components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (<div className=''>
    <BrowserRouter>
    <Navabar/>
        <Routes>
          <Route path='/' element={<Accueil/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/realisations' element={<Realisation/>}></Route>
          <Route path='/candidature' element={<Candidature/>}></Route>
          <Route path='/aPropos' element={<Apropos/>}></Route>
          <Route path='/demande' element={<Demande/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

          {/* Les details des services */}

          <Route path='/services/site-web' element={<WebDetails/>}></Route>
          <Route path='/services/design' element={<DesignDetails/>}></Route>
          <Route path='/services/print' element={<PrintDetails/>}></Route>
          <Route path='/services/application' element={<AppDetails/>}></Route>
          <Route path='/services/3d' element={<D3dDetails/>}></Route>
          <Route path='/services/event' element={<EventDetails/>}></Route>

          {/* Les postes pour postuler */}

          <Route path='/postuler' element={<Poste/>}></Route>
        </Routes>
    <Footer/>
    </BrowserRouter>
  </div>)
}

export default App
