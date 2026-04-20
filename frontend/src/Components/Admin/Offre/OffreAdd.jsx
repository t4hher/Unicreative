import { Link, useNavigate} from "react-router-dom";
import { addOffre } from "../../../Store/ContentSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function OffreAdd(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('CDI');
    const [profil, setProfil] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            const response = await dispatch(addOffre(formData));
    
            if (response.meta.requestStatus === "fulfilled") {
                navigate('/admin/offres'); 
            } else {
                setErrorMessage('Erreur lors de l\'ajout.');
            }
        } catch (error) {
            alert('Error:', error);
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
                    <input type="text" onChange={(e)=>setTitre(e.target.value)} name="titre" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea rows={3} onChange={(e)=>setDescription(e.target.value)} name="description" className="form-control"></textarea>
                </div>
                <div className="mb-2">
                    <label className="m-1">Type de Contrat</label>
                    <select onChange={(e)=>setType(e.target.value)} name="typeContrat" className="form-select">
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="ANAPEC">ANAPEC</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Stage PFE">Stage PFE</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Profile</label>
                    <input type="text" onChange={(e)=>setProfil(e.target.value)} name="profil" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className="form-control"/>
                </div>
                <input type="submit" value="Ajouter" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
