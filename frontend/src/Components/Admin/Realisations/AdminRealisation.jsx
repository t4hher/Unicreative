import { Link } from "react-router-dom";
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

    if (status === 'loading') {
        return <div className="dash-container">Chargement ...</div>;
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
                                    <button className="btn btn-sm btn-success m-1">Modifier</button>
                                    <button className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}