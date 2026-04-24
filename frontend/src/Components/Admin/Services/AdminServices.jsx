import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearMessage, deleteServiceById, fetchServices } from "../../../Store/ContentSlice";
import { useEffect } from "react";

export default function AdminServices(){
    const { services, status, AdminMsg } = useSelector((state) => state.content);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    function DeleteSer(id){
        let Ser=services.find((s)=>s.id==id);
        if(window.confirm(`voulez vous supprimer le service de ${Ser.intitule}`)){
            dispatch(deleteServiceById(id));
            navigate("/admin/services");
        }


    }

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement ...</h1></div>;
    }

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Services</h1>
            <div className="btns">
                <Link className="btn s" to="add">✚ Ajouter Service</Link>
            </div>
        </div>
        <div className="dash-body">
            {AdminMsg.service && <div className="alert alert-success alert-dismissible fade show mb-1" role="alert">
                {AdminMsg.service}
                <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
            </div>}
            <div className="tableSer">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="">Intitulé</th>
                            <th>Catégorie</th>
                            <th>Description </th>
                            <th>Image </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service)=>
                            <tr key={service.id}>
                                <td>{service.intitule}</td>
                                <td>{service.categorie}</td>
                                <td>{service.description.length>20 ? service.description.substring(0, 20) + "..." : service.description}</td>
                                <td>{service.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`http://127.0.0.1:8000/storage/${service.image}`} width={70}/>}</td>
                                <td>
                                    <Link className="btn btn-sm btn-success m-1" to={`edit/${service.id}`}>Modifier</Link>
                                    <button onClick={()=>DeleteSer(service.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
