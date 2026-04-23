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
    const [image2, setImage2] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            dispatch(fetchServiceById(id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        if (leService) {
            setIntitule(leService.intitule || "");
            setCategorie(leService?.categorie || "");
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
        if(image2!=null) formData.append('image2', image2);

        try {
            const response = await dispatch(editService({ id: leService?.id, formData })).unwrap();
            navigate('/admin/services');
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
                    <input type="text" value={intitule} onChange={(e)=>setIntitule(e.target.value)} name="intitule" className={errors.intitule ? "form-control is-invalid" : "form-control"}/>
                    {errors.intitule && <div className="invalid-feedback">{errors.intitule[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Catégorie</label>
                    <select name="categorie" value={categorie} onChange={(e)=>setCategorie(e.target.value)} className={errors.categorie ? "form-select is-invalid" : "form-select"}>
                        <option value="">-- Séléctionner la catégorie --</option>
                        <option value="Digital">Digtal</option>
                        <option value="Print">Print</option>
                    </select>
                    {errors.categorie && <div className="invalid-feedback">{errors.categorie[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} className={errors.description ? "form-control is-invalid" : "form-control"}></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description[0]}</div>}
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="m-1">deuxiéme image</label>
                    <input type="file" onChange={(e)=>{setImage2(e.target.files[0])}} name="image2" className="form-control"/>
                </div>
                <input type="submit" value="Modifier" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
