import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navabar from './Components/Client/Navbar'
import './assets/style.css'
import Accueil from './Components/Client/Accuiel'
import Apropos from './Components/Client/Apropos'
import Login from './Components/Admin/Login'
import Footer from './Components/Client/Footer'
import Candidature from './Components/Client/Candidature'
import Realisation from './Components/Client/Realisation'
import Services from './Components/Client/Services'
import Poste from './Components/Client/Poste'
import WebDetails from './Components/Client/ServiceDetails/WebDetails'
import DesignDetails from './Components/Client/ServiceDetails/DesignDetails'
import PrintDetails from './Components/Client/ServiceDetails/PrintDetails'
import AppDetails from './Components/Client/ServiceDetails/AppDetails'
import D3dDetails from './Components/Client/ServiceDetails/D3dDetails'
import EventDetails from './Components/Client/ServiceDetails/EventDetails'
import Demande from './Components/Client/Demande';
import Contact from './Components/Client/Contact';
import ClientLayout from './Components/Client/ClientLayout';
import AdminLayout from './Components/Admin/AdminLayout';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminServices from './Components/Admin/Services/AdminServices';
import AdminRealisation from './Components/Admin/Realisations/AdminRealisation';
import AdminOffre from './Components/Admin/Offre/AdminOffre';
import AdminDemande from './Components/Admin/Demande/AdminDemande';
import AdminMessage from './Components/Admin/Message/AdminMessage';
import AdminCandi from './Components/Admin//Candidature/AdminCandi';
import { Provider } from 'react-redux';
import { store } from './Store/Store'
import ServiceAdd from './Components/Admin/Services/ServiceAdd';
import ServiceEdit from './Components/Admin/Services/ServiceEdit';
import RealisationAdd from './Components/Admin/Realisations/RealisationAdd';
import OffreAdd from './Components/Admin/Offre/OffreAdd';
import DemandeShow from './Components/Admin/Demande/DemandeShow';
import MessageShow from './Components/Admin/Message/MessageShow';
import CandiShow from './Components/Admin/Candidature/CandiShow';
import RealiEdit from './Components/Admin/Realisations/RealiEdit';
import OffreEdit from './Components/Admin/Offre/OffreEdit';

function App() {
  const [count, setCount] = useState(0)

  return (<Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<ClientLayout/>}>
          <Route path='/' element={<Accueil/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/realisations' element={<Realisation/>}></Route>
          <Route path='/candidature' element={<Candidature/>}></Route>
          <Route path='/aPropos' element={<Apropos/>}></Route>
          <Route path='/services/site-web' element={<WebDetails/>}></Route>
          <Route path='/services/design' element={<DesignDetails/>}></Route>
          <Route path='/services/print' element={<PrintDetails/>}></Route>
          <Route path='/services/application' element={<AppDetails/>}></Route>
          <Route path='/services/3d' element={<D3dDetails/>}></Route>
          <Route path='/services/event' element={<EventDetails/>}></Route>
          <Route path='/postuler/candidature/:id' element={<Poste/>}></Route>
          <Route path='/demande/service' element={<Demande/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route path='services' element={<AdminServices/>}/>
          <Route path='services/add' element={<ServiceAdd/>}/>
          <Route path='realisations' element={<AdminRealisation/>}/>
          <Route path='realisations/add' element={<RealisationAdd/>}/>
          <Route path='offres' element={<AdminOffre/>}/>
          <Route path='offres/add' element={<OffreAdd/>}/>
          <Route path='demandes' element={<AdminDemande/>}/>
          <Route path='demandes/show/:id' element={<DemandeShow/>}/>
          <Route path='messages' element={<AdminMessage/>}/>
          <Route path='messages/show/:id' element={<MessageShow/>}/>
          <Route path='candidatures' element={<AdminCandi/>}/>
          <Route path='candidatures/show/:id' element={<CandiShow/>}/>
          <Route path='services/edit/:id' element={<ServiceEdit/>}/>
          <Route path='realisations/edit/:id' element={<RealiEdit/>}/>
          <Route path='offres/edit/:id' element={<OffreEdit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>)
}

export default App
