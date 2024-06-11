import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'



function Footer() {
  return (
    <div className='footer' id="footer"> 
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}alt=""/>
            <p>The wait is over! We’re officially open to satisfy your cravings</p>
            <div className="footer-social-icon">
        <img src={assets.facebook_icon} alt=""/>
        <img src={assets.twitter_icon} alt=""/>
        <img src={assets.linkedin_icon} alt=""/>
        </div>
       

        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home
                </li>
                <li>About
                </li>
                <li>Contact
                </li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>get in touch</h2>
            <ul>
                <li>8855225588</li>
                <li>contacttomato@.com</li>
            </ul>
        </div>
    </div>
<hr/>
      <p className="footer-copyright">
        Copyright2024@Tomato.com-All Right Reserved
      </p>
    </div>
  )
}

export default Footer