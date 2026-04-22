import React, { useState } from 'react'
import { loginAdmin } from '../../Store/AdminSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Login() {

  const [login, setLogin] = useState("")
  const [password, setPass] = useState("")

  const dispatch= useDispatch();
  const navigate= useNavigate();

  async function handlelogin(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);

    try {
        const response = await dispatch(loginAdmin(formData));

        if (response.meta.requestStatus === "fulfilled") {
            navigate('/admin/dashboard'); 
        } else {
            setErrorMessage('Login ou mot de passe incorrect.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
  
  return (
    <div className='loginBody'>
      <img src="/LOGO.png" alt="" />
      <div className="login-container">
        <h1 className='titlelogin'>Inscription</h1>
        <form onSubmit={handlelogin}>
          <label className='labellogin'>Login</label>
          <input value={login} onChange={(e)=>setLogin(e.target.value)} type="text" placeholder="Entrer le login" className='inputlogin'/>
          <label className='labellogin'>Mot de Passe</label>
          <input value={password} onChange={(e)=>setPass(e.target.value)}  type="password" placeholder="Entrer le mot de passe" className='inputlogin'/>
          <button type="submit" className='btnlogin'>S'inscrire</button>
        </form>
      </div>
    </div>
  )
}
