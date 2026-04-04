import React from 'react'
export default function Login() {
  return (
    <div className='body'>
        <div className="login-container">
            <h1 className='titlelogin'>Log in</h1>
            <form>
                <label className='labellogin'>Email</label>
                <input type="text" placeholder="Entrer email" className='inputlogin'/>
                <label className='labellogin'>Mod de Passe</label>
                <input type="password" placeholder="Entrer Mode de Pass" className='inputlogin'/>
                <button type="submit" className='btnlogin'>Log in</button>
            </form>
</div>
    </div>
  )
}
