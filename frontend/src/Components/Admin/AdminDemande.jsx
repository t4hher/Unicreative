import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDemandes } from "../../Store/ContentSlice";

export default function AdminDemande(){

    const demandes = useSelector((state) => state.content.demandes || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

     useEffect(() => {
            dispatch(fetchDemandes());
        }, [dispatch]);
    return <div className="dash-container">
        <div className="dash-header">
            <h1>Demandes des services</h1>
            <div className="adminFilter">
                <div className="">
                    <input type="text" className="form-control" placeholder="Chercher"/>
                </div>
                <span> | </span>
                <div className="adminFilterBtn">
                    <a href="#" className="active">Tous</a>
                    <a href="#">Non Lues</a>
                    <a href="#">Lues</a>
                </div> 
            </div>
        </div>
        <div className="dash-body">
            <div className="grid">
               {
                    demandes.map((demande)=><div className="box" key={demande.id}>
                        <h4>{demande.nomComplet}</h4>
                        <p>{demande.serviceId}</p>
                        <span><b>Description: </b>{demande.description}</span>
                    </div>)
                }
            </div>
        </div>
    </div>
}