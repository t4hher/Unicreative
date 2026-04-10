import React from 'react'
export default function Login() {
  return (
    <div className='loginBody'>
      <img src="/LOGO.png" alt="" />
        <div className="login-container">
            <h1 className='titlelogin'>Inscription</h1>
            <form>
                <label className='labellogin'>Login</label>
                <input type="text" placeholder="Entrer le login" className='inputlogin'/>
                <label className='labellogin'>Mot de Passe</label>
                <input type="password" placeholder="Entrer le mot de passe" className='inputlogin'/>
                <button type="submit" className='btnlogin'>S'inscrire</button>
            </form>
</div>
    </div>
  )
}
