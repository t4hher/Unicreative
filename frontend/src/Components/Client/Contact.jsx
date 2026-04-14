export default function Contact(){
    return <div>
        <div className="sBanner">
            <div>
                <h1 className="titrerealisation">Contacter Nous</h1>
                <p>
                Vous avez un projet en tête ou une question sur nos services ? Notre équipe est à votre écoute pour transformer vos 
                idées en réalité.
                </p>
            </div>
            <img src="/contact.svg" alt="" />
        </div>
        <h2 className="titlecon">Échangeons ensemble sur votre futur succès.</h2>
        <div className="formcon">
            <form action="" className="formc">
                <div>
                    <label for="titre" className='form-labeld'>Nom et Prenom :</label>
                    <input type="text" class="form-controld" id="titre"  name='titre'/>
                </div>
                <div>
                    <label for="titre" className='form-labeld'>Entrer Email/Telephone :</label>
                    <input type="text" class="form-controld" id="titre"  name='titre'/>
                </div>
                <div class="mb-3">
                    <label for="description" className="form-labeld">Message :</label>
                    <textarea className="form-controld" id="description" rows="2"></textarea>
                </div>
                <button type="submit" class="buttondem">Envoyer</button>
            </form>
        </div>
    </div>
}
