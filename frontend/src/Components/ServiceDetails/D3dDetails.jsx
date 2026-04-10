import { Link } from "react-router-dom";

export default function D3dDetails(){
    return <div>
        <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Modélisation 3D</h1>
                <p>Nous donnons une nouvelle dimension à vos concepts grâce à des créations en trois dimensions ultra-réalistes, 
                    conçues pour sublimer vos projets et offrir une immersion totale à vos clients.</p>
                </div>
                <img src="/3d.png" alt="" />
            </div>
            <div className="split">
                <div className="horLine"></div>
                <img src="/sLogo.png" alt="" />
                <div className="horLine"></div>
            </div>
        <div className="titreCard"><h1>Visualisez l'invisible, modélisez l'avenir.</h1></div>
        <div className="sDetails">
            <div className="sImg">
                <div id="site" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/3d1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/3d2.jpg" alt="Second slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-bs-target="#site" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" data-bs-target="#site" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
            <div className="sBody">
                <h2>Service de Conception et Rendu 3D</h2>
                <p>
                Nous allons vous aider à modéliser des produits, des espaces architecturaux, des prototypes industriels et des environnements
                 virtuels de haute qualité qui vous permettront de convaincre vos investisseurs et de séduire vos clients.
                </p>
                <p>
                L’agence Unicreative de design 3D à Fès vous accompagne dans la visualisation, la texturation et l'éclairage
                 de vos modèles pour un résultat photo-réaliste saisissant. Nous analysons vos plans et vos croquis pour créer
                  des volumes cohérents qui valorisent chaque détail de votre projet. Nous produisons des rendus adaptés à tous vos besoins de présentation :
                <ul><b>
                    <li>Architecture et décoration d'intérieur.</li>
                    <li>Modélisation de produits et packaging.</li>
                    <li>Animation 3D et survols virtuels.</li>
                    <li>Prototypes industriels et pièces techniques.</li>
                    <li>Rendus 360° pour immersion totale.</li>
                    <li>Et bien d'autres...</li>
                    </b>
                </ul>
                </p>
                <h2>Pourquoi confier vos projets 3D à Unicreative ?</h2>
                <p>
                Une modélisation réussie est celle qui allie précision technique et esthétique artistique. Basée à Fès, l’agence Unicreative utilise les 
                logiciels les plus performants du marché pour transformer de simples esquisses en images numériques d'une clarté absolue.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">1</span><h3>Un réalisme à couper le souffle</h3>
                </div>
                <p>
                Nous ne nous contentons pas de créer des formes ; nous simulons la réalité. Grâce à un travail méticuleux sur les textures (matériaux) et 
                la gestion de la lumière, nous créons des visuels si détaillés qu'ils sont souvent indiscernables de véritables photographies.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">2</span><h3>Une aide précieuse à la décision</h3>
                </div>
                <p>
                Visualiser un projet avant même qu'il ne soit construit ou fabriqué est un atout stratégique majeur. La 3D vous permet de tester différentes 
                options de couleurs, de matériaux ou d'agencements, vous évitant ainsi des erreurs coûteuses lors de la phase de production réelle.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">3</span><h3>Un impact marketing décuplé</h3>
                </div>
                <p>
                Tout comme pour nos projets graphiques, la 3D apporte une valeur ajoutée exceptionnelle à votre communication. Des images de synthèse 
                percutantes attirent l'œil sur vos catalogues, vos sites web ou vos réseaux sociaux, offrant une image moderne et innovante de votre entreprise.
                </p>
                <h2>FAQs</h2>
                <div class="faq-container">
                    <details>
                        <summary>Combien coûte un projet de modélisation 3D ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Le coût dépend du niveau de détail requis, de la complexité des formes et du nombre de rendus finaux. Une 
                            simple modélisation d'objet est plus rapide qu'une visite virtuelle complète d'un immeuble. Nous étudions 
                            chaque cahier des charges pour vous offrir une solution adaptée.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quel est le délai de réalisation pour un rendu 3D ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Pour un objet simple ou une vue fixe d'intérieur, comptez généralement 4 à 7 jours ouvrés. Pour des projets d'animation ou des 
                            modélisations complexes incluant de nombreux détails, le délai peut s'étendre de 2 à 4 semaines selon la charge de travail.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quels fichiers me fournissez-vous à la fin du projet ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Nous livrons des images de haute résolution (JPG, PNG, PDF) pour vos supports de communication. Si besoin, nous pouvons 
                            également vous fournir les fichiers sources 3D (OBJ, FBX, STL) adaptés à vos outils de fabrication ou d'impression 3D.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Peut-on modifier le projet une fois la 3D lancée ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Oui, c'est l'un des grands avantages de la 3D. Nous prévoyons des étapes de validation à chaque niveau (volume, texture, éclairage). 
                            Cela nous permet d'ajuster les détails selon vos retours avant de lancer le calcul du rendu final haute définition.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Faites-vous également de l'animation vidéo 3D ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Absolument. En plus des images fixes, nous réalisons des animations fluides qui permettent de faire le tour d'un produit ou de 
                            visiter virtuellement un bâtiment, offrant ainsi une expérience encore plus immersive et convaincante pour votre audience.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
            <div className="liendemandes"><Link className="liendemande" to={"/demande"}>Demander</Link></div>
        </div>
    </div>
}