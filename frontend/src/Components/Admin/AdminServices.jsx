import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "../../Store/ContentSlice";
import { useEffect } from "react";

export default function AdminServices(){

    const services = useSelector((state) => state.content.services || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    if (status === 'loading') {
        return (
          <div className='container'>
            <h3>Blog List</h3>
            <h4>Loading...</h4>
          </div>
        );
    }
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Services</h1>
            <div className="btns">
                <Link className="btn s">✚ Ajouter Service</Link>
            </div>
        </div>
        <div className="dash-body">
            <div className="tableSer">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th className="">#</th>
                            <th className="">Intitulé</th>
                            <th>Catégorie</th>
                            <th>Description </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service)=>
                            <tr key={service.id}>
                                <td><b>{service.id}</b></td>
                                <td>{service.intitule}</td>
                                <td>{service.categorie}</td>
                                <td>{service.description.length>20 ? offre.description.substring(0, 20) + "..." : service.description}</td>
                                <td>
                                    <button className="btn btn-sm btn-success">Modifier</button>
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