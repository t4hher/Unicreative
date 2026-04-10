import { Link } from "react-router-dom";

export default function DashboardHome(){
    return <div className="dashboard">
        <div className="dash-header">
            <h2>Dashboard</h2>
            <div className="btns">
                <Link className="btn s">✚ Ajouter Service</Link>
                <Link className="btn">✚ Ajouter Offre de Recrutement</Link>
            </div>
        </div>
        <div className="dash-body">
            <div className="firstline">
                <div className="nonlues">
                    <div>
                        <h5>Messages non-lues</h5>
                        <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                    </div>
                    <span>10</span>
                </div>
                <div className="nonlues">
                    <div>
                        <h5>Demandes non-lues</h5>
                        <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                    </div>
                    <span>10</span>
                </div>
                <div className="nonlues">
                    <div>
                        <h5>Candidatures non-lues</h5>
                        <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                    </div>
                    <span>10</span>
                </div>
            </div>
        </div>
    </div>
}