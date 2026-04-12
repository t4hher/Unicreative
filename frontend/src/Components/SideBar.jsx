import { Link, useLocation } from "react-router-dom";

export default function SideBar(){
  const location= useLocation();
  const isActive = (path) => location.pathname.includes(path);
    return <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/LOGO.png" alt="Oulmes Stock" className="logo" />
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li>
            <Link to="/admin/dashboard" className={isActive('dashboard') ? 'nav-link active' : 'nav-link'}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/services" className={isActive('services') ? 'nav-link active' : 'nav-link'}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/admin/realisations" className={isActive('realisations') ? 'nav-link active' : 'nav-link'}>
              Réalisations
            </Link>
          </li>
          <li>
            <Link to="/admin/offres" className={isActive('offres') ? 'nav-link active' : 'nav-link'}>
              Offres de Recrutement
            </Link>
          </li>
          <li>
            <Link to="/admin/demandes" className={isActive('demande') ? 'nav-link active' : 'nav-link'}>
              Demandes
            </Link>
          </li>
          <li>
            <Link to="/admin/messages" className={isActive('message') ? 'nav-link active' : 'nav-link'}>
              Messages
            </Link>
          </li>
          <li>
            <Link to="/admin/candidatures" className={isActive('candidature') ? 'nav-link active' : 'nav-link'}>
              Candidatures
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn">
          <span className="icon">↩</span> Déconnexion
        </button>
      </div>
    </aside>
}