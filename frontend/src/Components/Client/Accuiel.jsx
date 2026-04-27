import { useEffect, useRef, useState } from 'react';
import { Link} from "react-router-dom";

export default function Accueil(){

    const Counter = ({ endValue, duration = 2000, label }) => {
        const countRef = useRef(null);
        const [hasStarted, setHasStarted] = useState(false);
      
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
                },
                { threshold: 0.3 }
            );
        
            if (countRef.current) {
                observer.observe(countRef.current);
            }
        
            return () => observer.disconnect();
        }, [hasStarted]);
        
        useEffect(() => {
            if (!hasStarted) return;
        
            let startTime = null;
            const startValue = 0;
        
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                    
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * (endValue - startValue) + startValue);
                if (countRef.current) {
                    countRef.current.innerText = current.toLocaleString();
                }
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }, [hasStarted, endValue, duration]);
        return (<span ref={countRef}>0</span>);
    };


    useEffect(() => {
    const img = document.querySelector('.imagePub'); 

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        entries[0].target.classList.add('active'); 
        observer.disconnect(); 
        }
    }, { threshold: 0.2 });

    if (img) observer.observe(img);

    return () => observer.disconnect();
    }, []);

    return <div>
        <div className="banner">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://www.creative-elements.ca/wp-content/uploads/2025/08/What-is-Custom-web-design-and-web-development-scaled-1.jpg" className="d-block w-100 bannerImg" alt="Slide 1"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1170&auto=format&fit=crop" className="d-block w-100 bannerImg" alt="Slide 2"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1659241869140-3cb7cdff42fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 bannerImg" alt="Slide 3"/>
                    </div>
                </div>
            </div>
            <div className="content">
                <p className="bannerPara">De la stratégie au design, <span style={{color:'#d21d16'}}>Unicreative</span> propulse votre marque avec des outils digitaux innovants. Un accompagnement créatif complet pour maximiser votre impact et votre visibilité.</p>
                <Link to="/aPropos" className="bannerButton">Voir plus</Link>
            </div>
        </div>
        <div className="Apropos">
            <div className="paragraph">
                <div className="header"><img src="/sLogo.png" alt=""/><h1>Qui sommes nous ?</h1></div>
                <p className="aproposparagraph">
                <b>L’Unicreative</b> est une agence de communication globale et de solutions digitales qui se distingue 
                par son approche pluridisciplinaire. Fruit d'une évolution de plus de 12 ans sous différentes dénominations, 
                l’agence a su affiner sa vision pour devenir aujourd'hui un acteur clé de l’accompagnement numérique au Maroc. L’agence s'efforce d'améliorer la visibilité et l'image de marque de ses partenaires à travers une présence omnicanale
                , garantissant ainsi une cohérence parfaite entre l'image réelle et l'identité numérique.
                </p>
                <Link  to="/aPropos" className="btnplus">Voire Plus</Link>
            </div>
            <img src="/nous.png" alt="publicite" className="imagePub"/>
        </div>
        <div className="valeurs">
            <h1>Nos Valeurs</h1>
            <div className="content container">
                <div className="valeur">
                    <img src="https://img.icons8.com/?size=100&id=qtmxiFzhBiJq&format=png&color=d21d16" alt="" className="icon"/>
                    <div className="titre">Engagement</div>
                    <div className="description">Votre réussite est notre priorité. Nous nous impliquons à 100% dans vos projets avec une exigence stricte sur le respect des délais.</div>
                </div>
                <div className="valeur">
                    <img src="https://img.icons8.com/?size=100&id=a7zCSTgv2xez&format=png&color=d21d16" alt="" className="icon"/>
                    <div className="titre">Créativité</div>
                    <div className="description">Nous transformons vos idées en expériences visuelles uniques et mémorables pour distinguer votre marque de la concurrence.</div>
                </div>
                <div className="valeur">
                    <img src="https://img.icons8.com/?size=100&id=6703&format=png&color=d21d16" alt="" className="icon"/>
                    <div className="titre">Performance</div>
                    <div className="description">Nous optimisons chaque levier technique pour garantir des résultats mesurables et une croissance durable de votre activité.</div>
                </div>
                <div className="valeur">
                    <img src="https://img.icons8.com/?size=100&id=99340&format=png&color=d21d16" alt="" className="icon"/>
                    <div className="titre">Qualité</div>
                    <div className="description">L'excellence est notre standard. Nous livrons des solutions robustes, soignées et parfaitement alignées sur vos besoins métier.</div>
                </div>
            </div>
        </div>
        <div className="stats">
            <p className="stats-header">Notre Expertise en Chiffres</p>
            <h1 className="stats-titre">Nous propulsons votre présence digitale avec des solutions créatives qui transforment vos idées en succès commerciaux.</h1>
            <div className="stats-content">
                <div className="stat">
                    <h1 className="stat-number">+<Counter endValue={7000}/></h1>
                    <span className="stat-label">Projets Réalisés</span>
                </div>
                <div className="stat">
                    <h1 className="stat-number">+<Counter endValue={300}/></h1>
                    <span className="stat-label">Clients Heureux</span>
                </div>
                <div className="stat">
                    <h1 className="stat-number">+<Counter endValue={12}/></h1>
                    <span className="stat-label">Ans d'Experience</span>
                </div>
            </div>
        </div>
        <div className="clients">
            <h1 className="clienttitre">Ils nous font confiance</h1>
            <div className="client-slider">
                <div className="client-track">
                    <img src="/Clients/Client_11.png" alt="c1" />
                    <img src="/Clients/Client_2.png" alt="c2" />
                    <img src="/Clients/Client_17.png" alt="c3" />
                    <img src="/Clients/Client_4.png" alt="c4" />
                    <img src="/Clients/Client_19.png" alt="c5" />
                
                    <img src="/Clients/Client_16.png" alt="c1" />
                    <img src="/Clients/Client_10.png" alt="c2" />
                    <img src="/Clients/Client_15.png" alt="c3" />
                    <img src="/Clients/Client_18.png" alt="c4" />
                    <img src="/Clients/Client_22.png" alt="c5" />
                </div>
            </div>
        </div>

        <div className="services">
            <div class="header">
                <div class="titre">
                    <h1>Explorez nos Solutions<br /> Digitales et d'Impression</h1>
                </div>
                <div class="description">
                    <p>
                    De la création de votre identité visuelle au développement de vos plateformes web et mobiles,
                    nous transformons vos idées en solutions numériques concrètes.
                    </p>
                    <Link to="/services" class="button">Consulter</Link>
                </div>
            </div>
            <div class="body">

                <div class="bigImg">
                    <div class="title-overlay">
                        <h4>Création Site Web</h4>
                        <Link to="/services/site-web"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                    </div>
                    <img src="/services/web.jpg" alt="Web Design"/>
                </div>

                <div class="smallImg">

                    <div class="sImg">
                        <div class="title-overlay">
                            <h4>Conception Graphique</h4>
                            <Link to="/services/design"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                        </div>
                        <img src="/services/card.jpg" alt="Design"/>
                    </div>

                    <div class="sImg">
                        <div class="title-overlay">
                            <h4>Impression Numérique / Offset</h4>
                            <Link to="/services/print"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                        </div>
                        <img src="/services/voiture.png" alt="Mobile App"/>
                    </div>

                    <div class="sImg">
                        <div class="title-overlay">
                            <h4>Création des Applications</h4>
                            <Link to="/services/application"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                        </div>
                        <img src="/services/app.jpg" alt="Shop"/>
                    </div>

                    <div class="sImg">
                        <div class="title-overlay">
                            <h4>Conception 3D</h4>
                            <Link to="/services/3d"><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></Link>
                        </div>
                        <img src="/services/3ddesign.jpg" alt="Ads"/>
                    </div>

                </div>
            </div>
        </div>
        <div className="infos">
            <div className="info">
                <img src="https://img.icons8.com/?size=100&id=2436&format=png&color=d21d16" alt="" />
                <h3>Localisation</h3>
                <div>Bureaux Ibn Yassin à côté de l, Institut francais, Ave Lalla Hasnae, Fès 30050.</div>
            </div>
            <div className="info">
                <img src="https://img.icons8.com/?size=100&id=63&format=png&color=d21d16" alt="" />
                <h3>E-mail</h3>
                <div>lunicreative.maroc@gmail.com</div>
            </div>
            <div className="info">
                <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=d21d16" alt="" />
                <h3>Téléphone</h3>
                <div>05 . 35 . 65 . 39 . 85</div>
            </div>
        </div>
    </div>
}
