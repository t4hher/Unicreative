export default function Services(){
    return <div className="service">
        <div className="sBanner">
            <div>
                <h1 className="titrerealisation">Nos Services</h1>
                <p>Transformez vos idées en actifs performants. Explorez nos services conçus pour <b>booster votre visibilité en ligne et hors ligne</b></p>
            </div>
            <img src="/browse.svg" alt="" />
        </div>
        <div className="split">
            <div className="horLine"></div>
            <img src="/sLogo.png" alt="" />
            <div className="horLine"></div>
        </div>
        <div className="titreCard"><h1>Créer l'Impact, du Digital au Papier</h1></div>
        <div className="filter">
                <span>Filtrer Par Catégorie: </span>
                <div className="filterBtn">
                    <a href="#" className="active">Tous</a>
                    <a href="#">Digital</a>
                    <a href="#">Print</a>
                </div> 
            </div>
        <div className="cards">
            <div className="card">
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
                <div className="card-body">
                    <h5 className="card-title">Création Site Web</h5>
                    <div className="card-text">
                        <p>
                            <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?
                        </p>
                         <p><strong>Catégorie: </strong>Digital</p>
                    </div>
                    <a href="#" className="btn-postuler">Postuler</a>
                </div>
            </div>
            <div className="card">
                <div id="design" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/design1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/design2.jpg" alt="Second slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-bs-target="#design" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" data-bs-target="#design" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>

                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Conception Graphique</h5>
                    <div className="card-text">
                        <p>
                            <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?
                        </p>
                         <p><strong>Catégorie: </strong>Digital/Print</p>
                    </div>
                    <a href="#" className="btn-postuler">Postuler</a>
                </div>
            </div>
            <div className="card">
                <div id="print" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/print1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/print2.jpg" alt="Second slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-bs-target="#print" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" data-bs-target="#print" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>

                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Impression Numerique et Offset</h5>
                    <div className="card-text">
                        <p>
                            <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?
                        </p>
                         <p><strong>Catégorie: </strong>Print</p>
                    </div>
                    <a href="#" className="btn-postuler">Postuler</a>
                </div>
            </div>
            <div className="card">
                <div id="app" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/app1.png" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/app2.jpg" alt="Second slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-bs-target="#app" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" data-bs-target="#app" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>

                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Création des Applications</h5>
                    <div className="card-text">
                        <p>
                            <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?
                        </p>
                         <p><strong>Catégorie: </strong>Digital</p>
                    </div>
                    <a href="#" className="btn-postuler">Postuler</a>
                </div>
            </div>
            <div className="card">
                <div id="3d" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/3d1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/3d2.jpg" alt="Second slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-bs-target="#3d" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" data-bs-target="#3d" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>

                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Modélisation 3D</h5>
                    <div className="card-text">
                        <p>
                            <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?
                        </p>
                         <p><strong>Catégorie: </strong>Digital</p>
                    </div>
                    <a href="#" className="btn-postuler">Postuler</a>
                </div>
            </div>
            <div className="card">
                <div id="event" class="carousel slide card-img" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/services/event1.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/services/event2.jpg" alt="Second slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-bs-target="#event" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" data-bs-target="#event" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon text-danger" aria-hidden="true"></span>

                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Evénementielle</h5>
                    <div className="card-text">
                        <p>
                            <strong>Description: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea aliquid neque voluptas, culpa quos laborum iure nam repudiandae aspernatur?
                        </p>
                         <p><strong>Catégorie: </strong>Print</p>
                    </div>
                    <a href="#" className="btn-postuler">Postuler</a>
                </div>
            </div>
        </div>
    </div>
}