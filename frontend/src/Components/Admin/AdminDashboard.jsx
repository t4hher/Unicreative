import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCandi, fetchDemandes, fetchMessages } from "../../Store/InteractionSlice";
import { fetchOffres, fetchReali } from "../../Store/ContentSlice";

export default function AdminDashboard(){

    const realisations = useSelector((state) => state.content.realisations || []);
    const offres = useSelector((state) => state.content.offres || []);

    const messages = useSelector((state) => state.interaction.messages || []);
    const demandes = useSelector((state) => state.interaction.demandes || []);
    const candidatures = useSelector((state) => state.interaction.candidatures || []);
    const interactionStatus = useSelector((state) => state.interaction.status)
    const contentStatus = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
        dispatch(fetchDemandes());
        dispatch(fetchCandi());
        dispatch(fetchReali());
        dispatch(fetchOffres());
    }, [dispatch]);

    const countMessages=messages.filter(message=>message.lue===0).length;
    const countDemandes=demandes.filter(demande=>demande.lue===0).length;
    const countCandi=candidatures.filter(candi=>candi.lue===0).length;

    function DeleteOffre(id){
        let off=offres.find((o)=>o.id==id);
        window.confirm(`voulez vous supprimer l'offre ${off.titre}`)
    }
    function DeleteReali(id){
        let Rea=realisations.find((r)=>r.id==id);
        window.confirm(`voulez vous supprimer la realisation ${Rea.titre}`)
    }

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Dashboard</h1>
            <div className="btns">
                <Link className="btn s" to="/admin/realisations/add">✚ Ajouter Réalisation</Link>
                <Link className="btn" to="/admin/offres/add">✚ Ajouter Offre de Recrutement</Link>
            </div>
        </div>
        <div className="dash-body">
            <div className="firstline">
                <div className="nonlues">
                    <div>
                        <h5>Messages non-lues</h5>
                        <Link to="/admin/messages"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                    </div>
                    <span>{!countMessages ? "-" : countMessages}</span>
                </div>
                <div className="nonlues">
                    <div>
                        <h5>Demandes non-lues</h5>
                        <Link to="/admin/demandes"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                    </div>
                    <span>{!countDemandes ? "-" : countDemandes}</span>
                </div>
                <div className="nonlues">
                    <div>
                        <h5>Candidatures non-lues</h5>
                        <Link to="/admin/candidatures"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                    </div>
                    <span>{!countCandi ? "-" : countCandi}</span>
                </div>
            </div>
            <h3>Réalisations</h3>
            <div className="tableDash">
            <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="">#</th>
                            <th>Titre</th>
                            <th>Type</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentStatus==="success" ?
                            realisations.map(reali=><tr>
                                <td>{reali.id}</td>
                                <td>{reali.titre}</td>
                                <td>{reali.type}</td>
                                <td>{reali.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`public/storage/photos/${reali.image}`} width={50}/>}</td>
                                <td>
                                    <Link to={`/admin/realisations/edit/${reali.id}`} className="btn btn-sm btn-success m-1">Modifier</Link>
                                    <button onClick={()=>DeleteReali(reali.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>)
                        : "Chargement ..."}
                    </tbody>
                </table>
            </div>
            <h3>Offres</h3>
            <div className="tableDash">
            <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="">#</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentStatus==="success" ?
                            offres.map((offre)=>
                                <tr key={offre.id}>
                                    <td><b>{offre.id}</b></td>
                                    <td>{offre.titre}</td>
                                    <td>{offre.description.length>20 ? offre.description.substring(0, 20) + "..." : offre.description}</td>
                                    <td>{offre.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`public/storage/photos/${offre.image}`} width={50}/>}</td>
                                    <td>
                                        <Link to={`/admin/offres/edit/${offre.id}`} className="btn btn-sm btn-success m-1">Modifier</Link>
                                        <button onClick={()=>DeleteOffre(offre.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                    </td>
                                </tr>
                            )
                        : "Chargement ..."}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
