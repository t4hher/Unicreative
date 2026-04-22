import { Link } from "react-router-dom";
import { fetchServices } from "../../Store/ContentSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Services(){

    const servicesData = useSelector((state) => state.content.services || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    const [filter, setFilter] = useState("tous");

    const services = servicesData.filter(item => { 
        let result= true;
        if (filter === "Digital") return item.categorie === "Digital";
        if (filter === "Print") return item.categorie === "Print";
        return result;
    });

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    return <div className="service">
        <div className="sBanner">
            <div>
                <h1 className="titrerealisation">Nos Services</h1>
                <p>Transformez vos idées en actifs performants. Explorez nos services conçus pour <b>booster votre visibilité en ligne et hors ligne</b></p>
            </div>
            <img src="/browse.svg" alt="" />
        </div>
        <div className="split">
            <div className="horLine"></div>
            <img src="/sLogo.png" alt="" />
            <div className="horLine"></div>
        </div>
        <div className="titreCard"><h1>Créer l'Impact, du Digital au Papier</h1></div>
        {
            (status === 'loading')
                ? <div className="cards text-center text-secondary"><h1>Chargement ...</h1></div>
                :<><div className="filter">
                <span>Filtrer Par Catégorie: </span>
                <div className="filterBtn">
                    <a href="#" className={filter==='tous' ? "active" : ""} onClick={(e=>{e.preventDefault(); setFilter("tous")})}>Tous</a>
                    <a href="#" className={filter==='Digital' ? "active" : ""} onClick={(e=>{e.preventDefault(); setFilter("Digital")})}>Digital</a>
                    <a href="#" className={filter==='Print' ? "active" : ""} onClick={(e=>{e.preventDefault(); setFilter("Print")})}>Print</a>
                </div> 
            </div>
        <div className="cards">
            {
                services.map(s=><div className="card">
                    <div id={s.id} class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                {s.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" className="d-block w-100"/> : <img src={`http://127.0.0.1:8000/storage/${s.image}`} className="d-block w-100"/>}
                            </div>
                            <div class="carousel-item">
                                {s.image2===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" className="d-block w-100"/> : <img src={`http://127.0.0.1:8000/storage/${s.image2}`} className="d-block w-100"/>}
                            </div>
                        </div>
                        <a class="carousel-control-prev" data-bs-target={`#${s.id}`} role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" data-bs-target={`#${s.id}`} role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>
    
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{s.intitule}</h5>
                        <div className="card-text">
                            <p>
                                <strong>Description: </strong>
                                {s.description.length>100 ? s.description.substring(0, 100) + "..." : s.description}
                            </p>
                             <p><strong>Catégorie: </strong>{s.categorie}</p>
                        </div>
                        
                        <Link to={
                            s.intitule === "Création Site Web" ? "/services/site-web" : 
                            s.intitule === "Conception Graphique" ? "/services/design" : 
                            s.intitule === "Impression Numerique et Offset" ? "/services/print" : 
                            s.intitule === "Création des Applications" ? "/services/application" : 
                            s.intitule === "Modélisation 3D" ? "/services/3d" : 
                            "/services/event"
                        } 
                        className="btn-postuler"
                        >Consulter</Link>
                    </div>
                </div>
            )}
        </div></>
        }
    </div>
}