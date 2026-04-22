import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  fetchOffreById, fetchOffres } from '../../Store/ContentSlice';
import { addCandi } from '../../Store/InteractionSlice';
export default function Poste() {
        const { id } = useParams();
        const dispatch=useDispatch();
        const navigate=useNavigate();

        const offres = useSelector((state) => state.content.offres)
        const offre = useSelector((state) => state.content.offre)
        
        const [nomComplet,setNomComplet]=useState("");
        const [telephone,setTelephone]=useState("");
        const [email,setEmail]=useState("");
        const [sexe,setSexe]=useState("");
        const [lettre,setLettre]=useState(null);
        const [cv,setCv]=useState(null);
        const [offreId,setOffreId]=useState("");
        const [errorMessage, setErrorMessage] = useState('');

        const handlelettre= (e)=>{setLettre(e.target.files[0]);}
        const handlecv= (e)=>{setCv(e.target.files[0]);}


        async function CandiAdd(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nomcomplet', nomComplet);
        formData.append('tel', telephone);
        formData.append('email', email);
        formData.append('offreId', offreId);
        formData.append('sexe', sexe);
        formData.append('lettreMotivation', lettre);
        formData.append('CV', cv);


        try {
            const response = await dispatch(addCandi(formData));

                if (response.meta.requestStatus === "fulfilled") {
                    // navigate('/admin/candidatures');
                } else {
                    setErrorMessage('Erreur lors de l\'ajout.');
                }
                } catch (error) {
                    alert('Error:', error);
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
    console.log(leoffre)

  return (
    <div>
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
                        <label htmlFor="titre" className='form-label'>Nom et prenom :</label>
                        <input type="text" class="form-control" onChange={(e)=>setNomComplet(e.target.value)} id="titre"  name='titre'/>                </div>
                    <div class="form-group ">
                        <label htmlFor="telephone" className='form-label'>Numéro de Télephone:</label>
                        <input type="text" class="form-control" onChange={(e)=>setTelephone(e.target.value)}  id="telephone" name='telephone'/>
                    </div>
                    <div class="form-group mb-2">
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)}  id="email" name='email'/>
                    </div>
                        <label htmlFor="select" className='form-label'>Choisir un Poste</label>
                    <div  className='mb-2'>
                        <select className='form-select' value={leoffre?.id} onChange={(e)=>setOffreId(e.target.value)}>
                            {
                                offres.map(o=><option value={o.id}>{o.titre}</option>)
                            }
                        </select>
                    </div>

                    <div className='sexecheck mb-2'>
                        <label htmlFor="" className='form-label'>Sexe :</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexe" id="sexe" value="F"
                            onChange={(e) => setSexe(e.target.value)} checked={sexe === "F"}/>
                            <label class="form-labele" for="sexe">
                                Femme
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexe" id="sexe" value="H"
                            onChange={(e) => setSexe(e.target.value)} checked={sexe === "H"}/>
                            <label class="form-labele" for="sexe">
                                Homme
                            </label>
                        </div>
                    </div>
                    <div class="form-group mb-2">
                        <label for="lettre" className='form-label'>Lettre de Motivation:</label>
                        <input type="file" name="lettreMotivation" onChange={handlelettre} id="lettre"  className='form-control'/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="cv" className='form-label'>Entrer le CV :</label>
                        <input type="file" name="CV" onChange={handlecv} id="cv"  className='form-control' />
                    </div>
                    <button type="submit">Postuler</button>
                </form>
            </div>
        </div>
    </div>
  )
}
