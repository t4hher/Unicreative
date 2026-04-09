export default function WebDetails(){
    return <div>
        <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Création Site Web</h1>
                <p>L'innovation au service de votre identité web. <b>Découvrez nos solutions de développement sur mesure.</b></p>
                </div>
                <img src="/site.svg" alt="" />
            </div>
            <div className="split">
                <div className="horLine"></div>
                <img src="/sLogo.png" alt="" />
                <div className="horLine"></div>
            </div>
        <div className="titreCard"><h1>L'innovation web, tout simplement.</h1></div>
        <div className="sDetails">
            <div className="sImg">
                <div id="site" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/site1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/site2.jpg" alt="Second slide"/>
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
                <h2>Service de Création des Sites Web</h2>
                <p>
                Vous êtes à la recherche d'une agence web capable de créer un site web d'excellence ou de concevoir un site internet 
                professionnel ? L'unicreative, est une agence web basée à Fès, 
                spécialisé dans la création de site web et le référencement SEO.

                Notre Agence de développement web Maroc vous offre des solutions et services de qualité afin d'aider les entreprises 
                et particuliers à tirer le meilleur parti de la révolution digitale. Créer le site web dont vous avez toujours rêvez 
                (site e-commerce, site vitrine, WordPress, blogs…) avec un design moderne entièrement réactif pour tous les appareils 
                (téléphone portable, tablette, Pc portable, ordinateur de bureau…)
                </p>
                <h2>Pourquoi choisir l'agence web L'unicreative ?</h2>
                <p>
                    L'unicreative, est une agence conception de site web basée au Maroc à Fès, existe depuis 12 ans déjà et avec plus de 100
                    réalisations réparties entre le Maroc et la France. Nous accompagnons nos clients durant toutes les étapes de la création
                    site web (étude, UX/UI, conception, design, développement, hébergement, maintenance...) et nous les apportons des solutions
                    de haute performance et uniques.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">1</span><h3>Nous construisons des sites web puissants.</h3>
                </div>
                <p>
                    Nous allons vous aider à créer un site internet de qualité et attrayant qui vous permettra d'être plus visible sur Internet 
                    et de développer votre présence sur le web.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">2</span><h3>Site web sècurisè et plus rapide.</h3>
                </div>
                <p>
                    Les internautes sont des visiteurs pressés, la vitesse de votre site web est donc un facteur déterminant ! Elle influe 
                    sur l’expérience utilisateur... Grâce aux fonctionnalités intégré de notre outil de développement, nous concevons des sites web plus rapide.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">3</span><h3>Vous êtes le patron.</h3>
                </div>
                <p>
                    Nous vous donnerons des options, des outils et des informations pour faire les bons choix. Nous vous donnerons des recommandations, 
                    mais au final, chaque décision concernant votre site Web sera la vôtre.
                </p>
                <h2>FAQs</h2>
                <div class="faq-container">
                    <details>
                        <summary>Combien Coûte Un Site Web ? <span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>Le prix de la création d'un site web dépend du temps de travail déployé pour les différentes fonctionnalités, la création ou non des contenus, le nombre de pages, complexité de projet, les outils utilisés pour accomplir la tâche, la nature unique du design, les modules, l'hébergement, le nom de domaine...</p>
                        </div>
                    </details>

                    <details>
                        <summary>Comment Créer Un Site Web ? <span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>Nous suivons un processus rigoureux : analyse de vos besoins, conception du design (UI/UX), développement technique, phase de tests et mise en ligne avec suivi personnalisé.</p>
                        </div>
                    </details>

                    <details>
                        <summary>Quel Est Le Délai Pour La Création D'un Site Web ? <span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>Le délai varie selon la complexité : généralement 2 à 4 semaines pour un site vitrine et 6 à 10 semaines pour une plateforme e-commerce ou une application web complexe.</p>
                        </div>
                    </details>

                    <details>
                        <summary>Quel Langage Utilisez-Vous Pour Développer Un Site Internet ? <span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>Nous maîtrisons les technologies les plus modernes comme React, Laravel, Node.js et WordPress selon les besoins spécifiques de votre projet.</p>
                        </div>
                    </details>

                    <details>
                        <summary>Pourquoi Le Référencement Naturel SEO Est Important ? <span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>Le SEO permet à votre site d'apparaître dans les premiers résultats de recherche (Google), attirant ainsi des visiteurs qualifiés sans payer de publicité.</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    </div>
}