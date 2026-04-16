import { Link, useParams } from "react-router-dom"
import { fetchDemandeById } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function DemandeShow(){
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { demande, status } = useSelector((state) => state.interaction);

    useEffect(() => {
        if (id) {
            dispatch(fetchDemandeById(id));
        }
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="dash-container">Chargement des détails...</div>;
    }

    const laDemande=demande.demande;
    return (
        <div className="dash-container">
            <div className="dash-header">
                <div className="details-header">
                    <Link to="/admin/demandes"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                    <h1>Details de la demande</h1>
                </div>
            </div>
            <div className="dash-body container">
                <div className="container">
                    <p><b>Nom de service:</b> {laDemande?.serviceNom}</p>
                    <p><b>Nom et Prénom:</b> {laDemande?.nomComplet}</p>
                    <p><b>Email:</b> {laDemande?.email}</p>
                    <p><b>Tel:</b> {laDemande?.tel}</p>
                    <p><b>Description:</b> {laDemande?.description}</p>
                    <p><b>Etat: </b> 
                        {laDemande?.lue === 0 
                            ? <span className="badge text-bg-primary">Non-Lue</span> 
                            : <span className="badge text-bg-secondary">Lue</span>
                        }
                    </p>
                    <p>
                       {laDemande?.lue === 0 
                            ? <span className="btn btn-lg btn-primary">Marquer comme lue</span> 
                            : <span className="btn btn-lg btn-secondary">Marquer comme non-lue</span>
                        } 
                    </p>
                    
                </div>
            </div>
        </div>
    );
}