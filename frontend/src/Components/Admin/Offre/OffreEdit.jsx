import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { editOffre, fetchOffreById } from "../../../Store/ContentSlice";

export default function OffreEdit(){
    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const {offre,status}=useSelector((state)=>state.content);
    const leOffre=offre.offre;

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [profil, setProfil] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            dispatch(fetchOffreById(id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        if (leOffre) {
            setTitre(leOffre.titre || "");
            setType(leOffre.typeContrat || "");
            setDescription(leOffre.description || "");
            setProfil(leOffre.profil || "");
        }
    }, [leOffre]);
    const handleImage = (e)=>{setImage(e.target.files[0]);}

    async function OffreEdit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('description', description);
        formData.append('typeContrat', type);
        formData.append('profil', profil);
        if(image!=null && image instanceof File) formData.append('image', image); 
    
        try {
            const response = await dispatch(editOffre({ id: leOffre?.id, formData })).unwrap();
            navigate('/admin/offres'); 
        } catch (error) {
            if(error.errors){
                setErrors(error.errors);
                console.log(error.errors)
            }
        }
    }

    if (status === 'loading') {
        return <div className="dash-container">Chargement des détails...</div>;
    }
    return(
        <div>
            <div className="dash-header">
            <div className="details-header">
                <Link to="/admin/offres"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Modifier l'offre: {leOffre?.titre}</h1>
            </div>
        </div>
            <div className="dash-body">
            <form className="container" action="" method="post" encType="multipart/form-data" onSubmit={OffreEdit}>
                <div className="mb-2">
                    <label className="m-1">Titre</label>
                    <input type="text" name="titre" onChange={(e)=>setTitre(e.target.value)} value={titre}  className={errors.titre ? "form-control is-invalid" : "form-control"}/>
                    {errors.titre && <div className="invalid-feedback">{errors.titre[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1" >Type de Contrat</label>
                    <select name="type" value={type} onChange={(e)=>setType(e.target.value)} className={errors.typeContrat ? "form-select is-invalid" : "form-select"}>
                        <option value="">-- Séléctionner le type --</option>
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="ANAPEC">ANAPEC</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Stage(PFE)">Stage(PFE)</option>
                    </select>
                    {errors.typeContrat && <div className="invalid-feedback">{errors.typeContrat[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea rows={3} name="description" value={description} onChange={(e)=>setDescription(e.target.value)} className={errors.description ? "form-control is-invalid" : "form-control"}></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Profile</label>
                    <input value={profil} onChange={(e)=>setProfil(e.target.value)} type="text" name="profil" className={errors.profil ? "form-control is-invalid" : "form-control"}/>
                    {errors.profil && <div className="invalid-feedback">{errors.profil[0]}</div>}
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image"className={errors.image ? "form-control is-invalid" : "form-control"}/>
                    {errors.image && <div className="invalid-feedback">{errors.image[0]}</div>}
                </div>
                <input type="submit" value="Modifier" className=" form-control btn btn-primary"/>
            </form>
        </div>
        </div>
    )
}
