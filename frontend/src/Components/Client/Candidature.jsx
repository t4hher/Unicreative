import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOffres } from "../../Store/ContentSlice";
import { useEffect } from "react";

export default function Candidature() {
    const offres = useSelector((state) => state.content.offres || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOffres());
    }, [dispatch]);
    return (
        <div className="about">
            <div className="sBanner">
            <div>
            <h1 className="titrerealisation">Candidature</h1>
            <p>Votre talent est l'ingrédient qui manque à nos prochaines créations. <b>Rejoignez l'aventure Unicreative</b></p>
            </div>
            <img src="/interview.svg" alt="" />
            </div>
            <div>
                <div className="split">
                    <div className="horLine"></div>
                    <img src="/sLogo.png" alt="" />
                    <div className="horLine"></div>
                </div>
                <div className="titreCard"><h1>Devenez le prochain visage de l'innovation chez Unicreative.</h1></div>
                {
                    (status==="loading")
                    ? <div className="cards text-center text-secondary"><h1>Chargement ...</h1></div>
                    :<>
                        <div className="cards">
                            {offres.map(o=><div className="card">
                                {o.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" className="d-block w-100"/> : <img src={`http://127.0.0.1:8000/storage/${o.image}`}/>}
                                <div className="card-body">
                                    <h5 className="card-title">{o.titre}</h5>
                                    <div className="card-text">
                                        <p>
                                            <strong>Description:</strong>
                                            {o.description.length>110 ? o.description.substring(0, 110) + "..." : o.description}
                                        </p>
                                        <p><strong>Type De Contrat: </strong> {o.typeContrat}</p>
                                    </div>
                                    <Link to="/postuler/candidature" className="btn-postuler">Postuler</Link>
                                </div>
                            </div>)}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}