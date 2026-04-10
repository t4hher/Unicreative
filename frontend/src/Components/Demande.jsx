export default function Demande(){
    return <div>
        <div  className='formdem'>
            <form  className='formd'>
                <h2> Demander</h2>
                <div>
                    <label for="titre" className='form-labeld'>Nom et Prenom :</label>
                    <input type="text" class="form-controld" id="titre"  name='titre'/>
                </div>
                <div>
                    <label for="email" className='form-labeld'> Email :</label>
                    <input type="email" class="form-controld" id="email"  name='email'/>
                </div>

                <div>
                    <label for="telephone" className='form-labeld'>Numéro de Télephone:</label>
                    <input type="text" class="form-controld" id="telephone" name='telephone'/>
                </div>
                <div class="mb-3">
                    <label for="description" className="form-labeld">Description</label>
                    <textarea className="form-controld" id="description" rows="2"></textarea>
                </div>
                    <button type="submit" class="buttondem">Demander</button>
            </form>
        </div>
    </div>
}
