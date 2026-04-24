import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchOffres,deleteOffreById, clearMessage } from "../../../Store/ContentSlice";

export default function AdminOffre(){

    const { offres, status, AdminMsg } = useSelector((state) => state.content);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchOffres());
    }, [dispatch]);
    console.log(offres);

    function DeleteOffre(id){
        let offre=offres.find((o)=>o.id==id);
        if(window.confirm(`voulez vous supprimer la realisation ${offre.titre}`)){
            dispatch(deleteOffreById(id));
            navigate("/admin/offres");
        }
    }

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Offres de Recrutement</h1>
            <div className="btns">
                <Link className="btn s" to="add">✚ Ajouter Offre</Link>
            </div>
        </div>
        <div className="dash-body">
            {AdminMsg.offre && <div className="alert alert-success alert-dismissible fade show mb-1" role="alert">
                {AdminMsg.offre}
                <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
            </div>}
            <div className="tableSer">
                <table className="table text-center">
                    <thead>
                        <tr>
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
                                <td>{offre.titre}</td>
                                <td>{offre.description.length>30 ? offre.description.substring(0, 30) + "..." : offre.description}</td>
                                <td>{offre.typeContrat}</td>
                                <td>{offre.profil}</td>
                                <td>{offre.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`http://127.0.0.1:8000/storage/${offre.image}`} width={70}/>}</td>
                                <td>
                                    <Link to={`edit/${offre.id}`} className="btn btn-sm btn-success m-1">Modifier</Link>
                                    <button onClick={()=>DeleteOffre(offre.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
