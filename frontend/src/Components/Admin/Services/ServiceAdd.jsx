import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { addService } from "../../../Store/ContentSlice";

export default function ServiceAdd(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [intitule, setIntitule] = useState('');
    const [categorie, setCategorie] = useState('Digital');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [image2, setImage2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleImage = (e)=>{setImage(e.target.files[0]);}

    async function ServiceAdd(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('intitule', intitule);
        formData.append('categorie', categorie);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('image2', image2);

        try {
            const response = await dispatch(addService(formData));

            if (response.meta.requestStatus === "fulfilled") {
                navigate('/admin/services');
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
                <Link to="/admin/services"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Ajouter Service</h1>
            </div>
        </div>
        <div className="dash-body">
            <form className="container" onSubmit={ServiceAdd} action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Intitulé</label>
                    <input type="text" onChange={(e)=>setIntitule(e.target.value)} name="intitule" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1">Catégorie</label>
                    <select name="categorie" onChange={(e)=>setCategorie(e.target.value)} className="form-select">
                        <option value="Digital">Digital</option>
                        <option value="Print">Print</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" rows={3} onChange={(e)=>setDescription(e.target.value)} className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="m-1">deuxiéme image</label>
                    <input type="file" onChange={(e)=>{setImage2(e.target.files[0])}} name="image2" className="form-control"/>
                </div>
                <input type="submit" value="Ajouter" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
