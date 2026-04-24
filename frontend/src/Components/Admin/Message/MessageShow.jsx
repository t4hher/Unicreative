import { Link, useParams } from "react-router-dom"
import { clearMessage, editMessage, fetchMessageById } from "../../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function MessageShow(){
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { message, status, AdminMsg } = useSelector((state) => state.interaction);

    function handleClick(e, id){
        let valeurLue=e.target.value;
        
        const data = new FormData();
        data.append('lue', Number(valeurLue));
        data.append("_method", "PUT"); 

        try {
            dispatch(editMessage({ id: id, data: data }));
        } catch (error) {
            alert('Error:', error);
        }
    }

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
                {AdminMsg.message && <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
                    {AdminMsg.message}
                    <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
                </div>}
                <div className="container">
                    <p><b>Nom et Prénom:</b> {leMessage?.nomComplet}</p>
                    <p><b>Contact Info:</b> {leMessage?.contactInfo}</p>
                    <p><b>Message:</b> {leMessage?.message}</p>
                    <p><b>Etat: </b> 
                        {Number(leMessage?.lue) === 0 
                            ? <span className="badge text-bg-primary">Non-Lue</span> 
                            : <span className="badge text-bg-secondary">Lue</span>
                        }
                    </p>
                    <p>
                        {Number(leMessage?.lue) === 0 
                            ? <button value={1} onClick={(e)=>handleClick(e, leMessage.id)} className="btn btn-lg btn-primary m-2">Marquer comme lue</button>
                            : <button value={0} onClick={(e)=>handleClick(e, leMessage.id)} className="btn btn-lg btn-secondary m-2">Marquer comme non-lue</button>
                        } 
                    </p>
                </div>
            </div>
        </div>
    );
}