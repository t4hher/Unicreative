import { Link } from "react-router-dom";
import { fetchMessages } from "../../Store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function AdminMessage(){

    const messages = useSelector((state) => state.interaction.messages || []);
    const status = useSelector((state) => state.interaction.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);
    console.log(messages)

    return <div className="dash-container">
        <div className="dash-header">
            <h1>Messages</h1>
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
                    messages.map(message=><div className="box">
                        <h4>{message.nomComplet}</h4>
                        <p>{message.contactInfo}</p>
                        <span><b>Message: </b> {message.message.length>30 ? message.message.substring(0, 30) + "..." : message.message}</span>
                    </div>)
                }
            </div>
        </div>
    </div>
}