export default function Contact(){
    return <div>
        <div className="sBanner">
            <div>
                <h1 className="titrerealisation">Contacter Nous</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    amet est alias nemo, aliquam sapiente! Commodi mollitia quibusdam
                </p>
            </div>
            <img src="/browse.svg" alt="" />
        </div>
        <div className="fontcon">
             <div className="split">
            <div className="horLine"></div>
            <img src="/sLogo.png" alt="" />
            <div className="horLine"></div>
        </div>
            <div>
            <h2 className="titlecon">Page de Contact</h2>
        </div>
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
    </div>
}
