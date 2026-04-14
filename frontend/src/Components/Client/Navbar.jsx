import { Link, useLocation } from "react-router-dom";

export default function Navabar(){
    const location= useLocation();
    const isActiveA = (path) => location.pathname===path;
    const isActive = (path) => location.pathname.includes(path);
    return <div>
        <nav class="navbar">
            <div class="logo">
                <img src="/LOGO.png" alt="Accueil"/>
            </div>

            <ul class="nav-links">
                <li><Link to="/" className={isActiveA('/') ? 'active' : ''}>Accueil</Link></li>
                <li><Link to="/services" className={isActive('service') ? 'active' : ''}>Nos Services</Link></li>
                <li><Link to="/realisations" className={isActive('realisation') ? 'active' : ''}>Nos Réalisations</Link></li>
                <li><Link to="/candidature" className={isActive('candidature') ? 'active' : ''}>Candidature</Link></li>
                <li><Link to="/aPropos" className={isActive('aPropos') ? 'active' : ''}>A Propos</Link></li>
            </ul>

            <div class="nav-cta">
                <Link to="/contact" class="btn-contact">Contact Us</Link>
            </div>
        </nav>
    </div>
}