import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDemandes } from "../../../Store/InteractionSlice";

export default function AdminDemande(){

    const demandes = useSelector((state) => state.interaction.demandes || []);
    const status = useSelector((state) => state.interaction.status)
    const dispatch = useDispatch();

     useEffect(() => {
            dispatch(fetchDemandes());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className="dash-container">Chargement ...</div>;
    }
    
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Demandes des services</h1>
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
               {
                    demandes.map((demande)=><div className={`box ${demande.lue===0 ? "redShadow" : ""}`}>
                        <h4>{demande.nomComplet}</h4>
                        <p><b>Service: </b>{demande.intitule}</p>
                        <span><b>Description: </b>{demande.description}</span>
                        <div className="mt-3">
                            {demande.lue===0 
                                ? <button className="btn btn-sm btn-success m-2">Marquer comme lue</button>
                                : <button className="btn btn-sm btn-secondary m-2">Marquer comme non-lue</button>
                            }
                            <Link to={`show/${demande.id}`} className="btn btn-sm btn-primary">Afficher</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}