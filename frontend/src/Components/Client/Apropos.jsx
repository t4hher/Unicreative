import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Apropos(){

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
        const img = document.querySelector('.aprp'); 
    
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
            entries[0].target.classList.add('active'); 
            observer.disconnect(); 
            }
        }, { threshold: 0.2 });
    
        if (img) observer.observe(img);
    
        return () => observer.disconnect();
    }, []);

    return <div className="about">
        <div className="banner">
            <img src="/apropos/banner.png" alt="" className="bannerImg"/>
            <div className="content">
                <img src="/sLogo.png" alt="" height={80}/>
                <p className="bannerPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eius, magni perferendis quam cum quasi.</p>
            </div>
        </div>
        <div className="split">
            <div className="horLine"></div>
            <img src="/sLogo.png" alt="" />
            <div className="horLine"></div>
        </div>
        <div className="history">
            <div>
                <h1>Notre Histoire :</h1>
                <p><b>L’Unicreative</b> est une agence de communication globale et de solutions digitales qui se distingue par son approche pluridisciplinaire. 
                    Fruit d'une évolution de plus de 12 ans sous différentes dénominations, l’agence a su affiner sa vision pour devenir aujourd'hui un 
                    acteur clé de l’accompagnement numérique au Maroc. Le nom même de l’entreprise, fusion des concepts <b>« Unique »</b> et <b>« Creative »</b>, 
                    reflète son ambition : offrir des solutions sur mesure qui allient originalité esthétique et performance technologique. <br />
                    <b>L’Unicreative</b> s'efforce d'améliorer la visibilité et l'image de marque de ses partenaires à travers une présence omnicanale, 
                    garantissant ainsi une cohérence parfaite entre l'image réelle et l'identité numérique.</p>
            </div>
            <img src="https://images.pexels.com/photos/7315755/pexels-photo-7315755.jpeg?_gl=1*5n1ce4*_ga*MjA2NjYwMzkwNi4xNzQwNjU5Nzc4*_ga_8JE65Q40S6*czE3NzUzMzk2MzEkbzE4JGcxJHQxNzc1MzQwMDA3JGo2MCRsMCRoMA.." className="aprp"/>
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
        <div className="split">
            <div className="horLine"></div>
            <img src="/sLogo.png" alt="" />
            <div className="horLine"></div>
        </div>
        <div className="pourquoi">
            <div class="header">
                <div class="titre">
                    <h1>Pourquoi Nous ?</h1>
                    <p>
                    Nous vous laissons le découvrir par vous-mêmes !
                    </p>
                </div>
                <div class="description">
                    <Link to="/realisations" class="button">Consulter</Link>
                </div>
            </div>
            <div class="body">
                <div class="bigImg">
                    <div class="title-overlay">
                        <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                    </div>
                    <img src="/Realisation/d1.jpg" alt="Web Design"/>
                </div>
                <div class="smallImg">
                    
                    <div class="sImg">
                        <div class="title-overlay">
                    
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/l1.jpg" alt="Design"/>
                    </div>
                    <div class="sImg">
                        <div class="title-overlay">
                    
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/p1.jpg" alt="Mobile App"/>
                    </div>
                    <div class="sImg">
                        <div class="title-overlay">
                            
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/s1.jpg" alt="Shop"/>
                    </div>
                    <div class="sImg">
                        <div class="title-overlay">
                            
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/d2.jpg" alt="Ads"/>
                    </div>
                </div>
                <div class="bigImg">
                    <div class="title-overlay">
                        <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                    </div>
                    <img src="/Realisation/l2.jpg" alt="Web Design"/>
                </div>
                <div class="smallImg">
                    
                    <div class="sImg">
                        <div class="title-overlay">
                    
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/p2.jpg" alt="Design"/>
                    </div>
                    <div class="sImg">
                        <div class="title-overlay">
                    
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/s2.jpg" alt="Mobile App"/>
                    </div>
                    <div class="sImg">
                        <div class="title-overlay">
                            
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/d3.jpg" alt="Shop"/>
                    </div>
                    <div class="sImg">
                        <div class="title-overlay">
                            
                            <a href=""><img src="https://img.icons8.com/?size=100&id=83168&format=png&color=ffffff" alt="" /></a>
                        </div>
                        <img src="/Realisation/l3.jpg" alt="Ads"/>
                    </div>
                </div>
            </div>
        </div>
        <section class="horaires-container">
            <h1>Nos horaires :</h1>
            <ul class="horaires-list">
                <li>
                    <span class="jour">Lundi</span>
                    <span class="heure">9H00</span>
                    <span class="heure">19H00</span>
                </li>
                <li>
                    <span class="jour">Mardi</span>
                    <span class="heure">9H00</span>
                    <span class="heure">19H00</span>
                </li>
                <li>
                    <span class="jour">Mercredi</span>
                    <span class="heure">9H00</span>
                    <span class="heure">19H00</span>
                </li>
                <li>
                    <span class="jour">Jeudi</span>
                    <span class="heure">9H00</span>
                    <span class="heure">19H00</span>
                </li>
                <li>
                    <span class="jour">Vendredi</span>
                    <span class="heure">9H00</span>
                    <span class="heure">19H00</span>
                </li>
                <li>
                    <span class="jour">Samedi</span>
                    <span class="heure">9H00</span>
                    <span class="heure">13H00</span>
                </li>
            </ul>
        </section>
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