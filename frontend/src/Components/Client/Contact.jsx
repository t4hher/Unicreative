import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../../Store/InteractionSlice";

export default function Contact(){
        const dispatch=useDispatch();
        const navigate=useNavigate();


        const[nomComplet,setNomComplet]=useState("");
        const[infocontact,setInfocontact]=useState("");
        const[message,setmessage]=useState("");
        const[errorMessage,setErrorMessage]=useState("");

        async function MessageAdd(e) {
            e.preventDefault();

            const formData = new FormData();
            formData.append('nomComplet', nomComplet);
            formData.append('contactInfo', infocontact);
            formData.append('message', message);
        try {
            const response = await dispatch(addMessage(formData));
        
                if (response.meta.requestStatus === "fulfilled") {
                    // navigate('/admin/messages');
                } else {
                    setErrorMessage('Erreur lors de l\'ajout.');
                }
                    } catch (error) {
                        alert('Error:', error);
                    }
        }


    return <div>
        <div className="sBanner">
            <div>
                <h1 className="titrerealisation">Contacter Nous</h1>
                <p>
                Vous avez un projet en tête ou une question sur nos services ? Notre équipe est à votre écoute pour transformer vos 
                idées en réalité.
                </p>
            </div>
            <img src="/contact.svg" alt="" />
        </div>
        <h2 className="titlecon">Échangeons ensemble sur votre futur succès.</h2>
        <div className="formcon">
            <form action="" className="formc" method="post" onSubmit={MessageAdd}>
                <div>
                    <label for="titre" className='form-labeld'>Nom et Prenom :</label>
                    <input type="text"  onChange={(e)=>setNomComplet(e.target.value)} class="form-controld" id="titre"  name='titre'/>
                </div>
                <div>
                    <label for="titre" className='form-labeld'>Entrer Email/Telephone :</label>
                    <input type="text" onChange={(e)=>setInfocontact(e.target.value)} class="form-controld" id="titre"  name='titre'/>
                </div>
                <div class="mb-3">
                    <label for="description" className="form-labeld">Message :</label>
                    <textarea onChange={(e)=>setmessage(e.target.value)} className="form-controld" id="description" rows="2"></textarea>
                </div>
                <button type="submit" class="buttondem">Envoyer</button>
            </form>
        </div>
    </div>
}