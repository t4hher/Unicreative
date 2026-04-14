import { Link } from "react-router-dom";

export default function AdminCandi(){
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Candidatures</h1>
            <div className="adminFilter">
                <div className="">
                    <input type="text" className="form-control" placeholder="Chercher"/>
                </div>
                <span> | </span>
                <div className="adminFilterBtn">
                    <a href="#" className="active">Tous</a>
                    <a href="#">Non Lues</a>
                    <a href="#">Lues</a>
                </div> 
            </div>
        </div>
        <div className="dash-body">
            <div className="grid">
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
                <div className="box">
                    <h4>Nom et Prénom</h4>
                    <p>Titre de l'offre</p>
                    <span><b>Email: </b> text@example.com</span>
                    <span><b>Tel: </b> 06 00 00 00 00</span>
                </div>
            </div>
        </div>
    </div>
}