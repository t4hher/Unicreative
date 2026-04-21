import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchReali } from "../../Store/ContentSlice";

export default function Realisation(){

    const realisations = useSelector((state) => state.content.realisations || []);
    const status = useSelector((state) => state.content.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReali());
    }, [dispatch]);

    return(
        <div>
            <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Nos Réalisations</h1>
                <p>Des solutions sur mesure pour des clients uniques. <b>Découvrez l'impact de nos projets Web et Print.</b></p>
                </div>
                <img src="/rIcone.svg" alt="" />
            </div>
            <div className="split">
                        <div className="horLine"></div>
                        <img src="/sLogo.png" alt="" />
                        <div className="horLine"></div>
                    </div>
            <div className="titreCard"><h1>Parcourez le portfolio Unicreative.</h1></div>
            {
                (status === 'loading')
                ? <div className="cards text-center text-secondary"><h1>Chargement ...</h1></div>
                :<><div className="filter">
                    <span>Filtrer Par Type: </span>
                    <div className="filterBtn">
                        <a href="#" className="active">Tous</a>
                        <a href="#">Site Web</a>
                        <a href="#">Logo</a>
                        <a href="#">Print</a>
                    </div> 
                </div>
                <div class="imgrealisation">
                    {realisations.map(r=><div class="img-wrapper">
                        {r.image===null ? <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" className="d-block w-100"/> : <img src={`http://127.0.0.1:8000/storage/${r.image}`}/>}
                        <div class="overlay">
                            <span>{r.titre}</span>
                        </div>
                    </div>)}
                </div>
            </>
            }
        </div>
    )
}