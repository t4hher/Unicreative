import { Link, useParams } from "react-router-dom"
import { fetchMessageById } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function MessageShow(){
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { message, status } = useSelector((state) => state.interaction);

    useEffect(() => {
        if (id) {
            dispatch(fetchMessageById(id));
        }
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement des détails...</h1></div>;
    }

    const leMessage=message.message;
    return (
        <div className="dash-container">
            <div className="dash-header">
                <div className="details-header">
                    <Link to="/admin/messages"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                    <h1>Details du message</h1>
                </div>
            </div>
            <div className="dash-body container">
                <div className="container">
                    <p><b>Nom et Prénom:</b> {leMessage?.nomComplet}</p>
                    <p><b>Contact Info:</b> {leMessage?.contactInfo}</p>
                    <p><b>Message:</b> {leMessage?.message}</p>
                    <p><b>Etat: </b> 
                        {leMessage?.lue === 0 
                            ? <span className="badge text-bg-primary">Non-Lue</span> 
                            : <span className="badge text-bg-secondary">Lue</span>
                        }
                    </p>
                    <p>
                       {leMessage?.lue === 0 
                            ? <span className="btn btn-lg btn-primary">Marquer comme lue</span> 
                            : <span className="btn btn-lg btn-secondary">Marquer comme non-lue</span>
                        } 
                    </p>
                </div>
            </div>
        </div>
    );
}