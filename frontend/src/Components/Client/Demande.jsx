import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDemande } from "../../Store/InteractionSlice";
import { fetchServices } from "../../Store/ContentSlice";

export default function Demande(){

        const dispatch=useDispatch();
        const navigate=useNavigate();

        const services=useSelector((state) => state.content.services)

        const[nomComplet,setNomComplet]=useState("");
         const[email,setEmail]=useState("");
         const[service,setService]=useState("");
        const[tel,setTel]=useState("");
        const[description,setDescription]=useState("");
        const[errorMessage,setErrorMessage]=useState("");

        async function DemandeAdd(e) {
             e.preventDefault();

             const formData = new FormData();
             formData.append('nomComplet', nomComplet);
             formData.append('email', email);
             formData.append('serviceId', service);
             formData.append('tel', tel);
             formData.append('description', description);
         try {
             const response = await dispatch(addDemande(formData));
        
                if (response.meta.requestStatus === "fulfilled") {
                    // navigate('/admin/demandes');
                } else {
                    setErrorMessage('Erreur lors de l\'ajout.');
                }
                    } catch (error) {
                        alert('Error:', error);
                    }
        }
    useEffect(()=>{
        dispatch(fetchServices());
    },[dispatch])

    return <div>
        <div  className='formdem'>
            <form  className='formd' method="post" onSubmit={DemandeAdd}>
                <h2> Demander</h2>
                <div>
                    <label for="titre" className='form-labeld' >Nom et Prenom :</label>
                    <input type="text" class="form-controld" id="titre"  name='titre' onChange={(e)=>setNomComplet(e.target.value)}/>
                </div>
                <div>
                    <label for="email" className='form-labeld'> Email :</label>
                    <input type="email" class="form-controld" id="email" onChange={(e)=>setEmail(e.target.value)} name='email'/>
                </div>

                <div>
                    <label for="telephone" className='form-labeld'>Numéro de Télephone:</label>
                    <input type="text" class="form-controld" onChange={(e)=>setTel(e.target.value)} id="telephone" name='telephone'/>
                </div>
                <div className="mb-3">
                    <label for="service" className='form-labeld' >Service:</label>
                    <select name="service"  className="form-select" onChange={(e)=>setService(e.target.value)}>
                        {
                            services.map(s=><option value={s.id}>{s.intitule}</option>)
                        }                    
                    </select>
                </div>
                <div class="mb-3">
                    <label for="description" className="form-labeld" >Description</label>
                    <textarea className="form-controld" onChange={(e)=>setDescription(e.target.value)} id="description" rows="2"></textarea>
                </div>
                    <button type="submit" class="buttondem">Demander</button>
            </form>
        </div>
    </div>
}
