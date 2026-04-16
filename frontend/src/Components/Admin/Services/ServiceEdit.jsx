import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { fetchServiceById } from "../../../Store/ContentSlice";

export default function ServiceEdit(){
    const {id}=useParams();
    const dispatch=useDispatch();

    const {service,status}=useSelector((state)=>state.content);

     useEffect(() => {
            if (id) {
                dispatch(fetchServiceById(id));
            }
        }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="dash-container">Chargement des détails...</div>;
    }
    const leService=service.service;
    return(
        <div>
            <div className="dash-header">
            <div className="details-header">
                <Link to="/admin/services"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Modifier un Service</h1>
            </div>
        </div>
            <div className="dash-body">
            <form className="container" action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Intitulé</label>
                    <input type="text" name="intitule" value={leService?.intitule} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1" >Catégorie</label>
                    <select name="categorie" className="form-select" value={leService?.categorie=="Digital" ? 'Digital' :'Print'}>
                        <option value="Digital" >Digital</option>
                        <option value="Print">Print</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" className="form-control" value={leService?.description}></textarea>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" name="image" className="form-control" value={leService?.image}/>
                </div>
                <input type="submit" value="Modifier" className=" form-control btn btn-primary"/>
            </form>
        </div>
        </div>
    )
}
