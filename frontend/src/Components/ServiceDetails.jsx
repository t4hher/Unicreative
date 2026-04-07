export default function ServiceDetails(){
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
                <h3>Agence création site web à Fès - Maroc</h3>
                <div>
                Vous êtes à la recherche d'une agence web capable de créer un site web d'excellence ou de concevoir un site internet 
                professionnel ? L'unicreative, est une agence web basée à Fès, 
                spécialisé dans la création de site web et le référencement SEO.

                Notre Agence de développement web Maroc vous offre des solutions et services de qualité afin d'aider les entreprises 
                et particuliers à tirer le meilleur parti de la révolution digitale. Créer le site web dont vous avez toujours rêvez 
                (site e-commerce, site vitrine, WordPress, blogs…) avec un design moderne entièrement réactif pour tous les appareils 
                (téléphone portable, tablette, Pc portable, ordinateur de bureau…)
                </div>
            </div>
        </div>
    </div>
}