import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { editService, fetchServiceById } from "../../../Store/ContentSlice";

export default function ServiceEdit(){

    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const {service,status}=useSelector((state)=>state.content);
    const leService=service.service;

    const [intitule, setIntitule] = useState("");
    const [categorie, setCategorie] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (id) {
            dispatch(fetchServiceById(id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        if (leService) {
            setIntitule(leService.intitule || "");
            setCategorie(leService.categorie || "");
            setDescription(leService.description || "");
        }
    }, [leService]);
    const handleImage = (e)=>{setImage(e.target.files[0]);}

    async function ServiceEdit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('intitule', intitule);
        formData.append('categorie', categorie);
        formData.append('description', description);
        if(image!=null) formData.append('image', image); 
    
        try {
            const response = await dispatch(editService({ id: leService?.id, formData }));
    
            if (response.meta.requestStatus === "fulfilled") {
                navigate('/admin/services'); 
            } else {
                setErrorMessage('Erreur lors de la modification');
            }
        } catch (error) {
            alert('Error:', error);
        }
    }

    if (status === 'loading') {
        return <div className="dash-container">Chargement des détails...</div>;
    }
    return <div className="dash-container">
        <div className="dash-header">
            <div className="details-header">
                <Link to="/admin/services"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Modifier le service : {leService?.intitule}</h1>
            </div>
        </div>
        <div className="dash-body">
            <form className="container" onSubmit={ServiceEdit} action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Intitulé</label>
                    <input type="text" value={intitule} onChange={(e)=>setIntitule(e.target.value)} name="intitule" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1">Catégorie</label>
                    <select name="categorie" value={categorie} onChange={(e)=>setCategorie(e.target.value)} className="form-select">
                        <option value="Digtal">Digtal</option>
                        <option value="Print">Print</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className="form-control"/>
                </div>
                <input type="submit" value="Modifier" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
