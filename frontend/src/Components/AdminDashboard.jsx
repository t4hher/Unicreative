import { Link } from "react-router-dom";

export default function AdminDashboard(){
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Dashboard</h1>
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
            <h3>Réalisations</h3>
            <div className="tableDash">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th className="">Colonne 1</th>
                            <th>Colonne 2</th>
                            <th>Colonne 3</th>
                            <th>Colonne 4</th>
                            <th>Colonne 5</th>
                            <th>Colonne 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            <h3>Offres</h3>
            <div className="tableDash">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th className="">Colonne 1</th>
                            <th>Colonne 2</th>
                            <th>Colonne 3</th>
                            <th>Colonne 4</th>
                            <th>Colonne 5</th>
                            <th>Colonne 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                            <td>lorem</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
}