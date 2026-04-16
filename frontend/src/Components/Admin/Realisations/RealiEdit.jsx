import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { fetchRealisationById} from "../../../Store/ContentSlice";

export default function RealiEdit(){
    const {id}=useParams();
    const dispatch=useDispatch();

    const {realisation,status}=useSelector((state)=>state.content);

     useEffect(() => {
            if (id) {
                dispatch(fetchRealisationById(id));
            }
        }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="dash-container">Chargement des détails...</div>;
    }
    const leReali=realisation.realisation;
    return(
        <div>
            <div className="dash-header">
            <div className="details-header">
                <Link to="/admin/realisations"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Modifier une realisation</h1>
            </div>
        </div>
            <div className="dash-body">
            <form className="container" action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Titre</label>
                    <input type="text" name="intitule" value={leReali?.titre} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1" >Type</label>
                    <select name="categorie" className="form-select" value={leReali?.type=="Digital" ? 'Digital' :'Print'}>
                        <option value="Digital" >Digital</option>
                        <option value="Print">Print</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" name="image" className="form-control" value={leReali?.image}/>
                </div>
                <input type="submit" value="Modifier" className=" form-control btn btn-primary"/>
            </form>
        </div>
        </div>
    )
}
