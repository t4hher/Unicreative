import React, { useState } from 'react'
import { loginAdmin } from '../../Store/AdminSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Login() {

  const [login, setLogin] = useState("")
  const [password, setPass] = useState("")
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch= useDispatch();
  const navigate= useNavigate();

  async function handlelogin(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);

    try {
        const response = await dispatch(loginAdmin(formData)).unwrap();
        navigate('/admin/dashboard'); 
    }catch (error) {
        if(error.errors){
          setErrors(error.errors);
          console.log(errors)
        }else if (error.message) {
          setErrorMessage(error.message);
        }
    }
}
  
  return (
    <div className='loginBody'>
      <img src="/LOGO.png" alt="" />
      <div className="login-container">
        <h1 className='titlelogin'>Inscription</h1>
        {errorMessage && (<div className="alert alert-danger" role="alert">{errorMessage}</div>)}
        <form onSubmit={handlelogin}>
          <label className='labellogin'>Login</label>
          <input type="text" onChange={(e) => setLogin(e.target.value)}  placeholder="Entrer le login" className={errors.login ? "form-control is-invalid" : "form-control"}/>
            {errors.login && <div className="invalid-feedback">{errors.login[0]}</div>}
          <label className='labellogin'>Mot de Passe</label>
          <input value={password} onChange={(e)=>setPass(e.target.value)}  type="password" placeholder="Entrer le mot de passe" className={errors.password ? "form-control is-invalid" : "form-control"}/>
            {errors.login && <div className="invalid-feedback">{errors.password[0]}</div>}
          <button type="submit" className='btnlogin'>S'inscrire</button>
        </form>
      </div>
    </div>
  )
}
