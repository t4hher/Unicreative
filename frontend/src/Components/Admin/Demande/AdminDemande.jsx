import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editDemande, fetchDemandes } from "../../../Store/InteractionSlice";

export default function AdminDemande(){

    const demandesData = useSelector((state) => state.interaction.demandes || []);
    const status = useSelector((state) => state.interaction.status)
    const dispatch = useDispatch();

    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState("tous");
    const [lue, setLue] = useState("");

    const demandes = demandesData.filter(item => { 
        let result = item.nomComplet.toUpperCase().includes(recherche.toUpperCase());
        let lue = Number(item.lue);
    
        if (filter === "non-lues") return result && lue === 0;
        if (filter === "lues") return result && lue === 1;
        return result;
    });

    function handleClick(e, id){
        let valeurLue=e.target.value;

        const data = new FormData();
        data.append('lue', valeurLue);
        data.append("_method", "PUT"); 

        try {
            dispatch(editDemande({ id: id, data: data }));
        } catch (error) {
            alert('Error:', error);
        }
    }

    useEffect(() => {
            dispatch(fetchDemandes());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }
    console.log(demandesData,demandes);
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Demandes</h1>
            <div className="adminFilter">
                <div className="">
                    <select className="form-select round">
                        <option value="">-- Filtrer par service --</option>
                        <option value="">Service 1</option>
                        <option value="">Service 2</option>
                    </select>
                </div>
                <span> | </span>
                <div className="">
                    <input type="text" value={recherche} className="form-control round" placeholder="Chercher par nom" onChange={(e)=>setRecherche(e.target.value)}/>
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
                    demandes.map((demande)=><div className={`box ${demande.lue==0 ? "redShadow" : ""}`}>
                        <h4>{demande.nomComplet}</h4>
                        <p><b>Service: </b>{demande.intitule}</p>
                        <span><b>Description: </b>{demande.description.length>40 ? (<>{demande.description.substring(0, 40)}<b>...</b></>) : demande.description}</span>
                        <div className="mt-3">
                        {Number(demande.lue) === 0 
                            ? <button value={1} onClick={(e)=>handleClick(e, demande.id)} className="btn btn-sm btn-success m-2">Marquer comme lue</button>
                            : <button value={0} onClick={(e)=>handleClick(e, demande.id)} className="btn btn-sm btn-secondary m-2">Marquer comme non-lue</button>
                        }
                            <Link to={`show/${demande.id}`} className="btn btn-sm btn-primary">Afficher</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}