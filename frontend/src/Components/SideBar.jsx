import { Link } from "react-router-dom";

export default function SideBar(){
    return <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/LOGO.png" alt="Oulmes Stock" className="logo" />
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li>
            <Link to="/admin" className="nav-link active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/factures" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/admin/commandes" className="nav-link">
              Offres de Recrutement
            </Link>
          </li>
          <li>
            <Link to="/admin/clients" className="nav-link">
              Demandes
            </Link>
          </li>
          <li>
            <Link to="/admin/produits" className="nav-link">
              Messages
            </Link>
          </li>
          <li>
            <Link to="/admin/categories" className="nav-link">
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