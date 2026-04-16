import { Link} from "react-router-dom";

export default function ServiceAdd(){
    return <div className="dash-container">
        <div className="dash-header">
            <div className="details-header">
                <Link to="/admin/services"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Ajouter Service</h1>
            </div>
        </div>
        <div className="dash-body">
            <form className="container" action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Intitulé</label>
                    <input type="text" name="intitule" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1">Catégorie</label>
                    <select name="categorie" className="form-select">
                        <option value="Digtal">Digtal</option>
                        <option value="Print">Print</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label className="m-1">Image</label>
                    <input type="file" name="image" className="form-control"/>
                </div>
                <input type="submit" value="Ajouter" className=" form-control btn btn-primary"/>
            </form>
        </div>
    </div>
}
