import { Link } from "react-router-dom";

export default function EventDetails(){
    return <div>
        <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Organisation d’Événements</h1>
                <p>
                Nous transformons vos moments forts en expériences mémorables grâce à une planification rigoureuse et une créativité sans limite 
                pour tous vos événements professionnels et privés.
                </p>
                </div>
                <img src="/event.svg" alt="" />
            </div>
            <div className="split">
                <div className="horLine"></div>
                <img src="/sLogo.png" alt="" />
                <div className="horLine"></div>
            </div>
        <div className="titreCard"><h1>Créer l'émotion, marquer les esprits.</h1></div>
        <div className="sDetails">
            <div className="sImg">
                <div id="site" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/event1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/event2.jpg" alt="Second slide"/>
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
                <h2>Service de Gestion Événementielle</h2>
                <p>
                Nous allons vous aider à organiser des séminaires, lancements de produits, team buildings et conférences et de 
                haute qualité qui vous permettront de renforcer vos liens et de valoriser l'image de votre entreprise ou de votre marque.
                </p>
                <p>
                L'unicreative vous offre une large gamme de services innovants. Une production technique, un service complet 
                basé sur l’expertise et l’esprit créatif de nos spécialistes. Nous vous proposons des solutions innovantes 
                adaptées à vos besoins pour garantir la réussite de vos événements :
                <ul><b>
                    <li>Séminaires et conventions d'entreprise.</li>
                    <li>Lancements de produits et inaugurations.</li>
                    <li>Team buildings et activités de cohésion.</li>
                    <li>Conférences et forums professionnels.</li>
                    <li>Fêtes et buffets</li>
                    <li>Organisation salons et séminaires.</li>
                    <li>Et bien d'autres...</li>
                    </b>
                </ul>
                </p>
                <h2>Pourquoi confier vos événements à Unicreative ?</h2>
                <p>
                Un événement réussi est celui qui allie une organisation parfaite à une ambiance unique. Basée à Fès, l’agence Unicreative mobilise 
                un réseau de partenaires fiables et une expertise logistique pour garantir le succès de votre manifestation du début à la fin.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">1</span><h3>Un concept créatif et personnalisé</h3>
                </div>
                <p>
                Nous ne nous contentons pas de louer une salle ; nous créons une atmosphère. Chaque détail, de la thématique visuelle à la scénographie, 
                est étudié pour être en parfaite cohérence avec l'identité de votre marque et le message que vous souhaitez transmettre.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">2</span><h3>Une gestion logistique de A à Z</h3>
                </div>
                <p>
                La tranquillité d'esprit est notre priorité. Nous gérons l'intégralité des aspects techniques : recherche du lieu, traiteur, sonorisation, 
                éclairage, décoration et accueil. Vous pouvez ainsi vous concentrer pleinement sur vos invités pendant que nous gérons les coulisses.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">3</span><h3>Un impact durable sur votre audience</h3>
                </div>
                <p>
                Tout comme pour nos projets numériques, l'événementiel est un levier de communication puissant. Nous intégrons des solutions innovantes 
                (animations interactives, captation vidéo, réseaux sociaux) pour faire rayonner votre événement bien au-delà de la journée J.
                </p>
                <h2>FAQs</h2>
                <div class="faq-container">
                    <details>
                        <summary>Combien de temps à l'avance faut-il vous contacter ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Pour un événement de petite taille (réunion, team building local), comptez environ 3 à 4 semaines. Pour des événements d'envergure 
                            (congrès, lancement national), il est préférable de nous contacter 2 à 4 mois à l'avance pour sécuriser les meilleurs prestataires.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Pouvez-vous gérer l'aspect technique et audiovisuel ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Absolument. En tant qu'agence globale, nous fournissons tout le matériel nécessaire : écrans géants, sonorisation professionnelle, 
                            régie lumière et captation vidéo en direct pour assurer une diffusion fluide de vos présentations.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Gérez-vous également la communication de l'événement ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            C'est notre force. Nous concevons tous vos supports (invitations, badges, signalétique, habillage du lieu) et nous pouvons 
                            également assurer la promotion de votre événement sur le web et les réseaux sociaux pour maximiser la participation.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
                        <div className="liendemandes"><Link className="liendemande" to={"/demande"}>Demander</Link></div>
        </div>
    </div>
}