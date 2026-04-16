import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDemandes } from "../../../Store/InteractionSlice";

export default function AdminDemande(){

    const demandesData = useSelector((state) => state.interaction.demandes || []);
    const status = useSelector((state) => state.interaction.status)
    const dispatch = useDispatch();

    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState("tous");

    const demandes = demandesData.filter(d =>{ 
        let result=d.nomComplet.toUpperCase().includes(recherche.toUpperCase());
        if(filter==="non-lues"){
            return result && d.lue===0;
        }else if(filter==="lues"){
            return result && d.lue===1;
        }
        return result;
    }
    );

    useEffect(() => {
            dispatch(fetchDemandes());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }
    console.log(demandesData,demandes);
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Demandes des services</h1>
            <div className="adminFilter">
                <div className="">
                    <input type="text" value={recherche} className="form-control" placeholder="Chercher" onChange={(e)=>setRecherche(e.target.value)}/>
                </div>
                <span> | </span>
                <div className="adminFilterBtn">
                    <a href="#" className={filter==='tous' ? "active" : ""} onClick={(e=>{e.preventDefault(); setFilter("tous")})}>Tous</a>
                    <a href="#" className={filter==='non-lues' ? "active" : ""} onClick={(e=>{e.preventDefault(); setFilter("non-lues")})}>Non Lues</a>
                    <a href="#" className={filter==='lues' ? "active" : ""} onClick={(e=>{e.preventDefault(); setFilter("lues")})}>Lues</a>
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