import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../../Store/InteractionSlice";

export default function Contact(){
        const dispatch=useDispatch();
        const navigate=useNavigate();


        const[nomComplet,setNomComplet]=useState("");
        const[contactInfo,setContactInfo]=useState("");
        const[message,setmessage]=useState("");
        const[errors,setErrors]=useState("");

        async function MessageAdd(e) {
            e.preventDefault();

            const formData = new FormData();
            formData.append('nomComplet', nomComplet);
            formData.append('contactInfo', contactInfo);
            formData.append('message', message);
        try {
            const response = await dispatch(addMessage(formData)).unwrap();
            // navigate('/admin/candidatures');
            } catch (error) {
                if(error.errors){
                    setErrors(error.errors);
                    console.log(error.errors)
                    }
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
                    <input type="text" value={nomComplet} className={errors.nomComplet? "form-control is-invalid" : "form-control"}  onChange={(e)=>setNomComplet(e.target.value)}  id="nom"  name='nom'/>
                    {errors.nomComplet && <div className="invalid-feedback">{errors.nomComplet[0]}</div>}
                </div>

                <div>
                    <label for="titre" className='form-labeld'>Entrer Email/Telephone :</label>
                    <input type="text"value={contactInfo} className={errors.contactInfo? "form-control is-invalid" : "form-control"}  onChange={(e)=>setContactInfo(e.target.value)}  id="info"  name='info'/>
                    {errors.contactInfo && <div className="invalid-feedback">{errors.contactInfo[0]}</div>}
                </div>
                <div class="mb-3">
                    <label for="description" className="form-labeld">Message :</label>
                    <textarea onChange={(e)=>setmessage(e.target.value)} value={message} className={errors.message ? "form-control is-invalid" : "form-control"} id="description" rows="2"></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message[0]}</div>}
                </div>
                <button type="submit" class="buttondem">Envoyer</button>
            </form>
        </div>
    </div>
}
