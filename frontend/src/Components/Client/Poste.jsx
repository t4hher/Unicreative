import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  fetchOffreById, fetchOffres } from '../../Store/ContentSlice';
import { addCandi, clearMessage } from '../../Store/InteractionSlice';
export default function Poste() {
        const { id } = useParams();
        const dispatch=useDispatch();
        const navigate=useNavigate();

        const offres = useSelector((state) => state.content.offres)
        const offre = useSelector((state) => state.content.offre)
        const { ClientMsg } = useSelector((state) => state.interaction);

        const [nomcomplet,setNomcomplet]=useState("");
        const [tel,setTel]=useState("");
        const [email,setEmail]=useState("");
        const [sexe,setSexe]=useState("");
        const [lettreMotivation,setLettreMotivation]=useState(null);
        const [CV,setCV]=useState(null);
        const [offreId,setOffreId]=useState("");
        const [errors, setErrors] = useState('');

        const handlelettre= (e)=>{setLettreMotivation(e.target.files[0]);}
        const handlecv= (e)=>{setCV(e.target.files[0]);}


        async function CandiAdd(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nomcomplet', nomcomplet);
        formData.append('tel', tel);
        formData.append('email', email);
        formData.append('offreId', offreId);
        formData.append('sexe', sexe);
        formData.append('lettreMotivation', lettreMotivation);
        formData.append('CV', CV);


        try {
            const response = await dispatch(addCandi(formData)).unwrap();
            // navigate('/admin/candidatures');
        } catch (error) {
            if(error.errors){
                setErrors(error.errors);
                console.log(error.errors)
            }
        }
    }

    useEffect(() => {
        if (id){
            dispatch(fetchOffreById(id));
        }
            dispatch(fetchOffres());
        }, [dispatch,id]);
    if (status === 'loading') {
        return <div className="dash-container"><h1>Chargement des détails...</h1></div>;
    }

    const leoffre=offre.offre;

  return (
    <div>
        {ClientMsg.candi && <div className="alert alert-success alert-dismissible fade show w-50 mx-auto mt-2" role="alert">
            {ClientMsg.candi}
            <button type="button" className="btn-close btn-sm" onClick={() => dispatch(clearMessage())}></button>
        </div>}
        <div className='postefor'>
            <div className='Pposte'>
                <ul>
                    <li><p><strong>Titre :</strong>{leoffre?.titre}</p></li>
                <li>
                    <p>
                        <strong>Description :</strong>
                        {leoffre?.description}
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Type de Contrat :</strong>{leoffre?.typeContrat}
                    </p>
                </li>
                <li><p><strong>Profil :</strong>{leoffre?.profil}</p></li>
                </ul>

            </div>
            <div className='formulaire'>
                <form className='forms' method='post' onSubmit={CandiAdd} encType="multipart/form-data">
                    <div class="form-group mb-2">
                        <label htmlFor="nom" className='form-label'>Nom et prenom :</label>
                        <input type="text" value={nomcomplet} className={errors.nomcomplet ? "form-control is-invalid" : "form-control"} onChange={(e)=>setNomcomplet(e.target.value)} id="nom"   name='nom'/>
                        {errors.nomcomplet && <div className="invalid-feedback">{errors.nomcomplet[0]}</div>}
                    </div>
                    <div class="form-group ">
                        <label htmlFor="telephone" className='form-label'>Numéro de Télephone:</label>
                        <input type="text" value={tel} className={errors.tel ? "form-control is-invalid" : "form-control"} onChange={(e)=>setTel(e.target.value)}  id="telephone" name='telephone'/>
                        {errors.tel && <div className="invalid-feedback">{errors.tel[0]}</div>}
                    </div>
                    <div class="form-group mb-2">
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input type="email" value={email} className={errors.email ? "form-control is-invalid" : "form-control"} onChange={(e)=>setEmail(e.target.value)}  id="email" name='email'/>
                        {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
                    </div>
                        <label htmlFor="select" className='form-label'>Choisir un Poste</label>
                    <div  className='mb-2'>
                        <select value={leoffre?.id} onChange={(e)=>setOffreId(e.target.value)} className={errors.offreId ? "form-select is-invalid" : "form-select"}>
                            {
                                offres.map(o=><option value={o.id}>{o.titre}</option>)
                            }
                        </select>
                        {errors.offreId && <div className="invalid-feedback">{errors.offreId[0]}</div>}
                    </div>

                    <div className='sexecheck mb-2'>
                        <label htmlFor="" className='form-label'>Sexe :</label>
                        <div class="form-check">
                            <input className={errors.sexe ? "form-check-input is-invalid" : "form-check-input"} type="radio" name="sexe" id="sexe" value="F"
                            onChange={(e) => setSexe(e.target.value)} checked={sexe === "F"}/>
                            <label class="form-labele" for="sexe">
                                Femme
                            </label>
                        </div>
                        <div class="form-check">
                            <input className={errors.sexe ? "form-check-input is-invalid" : "form-check-input"} type="radio" name="sexe" id="sexe" value="H"
                            onChange={(e) => setSexe(e.target.value)} checked={sexe === "H"}/>
                            <label class="form-labele" for="sexe">
                                Homme
                            </label>
                            {errors.sexe && <div className="invalid-feedback">{errors.sexe[0]}</div>}
                        </div>
                    </div>
                    <div class="form-group mb-2">
                        <label for="lettre" className='form-label'>Lettre de Motivation:</label>
                        <input type="file"  name="lettreMotivation" onChange={handlelettre} id="lettre" className={errors.lettreMotivation ? "form-control is-invalid" : "form-control"}/>
                        {errors.lettreMotivation && <div className="invalid-feedback">{errors.lettreMotivation[0]}</div>}
                    </div>
                    <div class="form-group mb-2">
                        <label for="cv" className='form-label'>Entrer le CV :</label>
                        <input type="file" name="CV" onChange={handlecv} id="cv"  className={errors.CV ? "form-control is-invalid" : "form-control"}  />
                        {errors.CV && <div className="invalid-feedback">{errors.CV[0]}</div>}
                    </div>
                    <button type="submit">Postuler</button>
                </form>
            </div>
        </div>
    </div>
  )
}
