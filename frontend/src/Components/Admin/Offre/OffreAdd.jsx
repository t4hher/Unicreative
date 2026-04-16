import { Link} from "react-router-dom";

export default function OffreAdd(){
    return <div className="dash-container">
        <div className="dash-header">
        <div className="details-header">
                <Link to="/admin/offres"><img src="https://img.icons8.com/?size=100&id=26194&format=png&color=ffffff" width={20}/></Link>
                <h1>Ajouter Offre de Recrutement</h1>
            </div>
        </div>
        <div className="dash-body">
            <form className="container" action="" method="post" encType="">
                <div className="mb-2">
                    <label className="m-1">Titre</label>
                    <input type="text" name="titre" className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className="m-1">Description</label>
                    <textarea name="description" className="form-control"></textarea>
                </div>
                <div className="mb-2">
                    <label className="m-1">Type de Contrat</label>
                    <select name="typeContrat" className="form-select">
                        <option value="Print">CDI</option>
                        <option value="Print">CDD</option>
                        <option value="Print">ANAPEC</option>
                        <option value="Print">Freelance</option>
                        <option value="Digtal">Stage PFE</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label className="m-1">Profile</label>
                    <input type="text" name="profil" className="form-control"/>
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