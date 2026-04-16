import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "../../../Store/ContentSlice";
import { useEffect } from "react";

export default function AdminServices(){

    const services = useSelector((state) => state.content.services || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

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
            <div className="tableSer">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="">#</th>
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
                                <td><b>{service.id}</b></td>
                                <td>{service.intitule}</td>
                                <td>{service.categorie}</td>
                                <td>{service.description.length>20 ? service.description.substring(0, 20) + "..." : service.description}</td>
                                <td>{service.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" width={50}/> : <img src={`public/storage/photos/${service.image}`} width={50}/>}</td>
                                <td>
                                    <button className="btn btn-sm btn-success m-1">Modifier</button>
                                    <button className="btn btn-sm btn-danger">Supprimer</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}