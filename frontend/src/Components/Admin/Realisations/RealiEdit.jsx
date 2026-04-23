import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { editReali, fetchRealisationById} from "../../../Store/ContentSlice";

export default function RealiEdit(){
    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const {realisation,status}=useSelector((state)=>state.content);
    const leReali=realisation.realisation;

    const [titre, setTitre] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            dispatch(fetchRealisationById(id));
        }
    }, [dispatch, id]);
    useEffect(() => {
        if (leReali) {
            setTitre(leReali.titre || "");
            setType(leReali.type || "");
        }
    }, [leReali]);
    const handleImage = (e)=>{setImage(e.target.files[0]);}

    async function RealiEdit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('type', type);
        if(image!=null && image instanceof File) formData.append('image', image); 
    
        try {
            const response = await dispatch(editReali({ id: leReali?.id, formData })).unwrap();
            navigate('/admin/realisations'); 
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
                <Link to="/admin/realisations"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Modifier la realisation: {leReali?.titre}</h1>
            </div>
        </div>
            <div className="dash-body">
            <form className="container" onSubmit={RealiEdit} method="post" encType="multipart/form-data">
                <div className="mb-2">
                    <label className="m-1">Titre</label>
                    <input type="text" onChange={(e)=>setTitre(e.target.value)} name="titre" value={titre} className={errors.titre ? "form-control is-invalid" : "form-control"}/>
                    {errors.titre && <div className="invalid-feedback">{errors.titre[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1" >Type</label>
                    <select name="type" onChange={(e)=>setType(e.target.value)} className="form-select" value={type}>
                        <option value="Digital" >Digital</option>
                        <option value="Print">Print</option>
                    </select>
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
