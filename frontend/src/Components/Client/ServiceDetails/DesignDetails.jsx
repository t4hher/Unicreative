import { Link } from "react-router-dom";

export default function DesignDetails(){
    return <div>
        <div className="sBanner">
                <div>
                <h1 className="titrerealisation">Conception Graphique</h1>
                <p>Nous donnons vie à vos idées à travers des créations visuelles uniques qui marquent les esprits et renforcent votre identité.</p>
                </div>
                <img src="/design.svg" alt="" />
            </div>
            <div className="split">
                <div className="horLine"></div>
                <img src="/sLogo.png" alt="" />
                <div className="horLine"></div>
            </div>
        <div className="titreCard"><h1>Le design qui parle pour vous.</h1></div>
        <div className="sDetails">
            <div className="sImg">
                <div id="site" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/design1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/design2.jpg" alt="Second slide"/>
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
                <h2>Service de Conception Graphique</h2>
                <p>
                Nous allons vous aider à créer un logo, chartes graphiques, bannières publicitaires, Cartes visite, Flyers et 
                Brochures de qualité qui vous permettra d'attirera le regard de votre entreprise ou de votre marque.
                </p>
                <p>
                L’agence Imagin Creative de publicité au Maroc, vous accompagne dans la conception, la création et l'analyse de 
                vos attentes, vos désires et vos nécessités pour adapter votre identité visuelle et réussir votre présence dans le marché. 
                La création graphique est le pilier de votre communication visuelle. Nous créons des visuels adaptés à vos tous vos leviers 
                et supports de communications :
                <ul><b>
                    <li>Cartes visite ou d'invitation.</li>
                    <li>logos, bannières web.</li>
                    <li>Flyers ou Brochures.</li>
                    <li>Chartes graphiques.</li>
                    <li>Dépliants, pochettes.</li>
                    <li>Conception Kakémono.</li>
                    <li>Et bien d'autre...</li>
                    </b>
                </ul>
                </p>
                <h2>Pourquoi confier votre image à Unicreative ?</h2>
                <p>
                Le design graphique est bien plus qu'une simple question d'esthétique : c'est le premier contact entre votre marque et vos futurs clients.
                 Basée à Fès, l’agence Unicreative met son expertise créative au service de votre identité visuelle pour transformer vos idées en supports
                  percutants. Que ce soit pour le web ou l'impression, nous créons des designs qui marquent les esprits.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">1</span><h3>Une identité visuelle unique et mémorable</h3>
                </div>
                <p>
                Nous ne nous contentons pas de créer des images ; nous bâtissons des marques. Nous vous aidons à concevoir une charte graphique cohérente
                 qui reflète vos valeurs et capte l'attention de votre cible dès le premier coup d'œil.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">2</span><h3>Des supports print de haute qualité.</h3>
                </div>
                <p>
                L'impression reste un levier puissant. De la carte de visite au catalogue professionnel, nous maîtrisons toute la chaîne graphique pour vous 
                garantir un rendu impeccable, des couleurs fidèles et une mise en page qui valorise votre message.
                </p>
                <div className="d-flex align-items-center">
                    <span className="nbr">3</span><h3>Co-création et satisfaction..</h3>
                </div>
                <p>
                Tout comme pour nos projets web, vous restez au centre du processus. Nous vous proposons des concepts créatifs basés sur vos besoins, 
                nous échangeons sur vos retours, et nous finalisons ensemble le design qui portera haut les couleurs de votre entreprise.
                </p>
                <h2>FAQs</h2>
                <div class="faq-container">
                    <details>
                        <summary>Combien coûte une prestation de conception graphique ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Le tarif dépend de la complexité du projet : s'agit-il d'une création de logo unique, d'une charte graphique complète ou de
                             supports print (flyers, catalogues) ? Chaque devis est personnalisé selon le temps de recherche créative et le nombre de déclinaisons souhaitées.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quelles sont les étapes de création de mon identité visuelle ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Notre processus est collaboratif : nous commençons par un brief pour comprendre vos valeurs, suivi d'une phase de recherche de 
                            concepts, de la présentation de pistes créatives, et enfin de l'ajustement selon vos retours jusqu'à la validation finale.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quel est le délai pour recevoir mes fichiers graphiques ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Pour un logo ou un support simple, comptez généralement 3 à 5 jours ouvrés. Pour des projets plus vastes comme une identité 
                            visuelle complète ou un catalogue multi-pages, le délai peut varier de 10 à 15 jours selon l'importance des recherches.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Quels formats de fichiers allez-vous me fournir ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Nous livrons tous les fichiers sources et finaux nécessaires : formats vectoriels (AI, EPS, PDF) pour une impression haute 
                            définition sans perte de qualité, et formats web (PNG, JPG) pour vos réseaux sociaux et votre site internet.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>Proposez-vous également l'impression de mes supports ?<span class="icon">+</span></summary>
                        <div class="faq-content">
                            <p>
                            Absolument. En tant qu'agence globale, nous gérons non seulement la conception mais aussi l'impression de vos supports 
                            (numérique et offset) pour vous garantir un rendu des couleurs et une qualité de papier conformes à vos attentes.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
                        <div className="liendemandes"><Link className="liendemande" to="/demande/service">Demander</Link></div>
        </div>
    </div>
}