import { Link} from "react-router-dom";
import { fetchReali } from "../../../Store/ContentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function AdminRealisation(){

    const realisations = useSelector((state) => state.content.realisations || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReali());
    }, [dispatch]);

    function DeleteReali(id){
        let Rea=realisations.find((r)=>r.id==id);
        window.confirm(`voulez vous supprimer la realisation ${Rea.titre}`)
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
            <div className="tableSer">
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
                        {
                            realisations.map(reali=><tr>
                                <td>{reali.id}</td>
                                <td>{reali.titre}</td>
                                <td>{reali.type}</td>
                                <td>{reali.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`public/storage/photos/${reali.image}`} width={50}/>}</td>
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
