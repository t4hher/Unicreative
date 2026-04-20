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
    const [errorMessage, setErrorMessage] = useState('');

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
            const response = await dispatch(editOffre({ id: leOffre?.id, formData }));
    
            if (response.meta.requestStatus === "fulfilled") {
                navigate('/admin/offres'); 
            } else {
                setErrorMessage('Erreur lors de la modification.');
            }
        } catch (error) {
            alert('Error:', error);
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
                    <input type="text" name="titre" onChange={(e)=>setTitre(e.target.value)} value={titre} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1" >Type de Contrat</label>
                    <select name="type" value={type} onChange={(e)=>setType(e.target.value)} className="form-select" >
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="ANAPEC">ANAPEC</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Stage(PFE)">Stage(PFE)</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control"></textarea>
                </div>
                <div className="mb-2">
                    <label className="m-1">Profile</label>
                    <input value={profil} onChange={(e)=>setProfil(e.target.value)} type="text" name="profil" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className="form-control"/>
                </div>
                <input type="submit" value="Modifier" className=" form-control btn btn-primary"/>
            </form>
        </div>
        </div>
    )
}
