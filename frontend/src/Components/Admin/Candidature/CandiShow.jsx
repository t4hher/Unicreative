import { Link, useNavigate, useParams } from "react-router-dom"
import { clearMessage, editCandi, fetchCandiById } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function CandiShow(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { candidature, AdminMsg, status } = useSelector((state) => state.interaction);

    function handleClick(e, id){
        let valeurLue=e.target.value;
        
        const data = new FormData();
        data.append('lue', Number(valeurLue));
        data.append("_method", "PUT"); 

        try {
            dispatch(editCandi({ id: id, data: data }));

        } catch (error) {
            alert('Error:', error);
        }
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchCandiById(id));
            navigate("/admin/candidatures/show/"+id)
        }
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement des détails...</h1></div>;
    }

    const laCandi=candidature.candidature;
    console.log(laCandi, candidature)
    return (
        <div className="dash-container">
            <div className="dash-header">
                <div className="details-header">
                    <Link to="/admin/candidatures"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                    <h1>Details de la candidature</h1>
                </div>
            </div>
            <div className="dash-body container">
                {AdminMsg.candi && <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                    {AdminMsg.candi}
                    <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
                </div>}
                <div className="container">
                    <p><b>Nom de l'offre:</b> {laCandi?.titre}</p>
                    <p><b>Nom et Prénom:</b> {laCandi?.nomcomplet}</p>
                    <p><b>Email:</b> {laCandi?.email}</p>
                    <p><b>Tel:</b> {laCandi?.tel}</p>
                    <p><b>CV: </b> 
                        {laCandi?.CV ? (
                            <a 
                                href={`http://127.0.0.1:8000/storage/${laCandi.CV}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-warning"
                            >
                                <i className="bi bi-file-earmark-pdf"></i> Voir le CV (PDF)
                            </a>
                        ) : (
                            <span className="text-danger"> Aucun CV téléchargé</span>
                        )}
                    </p>
                    <p><b>Lettre de motivation: </b> 
                        {laCandi?.lettreMotivation ? (
                            <a 
                                href={`http://127.0.0.1:8000/storage/${laCandi.lettreMotivation}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-warning"
                            >
                                <i className="bi bi-file-earmark-pdf"></i> Voir la lettre (PDF)
                            </a>
                        ) : (
                            <span className="text-danger"> Aucun lettre de motivation téléchargée</span>
                        )}
                    </p>
                    <p><b>Etat: </b>
                        {Number(laCandi?.lue) === 0
                            ? <span className="badge text-bg-primary">Non-Lue</span>
                            : <span className="badge text-bg-secondary">Lue</span>
                        }
                    </p>
                    <p>
                        {Number(laCandi?.lue) === 0 
                            ? <button value={1} onClick={(e)=>handleClick(e, laCandi.id)} className="btn btn-lg btn-primary m-2">Marquer comme lue</button>
                            : <button value={0} onClick={(e)=>handleClick(e, laCandi.id)} className="btn btn-lg btn-secondary m-2">Marquer comme non-lue</button>
                        }
                    </p>

                </div>
            </div>
        </div>
    );
}
