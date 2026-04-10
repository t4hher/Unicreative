import React from 'react'
export default function Poste() {
  return (
    <div>
        <h1 className='Tposte'>Développeur front-end React</h1>
                <div className='imgpostes'>
                    <img className="imgposte" src="https://grupo-giga.com/wp-content/uploads/2024/10/business-coding-2.jpg" alt="Card image cap"/>
                </div>
        <div className='postefor'>
            <div className='Pposte'>
                <ul>
                    <li><p><strong>Titre :</strong>Développeur front-end React</p></li>
                <li>
                    <p>
                        <strong>Description :</strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, optio quod. Cum obcaecati saepe esse
                        , autem pariatur sit quam voluptatum est iste tempore magnam cupiditate quae placeat ipsa sunt? Molestiae?
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Type de Contrat :</strong>Stage(PFE)
                    </p>
                </li>
                <li><p><strong>Profil :</strong>Développeur Laravel et React avec 2 ans d'expérience</p></li>
                </ul>

            </div>
            <div className='formulaire'>
                <form className='forms'>
                    <div class="form-group mb-2">
                        <label for="titre" className='form-label'>Nom et prenom :</label>
                        <input type="text" class="form-control" id="titre"  name='titre'/>                </div>
                    <div class="form-group ">
                        <label for="telephone" className='form-label'>Numéro de Télephone:</label>
                        <input type="text" class="form-control" id="telephone" name='telephone'/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" className='form-label'>Email:</label>
                        <input type="email" class="form-control" id="email" name='email'/>
                    </div>

                    <div className='sexecheck mb-2'>
                        <label htmlFor="" className='form-label'>Sexe :</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexe" id="sexe" value="option1" />
                            <label class="form-labele" for="sexe">
                                Femme
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexe" id="sexe" value="option2"/>
                            <label class="form-labele" for="sexe">
                                Homme
                            </label>
                        </div>
                    </div>
                    <div class="form-group mb-2">
                        <label for="lettre" className='form-label'>Lettre de Motivation:</label>
                        <input type="file" name="lettre" id="lettre"  className='form-control'/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="lettre" className='form-label'>Entrer le CV :</label>
                        <input type="file" name="lettre" id="lettre"  className='form-control' />
                    </div>
                    <button type="submit">Postuler</button>
                </form>
            </div>
        </div>
    </div>
  )
}
