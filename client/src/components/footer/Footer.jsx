import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    
  <div>
        <div className='footer'>
          <div className="footer-content">
            <div className="footer-content-left">
              <h2>JRA</h2>
             
              <p>Join us either as a client looking to have your projects handled by a team of skilled experts, or as a freelancer eager to collaborate and showcase your talents. Together, we bring innovative ideas to life.</p>
             
              <div className="footer-socials">
                <img src={assets.facebook} alt=""/>
                <img src={assets.linkedin} alt=""/>
                <img src={assets.twitter} alt=""/>
              </div>
            </div>

            <div className="footer-content-center">
              <h2>Quick links</h2>
                <a href='#'>Home</a>
                <a href='#'>About us</a>
                <a href='#'>Terms of service</a>
            </div>

            <div className="footer-content-right">
              <h2>Get intouch</h2>
              <p>0712821844</p>
              <p>hamisiyawa99@gmail.com</p>
              
            </div>

          </div>

           <hr />
        <p className="footer-copyrigh"> &copy; 2025 Joe tech data analysis and reserch consultancy. All Rights
        Reserved.</p>
        </div>
        
        
  </div>
  
   
  )
}

export default Footer
