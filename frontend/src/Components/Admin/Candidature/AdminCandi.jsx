import { Link, useNavigate } from "react-router-dom";
import { editCandi, fetchCandi } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function AdminCandi(){

    const candidaturesData = useSelector((state) => state.interaction.candidatures || []);
    const status = useSelector((state) => state.interaction.status)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState("tous");

    const candidatures = candidaturesData.filter(item => { 
        let result = item.nomcomplet.toUpperCase().includes(recherche.toUpperCase());
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
            dispatch(editCandi({ id: id, data: data }));
            navigate("/admin/candidatures")
        } catch (error) {
            alert('Error:', error);
        }
    }

    useEffect(() => {
        dispatch(fetchCandi());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Candidatures</h1>
            <div className="adminFilter">
                <div className="">
                    <select className="form-select round">
                        <option value="">-- Filtrer par Offre --</option>
                        <option value="">Offre 1</option>
                        <option value="">Offre 2</option>
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