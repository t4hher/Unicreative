import { Link } from "react-router-dom";
import { editMessage, fetchMessages } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function AdminMessage(){

    const messagesData = useSelector((state) => state.interaction.messages || []);
    const status = useSelector((state) => state.interaction.status)
    const dispatch = useDispatch();

    const [recherche, setRecherche] = useState("");
    const [filter, setFilter] = useState("tous");

    const messages = messagesData.filter(item => { 
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
            dispatch(editMessage({ id: id, data: data }));
        } catch (error) {
            alert('Error:', error);
        }
    }

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);
    console.log(messagesData)

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Messages</h1>
            <div className="adminFilter">
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
                    messages.map(message=><div className={`box ${message.lue==0 ? "redShadow" : ""}`}>
                        <h4>{message.nomComplet}</h4>
                        <p>{message.contactInfo}</p>
                        <span><b>Message: </b> {message.message.length>30 ? message.message.substring(0, 30) + "..." : message.message}</span>
                        <div className="mt-3">
                            {Number(message.lue) === 0 
                                ? <button value={1} onClick={(e)=>handleClick(e, message.id)} className="btn btn-sm btn-success m-2">Marquer comme lue</button>
                                : <button value={0} onClick={(e)=>handleClick(e, message.id)} className="btn btn-sm btn-secondary m-2">Marquer comme non-lue</button>
                            }
                            <Link to={`show/${message.id}`} className="btn btn-sm btn-primary">Afficher</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}