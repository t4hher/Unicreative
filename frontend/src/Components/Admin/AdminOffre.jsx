import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOffres } from "../../Store/ContentSlice";

export default function AdminOffre(){

    const offres = useSelector((state) => state.content.offres || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOffres());
    }, [dispatch]);
    console.log(offres)
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
                            <th className="">#</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Type de Contrat</th>
                            <th>Profile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offres.map((offre)=>
                            <tr key={offre.id}>
                                <td><b>{offre.id}</b></td>
                                <td>{offre.titre}</td>
                                <td>{offre.description.length>20 ? offre.description.substring(0, 20) + "..." : offre.description}</td>
                                <td>{offre.typeContrat}</td>
                                <td>{offre.profil}</td>
                                <td>
                                    <button className="btn btn-sm btn-success">Modifier</button>
                                    <button className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}