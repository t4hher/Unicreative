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
         const[serviceId,setServiceId]=useState("");
        const[tel,setTel]=useState("");
        const[description,setDescription]=useState("");
        const[errors,setErrors]=useState("");

        async function DemandeAdd(e) {
             e.preventDefault();

             const formData = new FormData();
             formData.append('nomComplet', nomComplet);
             formData.append('email', email);
             formData.append('serviceId', serviceId);
             formData.append('tel', tel);
             formData.append('description', description);
          try {
                const response = await dispatch(addDemande(formData)).unwrap();
                // navigate('/admin/candidatures');
                } catch (error) {
                    if(error.errors){
                        setErrors(error.errors);
                        console.log(error.errors)
                    }
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
                    <input type="text" value={nomComplet} className={errors.nomComplet ? "form-control is-invalid" : "form-control"} id="titre"  name='titre' onChange={(e)=>setNomComplet(e.target.value)}/>
                    {errors.nomComplet && <div className="invalid-feedback">{errors.nomComplet[0]}</div>}
                </div>
                <div>
                    <label for="email" className='form-labeld'> Email :</label>
                    <input type="email" value={email} className={errors.email ? "form-control is-invalid" : "form-control"} id="email" onChange={(e)=>setEmail(e.target.value)} name='email'/>
                    {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
                    </div>

                <div>
                    <label for="telephone" className='form-labeld'>Numéro de Télephone:</label>
                    <input type="text" value={tel} className={errors.tel ? "form-control is-invalid" : "form-control"} onChange={(e)=>setTel(e.target.value)} id="telephone" name='telephone'/>
                    {errors.tel && <div className="invalid-feedback">{errors.tel[0]}</div>}
                </div>
                <div className="mb-3">
                    <label for="service" className='form-labeld' >Service:</label>
                    <select name="service" value={serviceId}  className={errors.serviceId ? "form-select is-invalid" : "form-select"} onChange={(e)=>setServiceId(e.target.value)}>
                        {
                            services.map(s=><option value={s.id}>{s.intitule}</option>)
                        }
                    </select>
                    {errors.serviceId && <div className="invalid-feedback">{errors.serviceId[0]}</div>}
                </div>
                <div class="mb-3">
                    <label for="description" className="form-labeld" >Description</label>
                    <textarea value={description} className={errors.description ? "form-control is-invalid" : "form-control"} onChange={(e)=>setDescription(e.target.value)} id="description" rows="2"></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description[0]}</div>}
                </div>
                    <button type="submit" class="buttondem">Demander</button>
            </form>
        </div>
    </div>
}
