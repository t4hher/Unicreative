import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { addReali } from "../../../Store/ContentSlice";
import { useDispatch } from "react-redux";

export default function RealisationAdd(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [titre, setTitre] = useState('');
    const [type, setType] = useState('Digital');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);

    const handleImage = (e)=>{setImage(e.target.files[0]);}

    async function RealiAdd(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('type', type);
        formData.append('image', image);

        try {
            const response = await dispatch(addReali(formData)).unwrap();
            navigate('/admin/realisations');
        } catch (error) {
            if(error.errors){
              setErrors(error.errors);
              console.log(errors)
            }
        }
    }

    return <div className="dash-container">
        <div className="dash-header">
            <div className="details-header">
                <Link to="/admin/realisations"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Ajouter Réalisation</h1>
            </div>
        </div>
        <div className="dash-body">
            <form className="container" onSubmit={RealiAdd} action="" method="post" encType="multipart/form-data">
                <div className="mb-2">
                    <label className="m-1">Titre</label>
                    <input type="text" onChange={(e)=>setTitre(e.target.value)} name="titre" className={errors.titre ? "form-control is-invalid" : "form-control"}/>
                    {errors.titre && <div className="invalid-feedback">{errors.titre[0]}</div>}
                </div>
                <div className="mb-2">
                    <label className="m-1">Type</label>
                    <select onChange={(e)=>setType(e.target.value)} name="type" className="form-select">
                        <option value="Digital">Digital</option>
                        <option value="Print">Print</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" onChange={handleImage} name="image" className={"form-control"}/>
                </div>
                <input type="submit" value="Ajouter" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
