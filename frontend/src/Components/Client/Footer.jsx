import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer">
            <div className="contact">
                <img src="/LOGO.png"/>
                <div className="icons">
                    <a href="#">
                        <img className="icon" src="https://img.icons8.com/?size=100&id=1CJh8Xrdz1R2&format=png&color=2c265f"/>
                    </a>
                    <a href="#">
                        <img className="icon" src="https://img.icons8.com/?size=100&id=97E7Dm8qCE2w&format=png&color=2c265f"/>
                    </a>
                    <a href="#">
                        <img className="icon" src="https://img.icons8.com/?size=100&id=BRElTmOLC6Bh&format=png&color=2c265f"/>
                    </a>
                    <a href="#">
                        <img className="icon" src="https://img.icons8.com/?size=100&id=Aq10GU126KJX&format=png&color=2c265f"/>
                    </a>
                </div >
            </div>
            <div className="links">
                <Link to="/services" className="link">Nos services</Link>
                <Link to="/realisations" className="link">Nos Réalisations</Link>
                <Link to="/candidature" className="link">Candidature</Link>
                <Link to="/aPropos" className="link">A Propos</Link>
            </div>

        </div>
    )
}
