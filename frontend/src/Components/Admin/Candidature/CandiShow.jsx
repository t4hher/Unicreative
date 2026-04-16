import { Link, useParams } from "react-router-dom"
import { fetchCandiById } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function CandiShow(){
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { candidature, status } = useSelector((state) => state.interaction);

    useEffect(() => {
        if (id) {
            dispatch(fetchCandiById(id));
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
                <div className="container">
                    <p><b>Nom de l'offre:</b> {laCandi?.titre}</p>
                    <p><b>Nom et Prénom:</b> {laCandi?.nomcomplet}</p>
                    <p><b>Email:</b> {laCandi?.email}</p>
                    <p><b>Tel:</b> {laCandi?.tel}</p>
                    <p><b>Etat: </b> 
                        {laCandi?.lue === 0 
                            ? <span className="badge text-bg-primary">Non-Lue</span> 
                            : <span className="badge text-bg-secondary">Lue</span>
                        }
                    </p>
                    <p>
                       {laCandi?.lue === 0 
                            ? <span className="btn btn-lg btn-primary">Marquer comme lue</span> 
                            : <span className="btn btn-lg btn-secondary">Marquer comme non-lue</span>
                        } 
                    </p>
                    
                </div>
            </div>
        </div>
    );
}