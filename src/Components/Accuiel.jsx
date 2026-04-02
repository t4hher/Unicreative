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
    </div>
}