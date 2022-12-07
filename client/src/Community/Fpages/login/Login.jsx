import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import Fhome from '../Fhome/Fhome';
import "./login.scss"
// import { async } from '@firebase/util';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/Fhome")

    } catch (error) {
      setError(true)
    }
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">StackOverflow Community</h3>
            <span className="registerDesc">
                Connect with friends and the world around you on Community.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <div className="bottom">
                  <form onSubmit={handleLogin} className="bottomBox">
                    <input type="email" placeholder='Email' id='email' className='loginInput' required />
                    <input type="password" placeholder='Password' id='password' className='loginInput' minLength={6} required />
                    <button type='submit' className="loginButton">Sign In</button>
                    <Link to="/register">
                      <button className="loginRegisterButton">Create a New Account</button>
                    </Link>
                    {error && <span>Something went wrong!</span>}
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
