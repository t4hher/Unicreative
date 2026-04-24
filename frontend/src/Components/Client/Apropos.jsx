import { Link } from "react-router-dom";

export default function Apropos(){
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae incidunt perferendis amet eos ut itaque voluptas
                    laborum molestiae expedita voluptate repellat, nemo, accusantium consequatur? Eos veritatis et fugit enim. Sed commodi
                    cupiditate at facere sequi perferendis numquam, necessitatibus possimus quibusdam consequatur, totam deleniti, repellendus 
                    nulla assumenda alias laudantium voluptas aspernatur. Temporibus dolor facere illo beatae molestiae necessitatibus hic ullam 
                    reprehenderit porro consectetur repudiandae distinctio perspiciatis nulla qui ducimus id eius delectus odio, itaque, 
                    dolorum autem quos nostrum ea neque. Aspernatur distinctio, repellat iure rerum quaerat voluptatum esse ab corrupti commodi 
                    laudantium eius quae sit laborum praesentium harum cupiditate iste optio?</p>
            </div>
            <img src="https://images.pexels.com/photos/7315755/pexels-photo-7315755.jpeg?_gl=1*5n1ce4*_ga*MjA2NjYwMzkwNi4xNzQwNjU5Nzc4*_ga_8JE65Q40S6*czE3NzUzMzk2MzEkbzE4JGcxJHQxNzc1MzQwMDA3JGo2MCRsMCRoMA.." alt="" />
        </div>
        <div className="stats">
            <p className="stats-header">Notre Expertise en Chiffres</p>
            <h1 className="stats-titre">Nous propulsons votre présence digitale avec des solutions créatives qui transforment vos idées en succès commerciaux.</h1>
            <div className="stats-content">
                <div className="stat">
                    <h1 className="stat-number">+7000</h1>
                    <span className="stat-label">Projets Réalisés</span>
                </div>
                <div className="stat">
                    <h1 className="stat-number">+300</h1>
                    <span className="stat-label">Clients Heureux</span>
                </div>
                <div className="stat">
                    <h1 className="stat-number">+12</h1>
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
                <div>unicreative@example.com</div>
            </div>
            <div className="info">
                <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=d21d16" alt="" />
                <h3>Téléphone</h3>
                <div>05 . 35 . 65 . 39 . 85</div>
            </div>
        </div>
    </div>
}