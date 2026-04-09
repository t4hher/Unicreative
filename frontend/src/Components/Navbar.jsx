import { Link } from "react-router-dom";

export default function Navabar(){
    return <div>
        <nav class="navbar">
            <div class="logo">
                <img src="/LOGO.png" alt="Accueil"/>
            </div>

            <ul class="nav-links">
                <li><Link to="/" class="active">Accueil</Link></li>
                <li><Link to="/services">Nos Services</Link></li>
                <li><Link to="/realisations">Nos Réalisations</Link></li>
                <li><Link to="/candidature">Candidature</Link></li>
                <li><Link to="/aPropos">A Propos</Link></li>
            </ul>

            <div class="nav-cta">
                <a href="#" class="btn-contact">Contact Us</a>
            </div>
        </nav>
    </div>
}