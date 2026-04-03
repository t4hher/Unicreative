export default function Accueil(){
    return <div>
        <div className="banner">
            <img src="https://www.creative-elements.ca/wp-content/uploads/2025/08/What-is-Custom-web-design-and-web-development-scaled-1.jpg" alt="" className="bannerImg"/>
            <div className="content">
                <p className="bannerPara">De la stratégie au design, <span style={{color:'#d21d16'}}>Unicreative</span> propulse votre marque avec des outils digitaux innovants. Un accompagnement créatif complet pour maximiser votre impact et votre visibilité.</p>
                <button className="bannerButton">Voir plus</button>
            </div>
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
        <div className="clients">
            <h1 className="clienttitre">Ils nous font confiance</h1>
            <div className="clientimg">
                <img src="/Clients/Client_11.png" alt="client11" />
                <img src="/Clients/Client_2.png" alt="Client2" />
                <img src="/Clients/Client_17.png" alt="Client17" />
                <img src="/Clients/Client_4.png" alt="Client4" />
                <img src="/Clients/Client_19.png" alt="Client19" />
            </div>
        </div>
        <div className="Apropos">
            <div className="paragraph">
                <h1>Qui sommes nous ?</h1>
                <p className="aproposparagraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore hic esse obcaecati doloremque repellendus recusandae
                debitis tempore praesentium ad omnis
                distinctio illum atque ut consequatur fugit, voluptates itaque! Debitis, ut!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
                in. Sit, iusto rerum qui magni, blanditiis quidem accusamus voluptatem nihil
                sapiente assumenda, optio totam vel eos veniam laboriosam temporibus
                consectetur.
                </p>
                <button className="btnplus">Voire Plus</button>
            </div>
                <img src="/publicite.png" alt="publicite" className="imagePub"/>
        </div>
        <div className="services">
            <div className="header">
                <h1>Explorez Nos Solutions <br/>Digitales et d'Impression</h1>
                <div className="description">
                    <p>De la création de votre identité visuelle au développement de vos plateformes web et mobiles, nous transformons vos idées en solutions numériques concrètes.</p>
                    <button>Consulter</button>
                </div>
            </div>
            <div class="body">
        
                <div class="bigImg">
                    <div class="title-overlay">
                        <h3>Création Site Web</h3>
                    </div>
                    <img src="/services/web.jpg" alt="Web Design"/>
                </div>

                <div class="smallImg">
                    
                    <div class="sImg">
                        <div class="title-overlay">
                            <h3>Conception Graphique</h3>
                        </div>
                        <img src="/services/card.jpg" alt="Design"/>
                    </div>

                    <div class="sImg">
                        <div class="title-overlay">
                            <h3>Impression Numérique / Offset</h3>
                        </div>
                        <img src="/services/voiture.png" alt="Mobile App"/>
                    </div>

                    <div class="sImg">
                        <div class="title-overlay">
                            <h3>Création des Applications</h3>
                        </div>
                        <img src="/services/app.jpg" alt="Shop"/>
                    </div>

                    <div class="sImg">
                        <div class="title-overlay">
                            <h3>Conception 3D</h3>
                        </div>
                        <img src="/services/3ddesign.jpg" alt="Ads"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
}
