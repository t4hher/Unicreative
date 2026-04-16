import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOffres } from "../../../Store/ContentSlice";

export default function AdminOffre(){

    const offres = useSelector((state) => state.content.offres || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOffres());
    }, [dispatch]);
    console.log(offres)

    if (status === 'loading') {
        return <div className="dash-container">Chargement ...</div>;
    }

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Offres de Recrutement</h1>
            <div className="btns">
                <Link className="btn s" to="add">✚ Ajouter Offre</Link>
            </div>
        </div>
        <div className="dash-body">
            <div className="tableSer">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="">#</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Type de Contrat</th>
                            <th>Profile</th>
                            <th>Image</th>
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
                                <td>{offre.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`public/storage/photos/${offre.image}`} width={50}/>}</td>
                                <td>
                                    <button className="btn btn-sm btn-success m-1">Modifier</button>
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