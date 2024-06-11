import React,{useState} from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const  LoginPopup=({setShowLogin})=> {
const [currentState,setCurrState]=useState("login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="div login-popup-tittle">
          <h2>
{currentState}
          </h2>
          <img  onClick={()=>setShowLogin(false)}
          src={assets.cross_icon} alt=""></img>
        </div>
        <div className="div login-popup-inputs">
          {currentState==="login"?<></>:
           <input type="text" placeholder='Ente your Name'  required/>
          }
         
          <input type="email" placeholder='Ente your email'  required/>
          <input type="password" placeholder='Ente your password'  required/>
        </div>
        <button>{currentState==="sign up"?"Create account":"Login"}</button>
        <div className="div login-popup-condition">
          <input type='checkbox'required></input>
          <p>By continuing, I agree to the terms of use and Privacy Policey</p>
        </div>
        {
          currentState==='login'
          ?<p>Create  a new account?<span onClick={()=>setCurrState('sign up')}>Click Here</span></p>
          :<p>Already have an account? <span onClick={()=>setCurrState('login')}>Login Here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopup
