import { Link } from "react-router-dom";

export default function AdminOffre(){
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Offres de Recrutement</h1>
            <div className="btns">
                <Link className="btn s">✚ Ajouter Offre</Link>
            </div>
        </div>
        <div className="dash-body">
            <div className="tableSer">
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