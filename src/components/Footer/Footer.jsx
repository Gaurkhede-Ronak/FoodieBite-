import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum delectus recusandae. Modi sed quibusdam voluptas dolorum alias maiores earum. Soluta libero quaerat quasi aspernatur mollitia laborum culpa est esse.
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-121-654-9870</li>
                <li>contact@foodiebite.com</li>
            </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2026 © FoodieBite.com - All Right Reserved.</p>
<p>         Design and Developed by : Ronak Gaurkhede</p>
    </div>
  )
}

export default Footer