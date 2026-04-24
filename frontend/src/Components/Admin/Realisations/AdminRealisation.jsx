import { Link, useNavigate} from "react-router-dom";
import { clearMessage, deleteRealiById, fetchReali } from "../../../Store/ContentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function AdminRealisation(){

    const { realisations, status, AdminMsg } = useSelector((state) => state.content);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchReali());
    }, [dispatch]);

    function DeleteReali(id){
        let Rea=realisations.find((r)=>r.id==id);
        if(window.confirm(`voulez vous supprimer la realisation ${Rea.titre}`)){
            dispatch(deleteRealiById(id));
            navigate("/admin/realisations");
        }
    }

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Réalisations</h1>
            <div className="btns">
                <Link className="btn s" to="add">✚ Ajouter Réalisation</Link>
            </div>
        </div>
        <div className="dash-body">
            {AdminMsg.reali && <div className="alert alert-success alert-dismissible fade show mb-1" role="alert">
                {AdminMsg.reali}
                <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
            </div>}
            <div className="tableSer">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Type</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            realisations.map(reali=><tr key={reali.id}>
                                <td>{reali.titre}</td>
                                <td>{reali.type}</td>
                                <td>{reali.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`http://127.0.0.1:8000/storage/${reali.image}`} width={50}/>}</td>
                                <td>
                                    <Link to={`edit/${reali.id}`} className="btn btn-sm btn-success m-1">Modifier</Link>
                                    <button onClick={()=>DeleteReali(reali.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
