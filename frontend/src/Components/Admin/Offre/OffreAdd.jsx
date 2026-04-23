import { Link, useNavigate} from "react-router-dom";
import { addOffre } from "../../../Store/ContentSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function OffreAdd(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState();
    const [profil, setProfil] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    const handleImage = (e)=>{setImage(e.target.files[0]);}
    
    async function OffreAdd(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('description', description);
        formData.append('typeContrat', type);
        formData.append('profil', profil);
        formData.append('image', image); 
    
        try {
            const response = await dispatch(addOffre(formData)).unwrap();
            navigate('/admin/offres'); 
        } catch (error) {
            if(error.errors){
                setErrors(error.errors);
                console.log(error.errors)
            }
        }
    }

    return <div className="dash-container">
        <div className="dash-header">
        <div className="details-header">
                <Link to="/admin/offres"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Ajouter Offre de Recrutement</h1>
            </div>
        </div>
        <div className="dash-body">
            <form className="container" onSubmit={OffreAdd} action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Titre</label>
                    <input type="text" onChange={(e)=>setTitre(e.target.value)} name="titre" className={errors.titre ? "form-control is-invalid" : "form-control"}/>
                    {errors.titre && <div className="invalid-feedback">{errors.titre[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea rows={3} onChange={(e)=>setDescription(e.target.value)} name="description" className={errors.description ? "form-control is-invalid" : "form-control"}></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Type de Contrat</label>
                    <select onChange={(e)=>setType(e.target.value)} name="typeContrat" className={errors.typeContrat ? "form-select is-invalid" : "form-select"}>
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
                    <label className="m-1">Profile</label>
                    <input type="text" onChange={(e)=>setProfil(e.target.value)} name="profil" className={errors.profil ? "form-control is-invalid" : "form-control"}/>
                    {errors.profil && <div className="invalid-feedback">{errors.profil[0]}</div>}
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className={errors.image ? "form-control is-invalid" : "form-control"}/>
                    {errors.image && <div className="invalid-feedback">{errors.image[0]}</div>}
                </div>
                <input type="submit" value="Ajouter" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
