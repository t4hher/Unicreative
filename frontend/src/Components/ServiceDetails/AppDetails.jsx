import { Link } from "react-router-dom";

export default function AppDetails(){
    return <div>
        <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Création d’Applications</h1>
                <p>Nous transformons vos concepts en solutions mobiles et desktop innovantes, conçues 
                    pour offrir une performance optimale et une expérience utilisateur fluide sur tous les écrans.</p>
                </div>
                <img src="/app.svg" alt="" />
            </div>
            <div className="split">
                <div className="horLine"></div>
                <img src="/sLogo.png" alt="" />
                <div className="horLine"></div>
            </div>
        <div className="titreCard"><h1>L'innovation logicielle au cœur de votre croissance.</h1></div>
        <div className="sDetails">
            <div className="sImg">
                <div id="site" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/app1.png" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/app2.jpg" alt="Second slide"/>
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
                <h2>Service de Développement d'Applications</h2>
                <p>
                Nous allons vous aider à concevoir des applications mobiles (iOS/Android), des logiciels de gestion et des solutions métiers 
                sur mesure qui vous permettront d'optimiser vos processus et de fidéliser vos utilisateurs.
                </p>
                <p>
                L’agence Unicreative de développement au Maroc vous accompagne dans l'architecture, le codage et le déploiement de vos projets 
                digitaux les plus ambitieux. Nous analysons vos flux de travail pour créer des outils intelligents qui simplifient le quotidien 
                de vos clients et de vos collaborateurs. Nous développons des solutions adaptées à vos objectifs technologiques :
                <ul><b>
                    <li>Applications mobiles natives et hybrides.</li>
                    <li>Logiciels de gestion interne (ERP/CRM).</li>
                    <li>Plateformes de services à la demande.</li>
                    <li>Outils métiers et tableaux de bord.</li>
                    <li>Applications Web progressives (PWA).</li>
                    <li>Solutions connectées et API.</li>
                    <li>Et bien d'autres...</li>
                    </b>
                </ul>
                </p>
                <h2>Pourquoi confier votre projet mobile à Unicreative ?</h2>
                <p>
                Une application réussie est celle qui allie robustesse technique et simplicité d'utilisation. Basée à Fès, l’agence Unicreative 
                mobilise les meilleures technologies actuelles pour garantir la pérennité et la sécurité de vos données tout en offrant une interface élégante.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">1</span><h3>Une expérience utilisateur (UX) centrée sur l'humain</h3>
                </div>
                <p>
                Nous ne nous contentons pas de coder ; nous concevons des parcours. Chaque bouton, chaque transition et chaque fonctionnalité est étudié pour 
                être intuitif, réduisant ainsi le temps d'apprentissage et maximisant l'engagement de vos utilisateurs.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">2</span><h3>Performance et scalabilité</h3>
                </div>
                <p>
                La vitesse est cruciale. Nos applications sont optimisées pour charger instantanément, même avec une base de données complexe. Nous utilisons
                 des architectures modernes qui permettent à votre outil de grandir en même temps que votre entreprise.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">3</span><h3>Maintenance et évolution continue</h3>
                </div>
                <p>
                Tout comme pour nos projets web, votre application bénéficie d'un suivi rigoureux. Nous assurons les mises à jour de sécurité, la 
                correction d'éventuels bugs et l'ajout de nouvelles fonctionnalités pour que votre outil reste toujours à la pointe de la technologie.
                </p>
                <h2>FAQs</h2>
                <div class="faq-container">
                    <details>
                        <summary>Combien coûte le développement d'une application ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Le budget dépend de la complexité des fonctionnalités (géolocalisation, paiement en ligne, messagerie, etc.) et des plateformes
                             visées. Chaque projet fait l'objet d'une analyse technique détaillée pour vous proposer un tarif juste et transparent.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quel est le délai moyen pour lancer une application ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Pour un prototype fonctionnel (MVP), comptez généralement 6 à 8 semaines. Pour une application complète et complexe, le délai 
                            peut s'étendre de 3 à 6 mois, incluant les phases de design, de développement intensif et de tests utilisateurs.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Développez-vous pour iOS et Android à la fois ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Absolument. Nous utilisons des technologies cross-platform performantes qui nous permettent de déployer votre application 
                            simultanément sur l'App Store et le Google Play Store, garantissant une expérience identique sur tous les smartphones.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Comment assurez-vous la sécurité de mes données ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            La sécurité est notre priorité absolue. Nous intégrons des protocoles de chiffrement avancés, des systèmes d'authentification 
                            sécurisés et nous effectuons des audits réguliers pour protéger les informations sensibles de votre entreprise et de vos clients.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Pouvez-vous reprendre une application déjà existante ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Oui, nous pouvons intervenir sur des projets en cours ou des applications existantes pour effectuer des refontes graphiques, 
                            optimiser le code ou ajouter de nouvelles fonctionnalités modernes afin de relancer votre produit digital.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
            <div className="liendemandes"><Link className="liendemande" to={"/demande"}>Demander</Link></div>
        </div>
    </div>
}