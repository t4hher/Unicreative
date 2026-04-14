import { Link } from "react-router-dom";

export default function PrintDetails(){
    return <div>
        <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Impression Numérique & Offset</h1>
                <p>Nous donnons vie à vos projets sur papier grâce à des solutions d'impression haute définition qui 
                valorisent votre image et garantissent un rendu professionnel.</p>
                </div>
                <img src="/rIcone.svg" alt="" />
            </div>
            <div className="split">
                <div className="horLine"></div>
                <img src="/sLogo.png" alt="" />
                <div className="horLine"></div>
            </div>
        <div className="titreCard"><h1>L'expertise de l'impression au service de votre marque.</h1></div>
        <div className="sDetails">
            <div className="sImg">
                <div id="site" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/print1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/print2.jpg" alt="Second slide"/>
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
                <h2>Service de Impression Numérique & Offset</h2>
                <p>
                Nous allons vous aider à imprimer vos cartes de visite, flyers, catalogues, dépliants et affiches publicitaires avec 
                une finition impeccable qui permettra de valoriser l'image de votre entreprise ou de votre marque.
                </p>
                <p>
                L’agence Unicreative de publicité à Fès, vous accompagne dans le choix des supports, des grammages et des finitions pour 
                adapter vos documents physiques et réussir votre communication de proximité. L’impression est le support tangible de votre 
                stratégie marketing. Nous produisons des supports adaptés à tous vos besoins de distribution et d'affichage :
                <ul><b>
                    <li>Cartes de visite et papier en-tête.</li>
                    <li>Flyers, prospectus et fiches produits.</li>
                    <li>Brochures piquées et catalogues dos carré collé.</li>
                    <li>Affiches publicitaires tous formats.</li>
                    <li>Dépliants 2 ou 3 volets, chemises à rabats.</li>
                    <li>Bâches, vinyles et Kakémonos.</li>
                    <li>Et bien d'autres...</li>
                    </b>
                </ul>
                </p>
                <h2>Pourquoi confier vos impressions à Unicreative ?</h2>
                <p>
                Un support imprimé de qualité est un gage de crédibilité pour vos prospects. Basée à Fès, l’agence Unicreative combine technologie 
                numérique pour les petits volumes et puissance de l'offset pour les grandes séries afin de vous offrir le meilleur rapport 
                qualité/prix du marché.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">1</span><h3>Une précision des couleurs garantie</h3>
                </div>
                <p>
                Nous ne nous contentons pas d'imprimer ; nous respectons votre identité. Nous veillons à la fidélité de vos codes couleurs 
                (Pantone ou CMJN) pour que chaque support soit le reflet exact de votre charte graphique.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">2</span><h3>Des finitions haut de gamme</h3>
                </div>
                <p>
                Le toucher est aussi important que la vue. Nous vous proposons une large gamme de finitions : pelliculage mat ou brillant, 
                vernis sélectif, gaufrage ou dorure, pour donner un aspect prestigieux et durable à vos documents.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">3</span><h3>Réactivité et suivi de production</h3>
                </div>
                <p>
                Tout comme pour nos projets de design, vous restez informé du processus. De la vérification de vos fichiers (BAT) à la 
                livraison finale, nous gérons les délais avec rigueur pour répondre à vos urgences événementielles ou commerciales.
                </p>
                <h2>FAQs</h2>
                <div class="faq-container">
                    <details>
                        <summary>Combien coûte une prestation d'impression ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Le prix dépend du volume, du type de papier et des finitions choisies. L'impression numérique est idéale pour 
                            les petites quantités rapides, tandis que l'offset devient très avantageux pour les gros tirages. Nous optimisons chaque devis selon vos quantités
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quelles sont les étapes pour lancer une commande d'impression ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Le processus est simple : validation de votre devis, envoi ou création de vos fichiers graphiques, vérification technique 
                            par nos experts, validation du Bon À Tirer (BAT), puis lancement en production et livraison.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quel est le délai de livraison pour mes supports imprimés ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Pour les travaux courants comme les cartes de visite ou flyers, comptez généralement 2 à 4 jours ouvrés. Pour les travaux 
                            de façonnage plus complexes (brochures, grands formats), le délai varie de 5 à 8 jours selon la quantité.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Comment préparer mes fichiers pour l'impression ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Vos fichiers doivent être envoyés de préférence en format PDF haute définition, avec une résolution de 300 DPI, en mode 
                            colorimétrique CMJN, et inclure une marge de sécurité (fonds perdus) de 3mm pour garantir une coupe parfaite.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Faites-vous la livraison partout au Maroc ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Absolument. En tant qu'agence globale basée à Fès, nous expédions vos commandes dans toutes les villes du Royaume, en veillant
                             à ce que vos supports arrivent en parfait état et dans les délais convenus.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
                        <div className="liendemandes"><Link className="liendemande" to="/demande/service">Demander</Link></div>
        </div>
    </div>
}