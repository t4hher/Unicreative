import { Link, useNavigate } from "react-router-dom";
import { clearMessage, editCandi, fetchCandi } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOffres } from "../../../Store/ContentSlice";

export default function AdminCandi(){

    const candidaturesData = useSelector((state) => state.interaction.candidatures || []);
    const offres = useSelector((state) => state.content.offres)
    const { AdminMsg, status } = useSelector((state) => state.interaction);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState("tous");
    const [filterService, setFilterService] = useState("tous");

    const candidatures = candidaturesData.filter(item => { 
        let result = item.nomcomplet.toUpperCase().includes(recherche.toUpperCase());
        let lue = Number(item.lue);
        if (filterService==="tous") {
            result = item.nomcomplet.toUpperCase().includes(recherche.toUpperCase());
        }else{
            result = item.nomcomplet.toUpperCase().includes(recherche.toUpperCase()) && item.offreId==filterService;
        }
    
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
            dispatch(editCandi({ id: id, data: data }));
            navigate("/admin/candidatures")
        } catch (error) {
            alert('Error:', error);
        }
    }

    useEffect(() => {
        dispatch(fetchCandi());
        dispatch(fetchOffres());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Candidatures</h1>
            <div className="adminFilter">
                <div className="">
                    <select value={filterService} onChange={(e)=>setFilterService(e.target.value)} className="form-select round">
                        <option value="tous">-- Filtrer par Offre --</option>
                        {
                            offres.map(o=><option value={o.id}>{o.titre}</option>)
                        }
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
            {AdminMsg.candi && <div className="alert alert-success alert-dismissible fade show mb-1" role="alert">
                {AdminMsg.candi}
                <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
            </div>}
            <div className="grid">
                {
                    candidatures.map(candi=><div className={`box ${candi.lue==0 ? "redShadow" : ""}`}>
                        <h4>{candi.nomcomplet}</h4>
                        <p><b>Offre: </b>{candi.titre}</p>
                        <span><b>Email: </b> {candi.email}</span>
                        <span><b>Tel: </b> {candi.tel}</span>
                        <div className="mt-3">
                            {Number(candi.lue) === 0 
                                ? <button value={1} onClick={(e)=>handleClick(e, candi.id)} className="btn btn-sm btn-success m-2">Marquer comme lue</button>
                                : <button value={0} onClick={(e)=>handleClick(e, candi.id)} className="btn btn-sm btn-secondary m-2">Marquer comme non-lue</button>
                            }
                            <Link to={`show/${candi.id}`} className="btn btn-sm btn-primary">Afficher</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}